const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "surprise tenant juice crystal artwork pond inform vapor click caught rally tunnel"; // Replace with your Metamask mnemonic

module.exports = {
  hedera_testnet: {
      provider: () => {
        return new HDWalletProvider({
          privateKeys: [privateKey],
          providerOrUrl: "https://testnet.hashio.io/api",
          pollingInterval: 15000,
          networkCheckTimeout: 1000000,
          timeoutBlocks: 500,
        });
      },
      network_id: "296",
      gas: 8000000,
      gasPrice: 390000000000,
      chainId: 296,
      confirmations: 3,
      skipDryRun: true,
      timeoutBlocks: 500,
      networkCheckTimeout: 1000000,
      deploymentPollingInterval: 15000,
    },
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, "https://eth-sepolia.g.alchemy.com/v2/8SpOm-MvRcOKtk8cIQKN9e1w9tw_yNTh"),
      network_id: 11155111,
      gas: 5500000,
      gasPrice: 3000000000, // 3 Gwei
      timeoutBlocks: 500,
      networkCheckTimeout: 30000,
    },
    holesky: {
      provider: () => new HDWalletProvider(mnemonic, "https://eth-holesky.g.alchemy.com/v2/8SpOm-MvRcOKtk8cIQKN9e1w9tw_yNTh"),
      network_id: 17000,
      gas: 5500000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",
    },
  },
};
