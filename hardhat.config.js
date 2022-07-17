/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  paths: {
    sources: "./src/contracts",
    tests: "./src/test",
    cache: "./src/cache",
    artifacts: "./src/artifacts",
  },
  networks: {
    polygon: {
      url: process.env.POLYGON_URL,
      accounts: [`0x${process.env.POLYGON_ACCOUNT}`],
    },
  },
};
