const { network, ethers } = require("hardhat");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    log("----------------------------------------------------")
    log("Deploying GovernanceToken and waiting for confirmations...")
    const governanceToken = await deploy("GovernanceToken", {
      from: deployer,
      args: [],
      log: true,
      // we need to wait if on a live network so we can verify properly
      waitConfirmations: 1,
    })
    log("Deployed")
}

module.exports.tags = ["governorToken", "all"];