'use client'

import { Box, Container, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { Info as InfoIcon } from '@mui/icons-material'

export default function DisclosureBanner() {
  return (
    <Box
      sx={{
        bgcolor: '#4E5D94',
        color: 'white',
        py: 1,
        position: 'relative',
        zIndex: 1200,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <InfoIcon sx={{ fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.875rem',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Important disclosures about our services and regulatory information
          </Typography>
          <Link href="/disclosures" passHref>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
                textTransform: 'none',
                minWidth: 100,
              }}
            >
              View Disclosures
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  )
} 