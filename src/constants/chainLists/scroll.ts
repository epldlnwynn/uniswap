import { CHAIN_TO_ADDRESSES_MAP, ChainId, SUPPORTED_CHAINS, Token, V3_CORE_FACTORY_ADDRESSES } from '@uniswap/sdk-core'
import ms from 'ms'

import { ReactComponent as logo } from '../../components/Logo/ChainSymbols/scroll.svg'
import { darkTheme } from '../../theme/colors'

export const NAME = 'SCROLL'

export const CHAIN_ID = 534352

export const ADDRESSES = {
  v3CoreFactoryAddress: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693',
  quoterAddress: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
  v3MigratorAddress: '0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7',
  nonfungiblePositionManagerAddress: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
  tickLensAddress: '0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d',
  swapRouter02Address: '0x2626664c2603336E57B271c5C0b26F421741e481',
}

// 初始化配置
// @ts-ignore
;(ChainId[NAME] = CHAIN_ID), (ChainId[CHAIN_ID] = NAME), SUPPORTED_CHAINS.push(CHAIN_ID)
// @ts-ignore
CHAIN_TO_ADDRESSES_MAP[CHAIN_ID] = ADDRESSES
V3_CORE_FACTORY_ADDRESSES[CHAIN_ID] = ADDRESSES.v3CoreFactoryAddress

console.log('CHAIN_TO_ADDRESSES_MAP', CHAIN_TO_ADDRESSES_MAP)

export const LOGO = logo

export const RPC_URLS = ['https://rpc.scroll.io']

export const TOKEN_LIST = 'https://raw.githubusercontent.com/scroll-tech/token-list/main/scroll.tokenlist.json'

export const INFO: any = {
  networkType: 1, // NetworkType.L2
  blockWaitMsBeforeWarning: ms(`25m`),
  bridge: 'https://scroll.io/bridge',
  defaultListUrl: TOKEN_LIST,
  docs: 'https://docs.scroll.io/en/home/',
  explorer: 'https://scrollscan.com',
  infoLink: 'https://info.uniswap.org/#/scroll/',
  label: 'Scroll',
  statusPage: 'https://scrollscan.com/',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  color: darkTheme.chain_534352,
  backgroundColor: darkTheme.chain_534352_background,
}

export const USDC = new Token(CHAIN_ID, '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4', 6, 'USDC', 'USD//C')

export const USDT = new Token(CHAIN_ID, '0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df', 6, 'USDT', 'Tether USD')

export const WBTC = new Token(CHAIN_ID, '0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1', 8, 'WBTC', 'Wrapped BTC')

export const WETH = new Token(CHAIN_ID, '0x5300000000000000000000000000000000000004', 18, 'WETH', 'Wrapped Ether')

export const ROUTER_ADDRESS = {
  router: '0x82635AF6146972cD6601161c4472ffe97237D292',
  weth: WETH.address,
  creationBlock: 30000,
}
