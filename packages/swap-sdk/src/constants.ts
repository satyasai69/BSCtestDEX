import { Percent } from '@pancakeswap/swap-sdk-core'
import { ERC20Token } from './entities/token'

export enum ChainId {
  ETHEREUM =1 ,
  KBC =  11000, 
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
}
 
export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')  

export const FACTORY_ADDRESS = '0x8739479cB3A48569BAFC60887caE1DB19eaC06d6'      // 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73    

const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'    
 
export const FACTORY_ADDRESS_MAP: Record<number, string> = {  
  [ChainId.KBC]: '0x8739479cB3A48569BAFC60887caE1DB19eaC06d6', 
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: "0x865b96aC425B4d5F81f6986f5391f3278e307F0e",// FACTORY_ADDRESS, 
  [ChainId.BSC_TESTNET]: '0x9C69d0699E65e562041b606DAdb46484915a26b5',    // '0xe78a015B23aB458A3Cdb501F811Bd898ECE59753',  
}
export const INIT_CODE_HASH ='0x685fd49dd56729acf5e5f1f13dee8be39e0a7e62660d1cdb44de56aa022d764c'// '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5' 

const INIT_CODE_HASH_ETH = '0x685fd49dd56729acf5e5f1f13dee8be39e0a7e62660d1cdb44de56aa022d764c'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH, 
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.KBC]: '0x685fd49dd56729acf5e5f1f13dee8be39e0a7e62660d1cdb44de56aa022d764c',         // 0x4ebe4285f94212ea215880672e2d749cb314c339b13437a7c3a15c74b0209fd1 this
  [ChainId.BSC_TESTNET]: '0x685fd49dd56729acf5e5f1f13dee8be39e0a7e62660d1cdb44de56aa022d764c',      
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new ERC20Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WBNB = { 
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new ERC20Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC_TESTNET]: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',  
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.KBC]: new ERC20Token(
    ChainId.KBC,
    '0xd243f54604F88D22AbBb7a13F62a1780a50d0a19',  
    18,
    'KBC',
    'Wrapped KBC',
    'https://www.binance.org'
  ),
}

export const WKBC = {
  [ChainId.KBC]: new ERC20Token(
    ChainId.KBC,
    '0xd243f54604F88D22AbBb7a13F62a1780a50d0a19',  
    18,
    'KBC',
    'Wrapped KBC',
    'https://www.binance.org'
  ),
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.KBC]: WKBC[ChainId.KBC], 
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET], 
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.KBC]: { name: 'KBC', symbol: 'KBC', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'KBC', 
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
    decimals: 18,
  },
}
