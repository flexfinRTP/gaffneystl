import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Education & Insights | Gaffney Wealth Management Blog',
  description: 'Access expert insights on wealth management, investment strategies, retirement planning, and digital assets. Stay informed with our comprehensive financial education resources.',
  keywords: [
    'financial education',
    'wealth management blog',
    'investment insights',
    'retirement planning',
    'financial planning',
    'digital assets',
    'cryptocurrency',
    'investment strategies',
    'financial advisor blog',
    'St. Louis financial advice'
  ],
  openGraph: {
    title: 'Financial Education & Insights | Gaffney Wealth Management Blog',
    description: 'Access expert insights on wealth management, investment strategies, retirement planning, and digital assets. Stay informed with our comprehensive financial education resources.',
    type: 'website',
    locale: 'en_US',
    url: 'https://gaffneystl.com/blog',
    siteName: 'Gaffney Wealth Management',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Education & Insights | Gaffney Wealth Management Blog',
    description: 'Access expert insights on wealth management, investment strategies, retirement planning, and digital assets. Stay informed with our comprehensive financial education resources.',
    creator: '@gaffneystl',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 