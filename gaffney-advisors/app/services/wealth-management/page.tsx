'use client'

import { Container, Typography, Box, Grid, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { AccountBalance, TrendingUp, Security, Assessment } from '@mui/icons-material'

const MotionBox = motion(Box)

export default function WealthManagementPage() {
  const theme = useTheme()

  return (
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
            Wealth Management
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
            Comprehensive wealth management services tailored to your unique financial goals and needs.
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  )
} 