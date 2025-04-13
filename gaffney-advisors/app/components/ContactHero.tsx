'use client'

import { useEffect, useState } from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionTypography = motion(Typography)
const MotionBox = motion(Box)

export default function ContactHero() {
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

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '50vh',
        minHeight: '400px',
        width: '100%',
        overflow: 'hidden',
        bgcolor: theme.palette.primary.dark,
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
          backgroundImage: 'url("/contact-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.primary.dark}F2, ${theme.palette.primary.dark}D9)`,
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
          sx={{ 
            maxWidth: '800px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: '-2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '4px',
              height: '70%',
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
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              pl: 4,
            }}
          >
            Get in Touch
          </MotionTypography>
          <MotionTypography
            variant="h4"
            variants={subtitleVariants}
            sx={{
              color: theme.palette.grey[100],
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              fontWeight: 400,
              maxWidth: '600px',
              pl: 4,
              lineHeight: 1.6,
              '& span': {
                color: theme.palette.secondary.light,
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: `linear-gradient(to right, ${theme.palette.secondary.main}, transparent)`,
                },
              },
            }}
          >
            Let's discuss how we can help you achieve your <span>financial goals</span>
          </MotionTypography>
        </MotionBox>
      </Container>
    </Box>
  )
} 