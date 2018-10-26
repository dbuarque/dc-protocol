const path             = require('path')
const HDWalletProvider = require('truffle-hdwallet-provider')
const standartDAOCasinoMnemonic = 'glass method front super auto hole know grace select prevent custom fancy'

module.exports = {
  networks: {
    local: {
      gas        : 6700000,
      host       : '127.0.0.1',
      port       : 1406,
      gasPrice   : 32,
      network_id : '*'
    },

    ropsten: {
      gas           : 5500000,
      gasPrice      : 10000000000,
      provider      : new HDWalletProvider(process.env.MNEMONIC || standartDAOCasinoMnemonic, 'https://ropsten.infura.io'),
      network_id    : 3,
      skipDryRun    : true, 
      timeoutBlocks : 200
    },

    rinkeby: {
      gas           : 5500000,
      gasPrice      : 10000000000,
      provider      : new HDWalletProvider(process.env.MNEMONIC || standartDAOCasinoMnemonic, 'https://rinkeby.infura.io'),
      network_id    : 1,
      skipDryRun    : true, 
      timeoutBlocks : 200
    }
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },

  contracts_directory       : process.env.CONTRACTS_PATH || path.resolve(__dirname, './contracts'),
  migrations_directory      : path.resolve(__dirname, './migrations'),
  contracts_build_directory : path.resolve(__dirname, './build')
}
