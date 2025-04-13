'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Box } from '@mui/material'

interface AnimatedWrapperProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export default function AnimatedWrapper({
  children,
  delay = 0,
  duration = 0.8,
}: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Box
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
      }}
    >
      {children}
    </Box>
  )
} 