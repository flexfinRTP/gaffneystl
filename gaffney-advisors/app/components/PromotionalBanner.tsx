'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Typography, Button, IconButton, TextField, Snackbar, Alert } from '@mui/material'
import { Close as CloseIcon, Mail as MailIcon } from '@mui/icons-material'

export default function PromotionalBanner() {
  const [isOpen, setIsOpen] = useState(true)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Check localStorage on component mount
    const bannerClosed = localStorage.getItem('bannerClosed')
    if (bannerClosed === 'true') {
      setIsOpen(false)
      document.body.classList.add('banner-closed')
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    document.body.classList.add('banner-closed')
    localStorage.setItem('bannerClosed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      setShowSuccess(true)
      setIsOpen(false)
      document.body.classList.add('banner-closed')
      localStorage.setItem('bannerClosed', 'true')
    } catch (err) {
      setError('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: '#4E5D94',
          color: 'white',
          py: { xs: 1.5, md: 2 },
          position: 'fixed',
          top: { xs: 64, md: 80 }, // Match header height
          left: 0,
          right: 0,
          zIndex: 1200,
          width: '100%',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1.5, md: 3 },
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              position: 'relative',
              pr: { xs: 3, sm: 0 },
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                color: 'white',
                position: 'absolute',
                right: { xs: -8, sm: 0 },
                top: '50%',
                transform: 'translateY(-50%)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <MailIcon sx={{ fontSize: 20 }} />
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.875rem', sm: '0.875rem' },
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                Opening in 2026! Be the first to know about our launch and get exclusive updates
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                width: { xs: '100%', md: 'auto' },
                justifyContent: { xs: 'space-between', md: 'flex-start' },
              }}
            >
              <TextField
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                error={!!error}
                helperText={error}
                sx={{
                  minWidth: { xs: '60%', sm: 250 },
                  '& .MuiOutlinedInput-root': {
                    height: 36,
                    bgcolor: 'white',
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    py: 0.75,
                    px: 1.5,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="small"
                disabled={isSubmitting}
                sx={{
                  bgcolor: 'white',
                  color: '#4E5D94',
                  height: 36,
                  px: 2,
                  minWidth: 100,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Thank you for subscribing! You'll receive our next newsletter soon.
        </Alert>
      </Snackbar>
    </>
  )
} 