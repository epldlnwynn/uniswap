import { ChainId, Token } from '@uniswap/sdk-core'
import { UNIVERSAL_ROUTER_ADDRESS, UNIVERSAL_ROUTER_CREATION_BLOCK } from '@uniswap/universal-router-sdk'

import * as Scroll from './scroll'

console.log('init chains', ChainId)

export const ChainScroll = Scroll

// =========================  映射原生代币配置  =========================

export const WRAPPED_NATIVE_CURRENCY: { [chainId: number]: Token | undefined } = {
  [Scroll.CHAIN_ID]: Scroll.WETH,
}

// =========================  网络类型配置  =========================

export const CHAIN_INFO: any = {
  [Scroll.CHAIN_ID]: Scroll.INFO,
}
export const CHAIN_IDS_TO_NAMES = {
  [Scroll.CHAIN_ID]: Scroll.NAME.toLowerCase(),
}
export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = []
export const TESTNET_CHAIN_IDS = []
export const L1_CHAIN_IDS = []
export const L2_CHAIN_IDS = [Scroll.CHAIN_ID]
export const START_BLOCKS = {
  [Scroll.CHAIN_ID]: Scroll.ROUTER_ADDRESS.creationBlock,
}

// =========================  RPC 设置  =========================

export const FALLBACK_URLS: { [key: number]: Array<string> } = {
  [Scroll.CHAIN_ID]: [],
}
export const RPC_URLS: { [key: number]: Array<string> } = {
  [Scroll.CHAIN_ID]: Scroll.RPC_URLS,
}

// =========================  合约路由配置  =========================

const CHAIN_CONFIGS: any = {
  [Scroll.CHAIN_ID]: Scroll.ROUTER_ADDRESS,
}
export function ROUTER_ADDRESS(chainId: number): string {
  if (chainId in CHAIN_CONFIGS) {
    return CHAIN_CONFIGS[chainId].router
  }
  return UNIVERSAL_ROUTER_ADDRESS(chainId)
}
export function ROUTER_CREATION_BLOCK(chainId: number): number {
  if (chainId in CHAIN_CONFIGS) {
    return CHAIN_CONFIGS[chainId].creationBlock
  }
  return UNIVERSAL_ROUTER_CREATION_BLOCK(chainId)
}

// =========================  一些扩展方法  =========================

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getChainUI(chainId: number, darkMode: boolean): any {
  if (chainId == Scroll.CHAIN_ID) {
    return {
      Symbol: Scroll.LOGO,
      bgColor: '#eac28e',
      textColor: '#cb760e',
    }
  }

  return undefined
}

export function getChainPriority(chainId: number): number {
  if (chainId == Scroll.CHAIN_ID) {
    return 0
  }

  return 8
}
