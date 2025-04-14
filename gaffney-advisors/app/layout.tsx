import { Inter, Playfair_Display, Caveat } from 'next/font/google'
import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/react'
import ThemeRegistry from './theme-provider'
import './globals.css'

// Optimize fonts with subset and display
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const caveat = Caveat({ 
  subsets: ['latin'], 
  variable: '--font-caveat',
  display: 'swap',
  preload: true,
})

// Dynamically import components with no SSR
const Header = dynamic(() => import('./components/Header'), {
  ssr: false,
  loading: () => <div style={{ height: '80px' }} />,
})

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
  loading: () => <div style={{ height: '200px' }} />,
})

const LegalDisclaimerModal = dynamic(() => import('./components/LegalDisclaimerModal'), {
  ssr: false,
})

export const metadata = {
  title: {
    default: 'Gaffney Wealth Management - Digital Assets & Traditional Wealth Management in St. Louis',
    template: '%s | Gaffney Wealth Management'
  },
  description: 'Expert financial advisor specializing in digital assets (Bitcoin, stablecoins) and traditional wealth management. Serving St. Louis, MO with personalized investment strategies, retirement planning, and cryptocurrency guidance.',
  keywords: [
    'digital assets advisor',
    'bitcoin advisor',
    'cryptocurrency advisor',
    'stablecoin yield',
    'BTC investment',
    'wealth management',
    'financial planning',
    'investment management',
    'retirement planning',
    'digital assets',
    'cryptocurrency',
    'bitcoin',
    'BTC',
    'stablecoin',
    'yield farming',
    'DeFi',
    'blockchain',
    'estate planning',
    'tax strategies',
    'financial advisor',
    'St. Louis',
    'Missouri',
    'Clayton',
    'Gaffney',
    'Justin Gaffney'
  ],
  authors: [{ name: 'Justin Gaffney' }],
  creator: 'Justin Gaffney',
  publisher: 'Gaffney Wealth Management',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gaffneystl.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gaffneystl.com',
    siteName: 'Gaffney Wealth Management',
    title: 'Gaffney Wealth Management - Digital Assets & Traditional Wealth Management in St. Louis',
    description: 'Expert financial advisor specializing in digital assets (Bitcoin, stablecoins) and traditional wealth management. Serving St. Louis, MO with personalized investment strategies, retirement planning, and cryptocurrency guidance.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gaffney Wealth Management - Digital Assets & Traditional Wealth Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaffney Wealth Management - Digital Assets & Traditional Wealth Management in St. Louis',
    description: 'Expert financial advisor specializing in digital assets (Bitcoin, stablecoins) and traditional wealth management. Serving St. Louis, MO with personalized investment strategies, retirement planning, and cryptocurrency guidance.',
    images: ['/images/twitter-image.jpg'],
    creator: '@gaffneystl',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

// Add structured data for local business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Gaffney Wealth Management',
  description: 'Expert financial advisor specializing in digital assets and traditional wealth management in St. Louis, MO',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8000 Maryland Ave #1111',
    addressLocality: 'Clayton',
    addressRegion: 'MO',
    postalCode: '63105',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.6425,
    longitude: -90.3231
  },
  telephone: '+1-314-555-0123',
  email: 'justin@gaffneystl.com',
  url: 'https://gaffneystl.com',
  sameAs: [
    'https://www.linkedin.com/in/justingaffney',
    'https://twitter.com/gaffneystl'
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  },
  priceRange: '$$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 38.6425,
      longitude: -90.3231
    },
    geoRadius: '50000'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${caveat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeRegistry>
          <LegalDisclaimerModal />
          <Header />
          <main>{children}</main>
          {/* <PromotionalBanner /> */}
          <Footer />
          <Analytics />
        </ThemeRegistry>
      </body>
    </html>
  )
} 