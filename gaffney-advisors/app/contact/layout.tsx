import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Gaffney Wealth Management',
  description: 'Get in touch with Gaffney Wealth Management. Visit our office in Clayton, MO, or reach out through phone, email, or our contact form.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 