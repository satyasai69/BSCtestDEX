import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | KBC SWAP',
  defaultTitle: 'KBC SWAP',
  description:
    'Cheaper and faster than Uniswap? Discover KBC, the leading DEX on KBC with the best farms in DeFi .',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@',
    site: '@',
  },
  openGraph: {
    title: 'KBC - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description: 
      'The most popular AMM on KBC SWAP by user count! Earn KBC SWAP through yield farming.',
    // images: [{ url: 'https://assets.pancakeswap.finance/web/og/hero.jpg' }],
  },
}
