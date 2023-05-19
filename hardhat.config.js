require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
