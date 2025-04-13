'use client'

import { ReactNode } from 'react'
import { Box } from '@mui/material'
import AnimatedWrapper from './AnimatedWrapper'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
}

export default function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  return (
    <AnimatedWrapper delay={delay}>
      <Box sx={{ py: 4 }}>
        {children}
      </Box>
    </AnimatedWrapper>
  )
} 