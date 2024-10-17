// components/Layout.js
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../styles/theme'
import { Container, Box } from '@mui/material'
import ErrorBoundary from './ErrorBoundary'
import Breadcrumbs from './Breadcrumbs'

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ErrorBoundary>
        <Box className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-blue-900">
          <Header />
          <Breadcrumbs />
          <main className="flex-grow">
            <Container maxWidth="lg" className="py-8">
              {children}
            </Container>
          </main>
          <Footer />
        </Box>
      </ErrorBoundary>
    </ThemeProvider>
  )
}