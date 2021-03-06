const fs = require("fs")
const path = require("path")
const HDWalletProvider = require("truffle-hdwallet-provider")
const defaultMnemonic =
  "glass method front super auto hole know grace select prevent custom fancy"

module.exports = {
  networks: {
    development: {
      host: "0.0.0.0",
      port: 8545,
      network_id: "*"
    },

    ropsten: {
      gas: 5500000,
      gasPrice: 10000000000,
      provider: new HDWalletProvider(
        process.env.MNEMONIC || defaultMnemonic,
        "https://ropsten.infura.io"
      ),
      network_id: 3,
      skipDryRun: true,
      timeoutBlocks: 200
    },

    rinkeby: {
      gas: 5500000,
      gasPrice: 10000000000,
      provider: new HDWalletProvider(
        process.env.MNEMONIC || defaultMnemonic,
        "https://rinkeby.infura.io"
      ),
      network_id: 1,
      skipDryRun: true,
      timeoutBlocks: 200
    }
  },

  compilers: {
    solc: {
      version: "0.4.25",
      settings: {
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  },
  
  migrations_directory: path.resolve(__dirname, "./migrations"),
  contracts_directory: fs.existsSync(process.env.CONTRACTS_PATH)
    ? process.env.CONTRACTS_PATH
    : path.join(__dirname, "./contracts")
}
