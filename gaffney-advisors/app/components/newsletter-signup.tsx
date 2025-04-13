'use client'

import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import AnimatedWrapper from './AnimatedWrapper'

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type FormData = z.infer<typeof schema>

export default function NewsletterSignup() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to subscribe. Please try again later.')
    }
  }

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        backgroundColor: 'background.paper',
      }}
    >
      <AnimatedWrapper delay={0.2}>
        <Box
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ mb: 2 }}
          >
            Stay Informed
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Subscribe to our newsletter for market insights, investment strategies,
            and company updates.
          </Typography>

          {status === 'success' ? (
            <Alert severity="success" sx={{ mb: 3 }}>
              Thank you for subscribing! You'll receive our next newsletter soon.
            </Alert>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
              }}
            >
              <TextField
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                placeholder="Enter your email"
                sx={{ flex: 1 }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={status === 'loading'}
                sx={{
                  minWidth: { xs: '100%', sm: 'auto' },
                  px: 4,
                }}
              >
                {status === 'loading' ? (
                  <CircularProgress size={24} />
                ) : (
                  'Subscribe'
                )}
              </Button>
            </Box>
          )}
          {status === 'error' && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}
        </Box>
      </AnimatedWrapper>
    </Box>
  )
} 