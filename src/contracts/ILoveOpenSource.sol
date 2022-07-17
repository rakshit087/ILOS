//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract ILoveOpenSource is ERC20, ERC20Burnable, ChainlinkClient, Ownable {
    using Chainlink for Chainlink.Request;
    bytes32 private jobId;
    uint256 private fee;
    string baseUrl;

    //make a list of all the users who have minted
    mapping(address => bool) public mintedAddress;
    mapping(string => bool) public mintedUsername;
    mapping(bytes32 => address) public minterAddress;

    constructor() ERC20("ILoveOpenSource", "ILOS") {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x188b71C9d27cDeE01B9b0dfF5C1aff62E8D6F434);
        jobId = "7599d3c8f31e4ce78ad2b790cbcfc673";
        fee = 0.07 * 10**18;
        baseUrl = "https://ilos.vercel.app/api/mint/";
        _mint(msg.sender, 10000 * 10**decimals());
    }

    function mint(string memory _token, string memory _username)
        public
        returns (bytes32 requestId)
    {
        //make sure the user is not already minted
        require(!mintedAddress[msg.sender]);
        require(!mintedUsername[_username]);
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );
        string memory _url = string(
            bytes.concat(bytes(baseUrl), bytes(_token))
        );
        string memory _path = "ilos";
        int256 _multiply = 10**18;
        req.add("get", _url);
        req.add("path", _path);
        req.addInt("multiply", _multiply);
        mintedAddress[msg.sender] = true;
        mintedUsername[_username] = true;
        bytes32 _req = sendChainlinkRequest(req, fee);
        minterAddress[_req] = msg.sender;
        return _req;
    }

    function fulfill(bytes32 _requestId, uint256 _value)
        public
        recordChainlinkFulfillment(_requestId)
    {
        _mint(minterAddress[_requestId], _value);
    }
}
