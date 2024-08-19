import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../styles/theme'

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>John Doe - Web3 Product Engineer & Thought Leader</title>
        <meta name="description" content="Portfolio of John Doe, showcasing expertise in blockchain, product management, and cutting-edge web3 solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}