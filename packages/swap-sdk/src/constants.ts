import { Percent } from '@pancakeswap/swap-sdk-core'
import { ERC20Token } from './entities/token'

export enum ChainId {
  ETHEREUM =1 ,
  KBC = 22000,// 11000, 
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
}
 
export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')  

export const FACTORY_ADDRESS = '0xdeeEb537Aad066AAdA2551CFEE638aD9aDF77269'    // 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73    

const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'    
 
export const FACTORY_ADDRESS_MAP: Record<number, string> = { 
  [ChainId.KBC]: '0xf098BaF10Ddc8Ae07B9A0281358C3DFE70420f26',
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: "0x865b96aC425B4d5F81f6986f5391f3278e307F0e",// FACTORY_ADDRESS, 
  [ChainId.BSC_TESTNET]: '0x4Ef477E4b4bDccf38aA911705710139Beb9e9487',    // '0xe78a015B23aB458A3Cdb501F811Bd898ECE59753',  
}
export const INIT_CODE_HASH ='0xac0bed126ac85506e0e39c3d1b602677f939e96b06e3543643c36d651320a0a1'// '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5' 

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH, 
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.KBC]: '0x4fce7a684f634944b22cdfda6391d7566c905460a5dbee029485b4383c403b5c',        // 0x4ebe4285f94212ea215880672e2d749cb314c339b13437a7c3a15c74b0209fd1 this
  [ChainId.BSC_TESTNET]: '0x3bbb400365f0bfaac9dc7394a228752c1c253327f1a3dbfb992e0a3c34d525f4',      
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
    '0xE1e61dD8DF8bbF75935fe04Dc214c6d517fc3622', 
    18,
    'KBC',
    'Wrapped KBC',
    'https://www.binance.org'
  ),
}

export const WKBC = {
  [ChainId.KBC]: new ERC20Token(
    ChainId.KBC,
    '0xE1e61dD8DF8bbF75935fe04Dc214c6d517fc3622',  
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
