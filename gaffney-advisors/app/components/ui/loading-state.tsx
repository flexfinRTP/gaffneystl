'use client'

import { Box, Skeleton, useTheme } from '@mui/material'

interface LoadingStateProps {
  variant?: 'card' | 'text' | 'image'
  count?: number
  sx?: any
}

export function LoadingState({ variant = 'card', count = 1, sx = {} }: LoadingStateProps) {
  const theme = useTheme()

  const renderSkeleton = () => {
    switch (variant) {
      case 'card':
        return (
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: theme.shadows[1],
              ...sx,
            }}
          >
            <Skeleton variant="rectangular" height={200} sx={{ mb: 2 }} />
            <Skeleton variant="text" width="80%" height={40} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="60%" height={30} />
          </Box>
        )
      case 'text':
        return (
          <Box sx={{ ...sx }}>
            <Skeleton variant="text" width="100%" height={40} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="90%" height={30} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="80%" height={30} />
          </Box>
        )
      case 'image':
        return (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              ...sx,
            }}
          >
            <Skeleton variant="rectangular" height="100%" />
          </Box>
        )
      default:
        return null
    }
  }

  return (
    <Box>
      {Array.from({ length: count }).map((_, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          {renderSkeleton()}
        </Box>
      ))}
    </Box>
  )
} 