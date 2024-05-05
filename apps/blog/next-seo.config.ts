import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | KBC SWAP',
  defaultTitle: 'Blog | KBC SWAP',
  description:
    'Cheaper and faster than Uniswap? Discover KBC SWAP, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@',
    site: '@',
  },
  openGraph: {
    title: 'KBC SWAP - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM on BSC! Earn KBC SWAP .',
    images: [{ url: 'https://pancakeswap.finance/images/hero.png' }],
  },
}
