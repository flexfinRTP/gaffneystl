'use client'

import { Container, Grid, Typography, Card, CardContent } from '@mui/material'
import { AccountBalance, TrendingUp, Security } from '@mui/icons-material'

export default function ServicesSection() {
  const services = [
    {
      title: 'Wealth Management',
      description: 'Comprehensive wealth management strategies tailored to your unique financial goals and risk tolerance.',
      icon: TrendingUp,
    },
    {
      title: 'Retirement Planning',
      description: 'Expert retirement planning to help you secure your financial future and maintain your lifestyle.',
      icon: AccountBalance,
    },
    {
      title: 'Digital Assets',
      description: 'Strategic guidance on incorporating digital assets into your investment portfolio.',
      icon: Security,
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Grid item xs={12} md={4} key={service.title}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                  cursor: 'pointer',
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
} 