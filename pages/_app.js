// pages/_app.js
import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../utils/createEmotionCache';
import theme from '../styles/theme';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

function MyApp({ 
  Component, 
  pageProps, 
  emotionCache = clientSideEmotionCache 
}) {
  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <title>Justin Gaffney - Web3 & Blockchain Consulting</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-wrapper">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;