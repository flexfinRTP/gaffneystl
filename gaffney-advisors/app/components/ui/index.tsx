'use client'

import React, { ReactNode } from 'react'
import { Box, Button, Card, Typography, useTheme, SxProps, Theme, TextField, Grid, Container } from '@mui/material'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { useForm, SubmitHandler, FieldValues, Control, UseFormReturn, DefaultValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ErrorBoundary } from './error-boundary'

const MotionBox = motion(Box)

interface StandardCardProps {
  children: ReactNode
  sx?: SxProps<Theme>
}

interface StandardButtonProps {
  children: ReactNode
  variant?: 'text' | 'contained' | 'outlined'
  sx?: SxProps<Theme>
  [key: string]: any
}

interface StandardSectionProps {
  children: ReactNode
  sx?: SxProps<Theme>
}

interface StandardHeadingProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  sx?: SxProps<Theme>
}

interface StandardSubheadingProps {
  children: ReactNode
  sx?: SxProps<Theme>
}

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  sx?: SxProps<Theme>
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  sx?: SxProps<Theme>
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  sx?: SxProps<Theme>
}

interface ContactFieldProps {
  label: string
  type?: string
  sx?: SxProps<Theme>
}

interface StandardGridProps {
  children: ReactNode
  container?: boolean
  item?: boolean
  spacing?: number
  sx?: SxProps<Theme>
}

interface StandardImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  sx?: SxProps<Theme>
  priority?: boolean
}

interface StandardFormProps<T extends FieldValues> {
  children: ReactNode
  onSubmit: SubmitHandler<T>
  schema: z.ZodType<T>
  defaultValues?: DefaultValues<T>
  sx?: SxProps<Theme>
}

interface FormChildProps {
  control?: Control<any>
  errors?: any
  isSubmitting?: boolean
}

// Standardized Card Component
export function StandardCard({ children, sx = {} }: StandardCardProps) {
  const theme = useTheme()
  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 2,
        boxShadow: theme.shadows[2],
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: theme.shadows[4],
          transform: 'translateY(-4px)',
        },
        ...sx,
      }}
    >
      {children}
    </Card>
  )
}

// Standardized Button Component
export function StandardButton({ children, variant = 'contained', sx = {}, ...props }: StandardButtonProps) {
  const theme = useTheme()
  return (
    <Button
      variant={variant}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 600,
        px: 4,
        py: 1.5,
        fontSize: '1rem',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

// Standardized Section Component
export function StandardSection({ children, sx = {} }: StandardSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

// Standardized Heading Component
export function StandardHeading({ children, variant = 'h2', sx = {} }: StandardHeadingProps) {
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: 'var(--font-playfair)',
        fontWeight: 700,
        mb: 4,
        textAlign: 'center',
        ...sx,
      }}
    >
      {children}
    </Typography>
  )
}

// Standardized Subheading Component
export function StandardSubheading({ children, sx = {} }: StandardSubheadingProps) {
  return (
    <Typography
      variant="h5"
      sx={{
        color: 'text.secondary',
        mb: 6,
        textAlign: 'center',
        maxWidth: '800px',
        mx: 'auto',
        ...sx,
      }}
    >
      {children}
    </Typography>
  )
}

// Standardized Animated Section
export function AnimatedSection({ children, delay = 0, sx = {} }: AnimatedSectionProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      sx={sx}
    >
      {children}
    </MotionBox>
  )
}

// Standardized Feature Card
export function FeatureCard({ icon, title, description, sx = {} }: FeatureCardProps) {
  const theme = useTheme()
  return (
    <StandardCard
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.light,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        {icon}
      </Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </StandardCard>
  )
}

// Standardized Testimonial Card
export function TestimonialCard({ quote, author, role, sx = {} }: TestimonialCardProps) {
  return (
    <StandardCard
      sx={{
        position: 'relative',
        '&::before': {
          content: '"\\201C"',
          position: 'absolute',
          top: -20,
          left: 20,
          fontSize: '4rem',
          color: 'primary.main',
          opacity: 0.2,
        },
        ...sx,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontStyle: 'italic',
          mb: 3,
          position: 'relative',
        }}
      >
        {quote}
      </Typography>
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </Box>
    </StandardCard>
  )
}

// Standardized Contact Form Field
export function ContactField({ label, type = 'text', sx = {} }: ContactFieldProps) {
  return (
    <Box sx={{ mb: 3, ...sx }}>
      <TextField
        label={label}
        type={type}
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
        }}
      />
    </Box>
  )
}

// Standardized Grid Component
export function StandardGrid({ children, container = false, item = false, spacing = 2, sx = {} }: StandardGridProps) {
  return (
    <Grid
      container={container}
      item={item}
      spacing={spacing}
      sx={{
        ...sx,
      }}
    >
      {children}
    </Grid>
  )
}

// Standardized Image Component
export function StandardImage({ src, alt, width, height, sx = {}, priority = false }: StandardImageProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: width || '100%',
        height: height || '100%',
        ...sx,
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        style={{
          objectFit: 'cover',
          borderRadius: 'inherit',
        }}
      />
    </Box>
  )
}

// Standardized Form Component
export function StandardForm<T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
  sx = {},
}: StandardFormProps<T>) {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: '100%',
        maxWidth: '600px',
        mx: 'auto',
        ...sx,
      }}
    >
      <ErrorBoundary>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<FormChildProps>(child)) {
            return React.cloneElement(child, {
              control,
              errors,
              isSubmitting,
            })
          }
          return child
        })}
      </ErrorBoundary>
    </Box>
  )
} 