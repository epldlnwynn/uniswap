const { ChainId } = require('@uniswap/sdk-core')
const { UNIVERSAL_ROUTER_CREATION_BLOCK } = require('@uniswap/universal-router-sdk')

/* eslint-env node */
require('dotenv').config()

const forkingConfig = {
  httpHeaders: {
    Origin: 'localhost:3000', // infura allowlists requests by origin
  },
}

const forks = {
  [ChainId.MAINNET]: {
    url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    blockNumber: UNIVERSAL_ROUTER_CREATION_BLOCK(ChainId.MAINNET),
    ...forkingConfig,
  },
  [ChainId.POLYGON]: {
    url: `https://polygon-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    blockNumber: UNIVERSAL_ROUTER_CREATION_BLOCK(ChainId.POLYGON),
    ...forkingConfig,
  },
}

module.exports = {
  forks,
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      chainId: ChainId.MAINNET,
      forking: forks[ChainId.MAINNET],
      accounts: {
        count: 2,
      },
      mining: {
        auto: true, // automine to make tests easier to write.
        interval: 0, // do not interval mine so that tests remain deterministic
      },
    },
    etherscan: {
      url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
      ethNetwork: 'mainnet',
      gas: 2100000,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
    },
  },
  solidity: {
    version: '0.8.8',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 100000000,
  },
}
