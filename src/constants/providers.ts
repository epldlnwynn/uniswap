import { ChainId } from '@uniswap/sdk-core'
import AppRpcProvider from 'rpc/AppRpcProvider'
import AppStaticJsonRpcProvider from 'rpc/StaticJsonRpcProvider'
import StaticJsonRpcProvider from 'rpc/StaticJsonRpcProvider'

import { ChainScroll } from './chainLists'
import { SupportedInterfaceChain } from './chains'
import { RPC_URLS } from './networks'

const providerFactory = (chainId: number, i = 0) => {
  return new AppStaticJsonRpcProvider(chainId, RPC_URLS[chainId][i])
}

const RPC_CHAIN_LISTS: { [key: number]: StaticJsonRpcProvider } = {
  [ChainScroll.CHAIN_ID]: providerFactory(ChainScroll.CHAIN_ID),
}

/**
 * These are the only JsonRpcProviders used directly by the interface.
 */
export const RPC_PROVIDERS: { [key in SupportedInterfaceChain]: StaticJsonRpcProvider } = {
  [ChainId.MAINNET]: new AppRpcProvider(ChainId.MAINNET, [
    providerFactory(ChainId.MAINNET),
    providerFactory(ChainId.MAINNET, 1),
  ]),
  [ChainId.GOERLI]: providerFactory(ChainId.GOERLI),
  [ChainId.SEPOLIA]: providerFactory(ChainId.SEPOLIA),
  [ChainId.OPTIMISM]: providerFactory(ChainId.OPTIMISM),
  [ChainId.OPTIMISM_GOERLI]: providerFactory(ChainId.OPTIMISM_GOERLI),
  [ChainId.ARBITRUM_ONE]: providerFactory(ChainId.ARBITRUM_ONE),
  [ChainId.ARBITRUM_GOERLI]: providerFactory(ChainId.ARBITRUM_GOERLI),
  [ChainId.POLYGON]: providerFactory(ChainId.POLYGON),
  [ChainId.POLYGON_MUMBAI]: providerFactory(ChainId.POLYGON_MUMBAI),
  [ChainId.CELO]: providerFactory(ChainId.CELO),
  [ChainId.CELO_ALFAJORES]: providerFactory(ChainId.CELO_ALFAJORES),
  [ChainId.BNB]: providerFactory(ChainId.BNB),
  [ChainId.AVALANCHE]: providerFactory(ChainId.AVALANCHE),
  [ChainId.BASE]: providerFactory(ChainId.BASE),

  ...RPC_CHAIN_LISTS,
}

export const DEPRECATED_RPC_PROVIDERS: { [key in SupportedInterfaceChain]: AppStaticJsonRpcProvider } = {
  [ChainId.MAINNET]: providerFactory(ChainId.MAINNET),
  [ChainId.GOERLI]: providerFactory(ChainId.GOERLI),
  [ChainId.SEPOLIA]: providerFactory(ChainId.SEPOLIA),
  [ChainId.OPTIMISM]: providerFactory(ChainId.OPTIMISM),
  [ChainId.OPTIMISM_GOERLI]: providerFactory(ChainId.OPTIMISM_GOERLI),
  [ChainId.ARBITRUM_ONE]: providerFactory(ChainId.ARBITRUM_ONE),
  [ChainId.ARBITRUM_GOERLI]: providerFactory(ChainId.ARBITRUM_GOERLI),
  [ChainId.POLYGON]: providerFactory(ChainId.POLYGON),
  [ChainId.POLYGON_MUMBAI]: providerFactory(ChainId.POLYGON_MUMBAI),
  [ChainId.CELO]: providerFactory(ChainId.CELO),
  [ChainId.CELO_ALFAJORES]: providerFactory(ChainId.CELO_ALFAJORES),
  [ChainId.BNB]: providerFactory(ChainId.BNB),
  [ChainId.AVALANCHE]: providerFactory(ChainId.AVALANCHE),
  [ChainId.BASE]: providerFactory(ChainId.BASE),

  ...RPC_CHAIN_LISTS,
}
