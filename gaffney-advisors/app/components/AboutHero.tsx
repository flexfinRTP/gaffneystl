'use client'

import { useEffect, useState } from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionTypography = motion(Typography)
const MotionBox = motion(Box)

export default function AboutHero() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '50%'])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  }

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '80vh',
        minHeight: '600px',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <MotionBox
        style={{ y: mounted ? backgroundY : 0 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/stlouis-skyline.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.primary.dark}EB, ${theme.palette.primary.dark}F7)`,
          },
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          pt: { xs: 8, md: 0 },
        }}
      >
        <MotionBox
          style={{ opacity }}
          initial="hidden"
          animate="visible"
          variants={overlayVariants}
          sx={{ 
            maxWidth: '900px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: '-2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '4px',
              height: '40%',
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: '2px',
            }
          }}
        >
          <MotionTypography
            variant="h1"
            variants={titleVariants}
            sx={{
              color: theme.palette.common.white,
              fontFamily: 'Playfair Display',
              fontSize: { xs: '2.75rem', sm: '3.75rem', md: '4.75rem' },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              position: 'relative',
              pl: 4,
            }}
          >
            Gaffney Wealth
          </MotionTypography>
          <MotionTypography
            variant="h4"
            variants={subtitleVariants}
            sx={{
              color: theme.palette.grey[100],
              fontStyle: 'italic',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
              fontWeight: 400,
              maxWidth: '700px',
              pl: 4,
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              '& span': {
                color: theme.palette.secondary.light,
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: `linear-gradient(to right, ${theme.palette.secondary.main}, transparent)`,
                },
              },
            }}
          >
            Your trusted partner in building and <span>preserving wealth</span>. Opening 2026
          </MotionTypography>
        </MotionBox>
      </Container>
    </Box>
  )
} 