'use client'

import { Box, Typography, Button, Container, useTheme } from '@mui/material'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

export default function Hero() {
  const theme = useTheme()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
      }}
    >
      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          pt: { xs: 8, md: 0 },
        }}
      >
        <MotionBox
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ maxWidth: '800px' }}
        >
          <MotionTypography
            variant="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: { xs: 3, md: 4 },
              fontFamily: 'var(--font-playfair)',
            }}
          >
            Futureproof
            <br />
            Your Wealth
            <br />
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.light,
                fontFamily: 'var(--font-caveat)',
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem' },
                display: 'inline-block',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: theme.palette.primary.light,
                  transform: 'scaleX(0)',
                  transformOrigin: 'right',
                  transition: 'transform 0.6s ease-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'left',
                },
              }}
            >
            Strategies{' '}
            </Box>
          </MotionTypography>

          <MotionTypography
            variant="h4"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              fontWeight: 400,
              mb: { xs: 4, md: 6 },
              maxWidth: '600px',
              fontStyle: 'italic',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Invest in what matters to you
          </MotionTypography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
             <Link href="/contact" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Schedule a Call
            </Button>
            </Link>
          </motion.div>
        </MotionBox>

        {/* Scroll Indicator */}
        {/* <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          sx={{
            position: 'absolute',
            bottom: { xs: 32, md: 48 },
            left: '70%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            opacity: 0.7,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Find Out More
          </Typography>
          <Box
            sx={{
              width: 1,
              height: 40,
              backgroundColor: 'white',
              animation: 'scrollDown 4s infinite',
              '@keyframes scrollDown': {
                '0%': {
                  transform: 'scaleY(0)',
                  transformOrigin: 'top',
                },
                '50%': {
                  transform: 'scaleY(1)',
                  transformOrigin: 'top',
                },
                '50.1%': {
                  transform: 'scaleY(1)',
                  transformOrigin: 'bottom',
                },
                '100%': {
                  transform: 'scaleY(0)',
                  transformOrigin: 'bottom',
                },
              },
            }}
          />
        </MotionBox> */}
      </Container>
    </Box>
  )
} 