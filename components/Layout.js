// components/Layout.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Container,
  useScrollTrigger,
  Fab,
  Zoom,
  useMediaQuery,
  LinearProgress,
} from '@mui/material';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 70%)',
    pointerEvents: 'none',
    zIndex: -1,
  },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  background: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.primary.dark,
  },
  [theme.breakpoints.down('sm')]: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ zIndex: 2 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function Layout({ children, title, description }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const pageTitle = `${title ? `${title} | ` : ''}Gaffney Consulting - Web3 & Blockchain Solutions`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "Expert Web3 and blockchain consulting services for modern businesses"} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content={theme.palette.background.default} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description || "Expert Web3 and blockchain consulting services for modern businesses"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description || "Expert Web3 and blockchain consulting services for modern businesses"} />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <ErrorBoundary>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.background.default,
          }}
        >
          {isLoading && (
            <LinearProgress
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
              }}
            />
          )}

          <Header />

          <MainContent>
            <Box
              component="div"
              sx={{
                pt: { xs: 8, sm: 9 }, // Adjust based on header height
                pb: { xs: 4, sm: 6 },
                flex: 1,
              }}
            >
              <AnimatePresence mode="wait">
                {mounted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Container
                      maxWidth="lg"
                      sx={{
                        px: { xs: 2, sm: 3, md: 4 },
                      }}
                    >
                      {children}
                    </Container>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </MainContent>

          <Footer />

          <ScrollTop>
            <StyledFab
              size={isMobile ? "small" : "medium"}
              aria-label="scroll back to top"
            >
              <KeyboardArrowUpIcon />
            </StyledFab>
          </ScrollTop>
        </Box>
      </ErrorBoundary>
    </>
  );
}

// PropTypes for better development experience
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};