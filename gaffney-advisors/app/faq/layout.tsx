import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Gaffney Wealth Management',
  description: 'Find answers to common questions about our wealth management services, investment philosophy, and financial planning approach.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 