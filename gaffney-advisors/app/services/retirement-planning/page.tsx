'use client'

import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import AnimatedWrapper from '../../components/AnimatedWrapper'

export default function RetirementPlanning() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <AnimatedWrapper>
        <Typography variant="h2" component="h1" gutterBottom>
          Retirement Planning
        </Typography>
        <Typography variant="body1" paragraph>
          Our comprehensive retirement planning services help you prepare for a secure and comfortable retirement.
        </Typography>
      </AnimatedWrapper>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <AnimatedWrapper delay={0.2}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Personalized Planning
              </Typography>
              <Typography variant="body1">
                We create customized retirement plans based on your unique goals, risk tolerance, and financial situation.
              </Typography>
            </Paper>
          </AnimatedWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <AnimatedWrapper delay={0.3}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Investment Strategy
              </Typography>
              <Typography variant="body1">
                Our team develops investment strategies designed to help you achieve your retirement objectives.
              </Typography>
            </Paper>
          </AnimatedWrapper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Retirement planning involves various risks, including the risk of loss of principal. Past performance is not indicative of future results. Please consult with your financial advisor before making any investment decisions.
        </Typography>
      </Box>
    </Container>
  )
} 