/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.9",
  paths: {
    sources: "./src/contracts",
    tests: "./src/test",
    cache: "./src/cache",
    artifacts: "./src/artifacts",
  },
};
