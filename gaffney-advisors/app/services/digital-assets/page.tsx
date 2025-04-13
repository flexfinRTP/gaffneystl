'use client'

import { Container, Typography, Box, Grid, useTheme } from '@mui/material'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { CurrencyBitcoin, Security, TrendingUp, AccountBalance } from '@mui/icons-material'
import Image from 'next/image'

const MotionBox = motion(Box)

export default function DigitalAssetsPage() {
  const theme = useTheme()

  return (
    <LazyMotion features={domAnimation}>
      <Box
        sx={{
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.common.white,
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}CC, ${theme.palette.primary.dark}FF)`,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Playfair Display',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-12px',
                  left: 0,
                  width: '60px',
                  height: '4px',
                  background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                  borderRadius: '2px',
                },
              }}
            >
              Digital Assets Advisory
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.grey[100],
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                maxWidth: '800px',
                mt: 4,
              }}
            >
              Expert guidance for Bitcoin, stablecoin yield strategies, and cryptocurrency investments in St. Louis, MO.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Playfair Display',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 4,
                }}
              >
                Comprehensive Digital Asset Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                  mb: 4,
                }}
              >
                As a leading digital assets advisor in St. Louis, we provide specialized services for both individual and institutional investors. Our expertise covers Bitcoin, stablecoin yield strategies, and comprehensive cryptocurrency portfolio management.
              </Typography>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    p: 4,
                    borderRadius: 2,
                    height: '100%',
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <CurrencyBitcoin sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Bitcoin Investment Strategy
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    Strategic guidance for Bitcoin investments, including portfolio allocation, risk management, and long-term holding strategies.
                  </Typography>
                </MotionBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    p: 4,
                    borderRadius: 2,
                    height: '100%',
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <AccountBalance sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Stablecoin Yield Strategies
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    Expert guidance on stablecoin yield farming, DeFi protocols, and risk-adjusted return strategies.
                  </Typography>
                </MotionBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    p: 4,
                    borderRadius: 2,
                    height: '100%',
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <TrendingUp sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Portfolio Management
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    Comprehensive digital asset portfolio management, including diversification strategies and performance monitoring.
                  </Typography>
                </MotionBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    p: 4,
                    borderRadius: 2,
                    height: '100%',
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <Security sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Security & Compliance
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    Guidance on secure storage solutions, regulatory compliance, and best practices for digital asset security.
                  </Typography>
                </MotionBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </LazyMotion>
  )
} 