import { ChainId, ERC20Token, WBNB } from '@pancakeswap/sdk'
// import {  } from './common'

export const KBCTokens = {

  USD: new ERC20Token(
    ChainId.KBC,
    '0xa7d0e69fb770c6A3CB48E365f64F2d0fD44DbD42', 
    18,
    'USDT',
    'USDT', 
    'https://www.binance.com/',
  ),

  USD1: new ERC20Token(
    ChainId.KBC,  
    '0xd8Be685E1868B4BAC6FE9D4dB8b6fDaA66CDc7f9',
    18,
    'USDT',
    'USDT',
    'https://www.binance.com/',
  ),

  wbnb: WBNB[ChainId.BSC_TESTNET],
 // cake: CAKE_TESTNET,
  // busd: BUSD_TESTNET,
  syrup: new ERC20Token(
    ChainId.KBC,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9', 
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/', 
  ), 
  bake: new ERC20Token(
    ChainId.KBC,
    '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    18,
    'BAKE',
    'Bakeryswap Token', 
    'https://www.bakeryswap.org/',
  ),
  WKBC: new ERC20Token(ChainId.KBC, '0xd243f54604F88D22AbBb7a13F62a1780a50d0a19', 18, 'WKBC ', 'Wrapped KBC'),   
  wbtc: new ERC20Token(ChainId.KBC, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 8, 'WBTC', 'Wrapped BTC'),
  usdc: new ERC20Token(
    ChainId.KBC,
    '0xCA8eB2dec4Fe3a5abbFDc017dE48E461A936623D',
    18,
    'USDC',
    'Binance-Peg USD Coin',
  ),
  usdt: new ERC20Token(ChainId.KBC, '0x0fB5D7c73FA349A90392f873a4FA1eCf6a3d0a96', 18, 'USDT', 'Tether USD'),
  mockBusd: new ERC20Token(
    ChainId.KBC,
    '0x3304dd20f6Fe094Cb0134a6c8ae07EcE26c7b6A7',
    18,
    'BUSD',
    'Binance USD',
  ),
}
