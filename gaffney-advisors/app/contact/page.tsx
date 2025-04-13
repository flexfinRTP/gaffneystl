'use client'

import { Container, Typography, Box, Grid, TextField, Button, useTheme, Alert, CircularProgress } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactHero from '../components/ContactHero'
import ContactDetails from '../components/ContactDetails'
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material'

const MotionBox = motion.create(Box)

export default function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again later.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <ContactHero />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h2" 
                component="h2"
                sx={{
                  fontFamily: 'Playfair Display',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 3,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-12px',
                    left: 0,
                    width: '60px',
                    height: '4px',
                    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
                    borderRadius: '2px',
                  }
                }}
              >
                Send Us a Message
              </Typography>
              <Typography 
                variant="body1" 
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                  mb: 6,
                  maxWidth: '600px',
                }}
              >
                We'd love to hear from you. Please fill out the form below and we'll
                get back to you as soon as possible.
              </Typography>

              {status === 'success' && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}

              {status === 'error' && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {errorMessage}
                </Alert>
              )}

              <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{
                  '& .MuiTextField-root': {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(74, 85, 104, 0.2)',
                        transition: 'all 0.2s',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.text.secondary,
                      '&.Mui-focused': {
                        color: theme.palette.primary.main,
                      },
                    },
                  },
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      sx={{ bgcolor: theme.palette.common.white }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      sx={{ bgcolor: theme.palette.common.white }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      sx={{ bgcolor: theme.palette.common.white }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      sx={{ bgcolor: theme.palette.common.white }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={status === 'loading'}
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        fontSize: '1.125rem',
                        py: 1.5,
                        textTransform: 'none',
                        borderRadius: '8px',
                        boxShadow: `0 4px 14px ${theme.palette.primary.main}66`,
                        '&:hover': {
                          bgcolor: theme.palette.primary.dark,
                          boxShadow: `0 6px 20px ${theme.palette.primary.main}99`,
                        },
                        '&.Mui-disabled': {
                          bgcolor: theme.palette.grey[300],
                          color: theme.palette.grey[500],
                        },
                      }}
                    >
                      {status === 'loading' ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CircularProgress size={24} sx={{ color: 'inherit' }} />
                          Sending...
                        </Box>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{ 
                bgcolor: theme.palette.background.paper,
                p: 6,
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.background.default})`,
                boxShadow: (theme) => theme.shadows[2],
              }}
            >
              <Typography 
                variant="h3"
                sx={{
                  fontFamily: 'Playfair Display',
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 4,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
                    borderRadius: '2px',
                  }
                }}
              >
                Office Information
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {/* <Box sx={{ display: 'flex', gap: 2 }}>
                  <LocationOn sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 1, fontWeight: 600 }}>
                      Address
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontSize: '1.125rem', lineHeight: 1.6 }}>
                      TBA
                    </Typography>
                  </Box>
                </Box> */}

                {/* <Box sx={{ display: 'flex', gap: 2 }}>
                  <Phone sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 1, fontWeight: 600 }}>
                      Phone
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontSize: '1.125rem' }}>
                      TBA
                    </Typography>
                  </Box>
                </Box> */}

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Email sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 1, fontWeight: 600 }}>
                      Email
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontSize: '1.125rem' }}>
                      justin@gaffneystl.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <AccessTime sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 1, fontWeight: 600 }}>
                      Hours
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontSize: '1.125rem' }}>
                      Monday - Friday: 9:00 AM - 5:00 PM CST
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{ 
                mt: 4,
                p: 6,
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
                color: theme.palette.common.white,
              }}
            >
              <Typography 
                variant="h3"
                sx={{
                  fontFamily: 'Playfair Display',
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Compliance
              </Typography>
              <Typography 
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.9)',
                  mb: 2,
                }}
              >
                For compliance-related inquiries, please contact:
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: theme.palette.secondary.light,
                  fontWeight: 600,
                }}
              >
                justin@gaffneystl.com
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
      {/* <ContactDetails /> */}
    </>
  )
} 