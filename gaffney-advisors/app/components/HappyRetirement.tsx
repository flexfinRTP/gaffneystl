'use client'

import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)

export default function HappyRetirement() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Section */}
      {/* <Box
        sx={{
          flex: 1,
          position: 'relative',
          backgroundColor: '#1A202C',
          backgroundImage: 'url("/retirement-lifestyle.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          py: { xs: 12, md: 0 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(26, 32, 44, 0.95), rgba(26, 32, 44, 0.85))',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{ 
              maxWidth: '1000px',
              position: 'relative',
              mx: 'auto',
              textAlign: { xs: 'center', md: 'center' },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: { xs: '50%', md: '50%' },
                top: { xs: '-2rem', md: '-3rem' },
                transform: { 
                  xs: 'translateX(-50%)',
                  md: 'translateX(-50%)'
                },
                width: { xs: '40%', md: '60%' },
                height: '4px',
                background: 'linear-gradient(to right, transparent, #4E5D94, transparent)',
                borderRadius: '2px',
              }
            }}
          >
            <MotionTypography
              variant="h1"
              variants={textVariants}
              sx={{
                color: '#6B7DB3',
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem' },
                lineHeight: 1.1,
                mb: { xs: 4, md: 6 },
                letterSpacing: '-0.02em',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                '& .highlight': {
                  color: '#E2E8F0',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(to right, #4E5D94, transparent)',
                  },
                },
              }}
            >
              SECURE YOUR<br />
              <span className="highlight">LEGACY</span>
            </MotionTypography>
            <MotionTypography
              variant="h4"
              variants={textVariants}
              sx={{
                color: '#E2E8F0',
                fontFamily: 'Playfair Display',
                fontWeight: 500,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.4,
                letterSpacing: '0.02em',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: { xs: '-2rem', md: '-3rem' },
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: '40%', md: '60%' },
                  height: '4px',
                  background: 'linear-gradient(to right, transparent, #4E5D94, transparent)',
                  borderRadius: '2px',
                },
              }}
            >
              GAFFNEY WEALTH MANAGEMENT
            </MotionTypography>
          </MotionBox>
        </Container>
      </Box> */}

      {/* Bottom Section */}
      <Box
        sx={{
          minHeight: { xs: '50vh', md: '60vh' },
          background: 'linear-gradient(135deg, #1A202C, #2D3748)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 12, md: 16 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/wealth-pattern.png")',
            backgroundSize: 'cover',
            opacity: 0.05,
          },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <MotionTypography
              variant="h1"
              sx={{
                fontFamily: 'Playfair Display',
                color: '#E2E8F0',
                fontWeight: 700,
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                textAlign: 'center',
                lineHeight: 1.2,
                position: 'relative',
                mb: { xs: 3, md: 4 },
                '& .highlight': {
                  color: '#6B7DB3',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(to right, #6B7DB3, transparent)',
                  },
                },
              }}
            >
              BUILDING<br />
              <span className="highlight">GENERATIONAL</span><br />
              WEALTH
            </MotionTypography>
            <MotionTypography
              variant="h4"
              sx={{
                color: 'rgba(226, 232, 240, 0.9)',
                fontFamily: 'Playfair Display',
                fontWeight: 400,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                letterSpacing: '0.02em',
              }}
            >
              Crafting Sophisticated Financial Strategies<br />
              for Tomorrow's Success
            </MotionTypography>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
} 