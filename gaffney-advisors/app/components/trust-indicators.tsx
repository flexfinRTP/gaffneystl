'use client'

import { Box, Typography, Grid } from '@mui/material'
import AnimatedWrapper from './AnimatedWrapper'

export default function TrustIndicators() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={3}>
          <AnimatedWrapper delay={0.2}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="primary" gutterBottom>
                20+
              </Typography>
              <Typography variant="body1">
                Years of Experience
              </Typography>
            </Box>
          </AnimatedWrapper>
        </Grid>
        <Grid item xs={12} md={3}>
          <AnimatedWrapper delay={0.3}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="primary" gutterBottom>
                1000+
              </Typography>
              <Typography variant="body1">
                Satisfied Clients
              </Typography>
            </Box>
          </AnimatedWrapper>
        </Grid>
        <Grid item xs={12} md={3}>
          <AnimatedWrapper delay={0.4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="primary" gutterBottom>
                $500M+
              </Typography>
              <Typography variant="body1">
                Assets Under Management
              </Typography>
            </Box>
          </AnimatedWrapper>
        </Grid>
      </Grid>
    </Box>
  )
} 