'use client'

import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material'
import { AccountBalance, TrendingUp, Security, Psychology } from '@mui/icons-material'
import AnimatedWrapper from './AnimatedWrapper'
import Link from 'next/link'

const services = [
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth management strategies tailored to your unique financial goals and risk tolerance.',
    icon: AccountBalance,
    link: '/services/wealth-management',
  },
  {
    title: 'Retirement Planning',
    description: 'Strategic planning for a secure retirement, including investment strategies and distribution planning.',
    icon: TrendingUp,
    link: '/services/retirement-planning',
  },
  {
    title: 'Digital Assets',
    description: 'Expert guidance in cryptocurrency and blockchain investments, integrated with traditional portfolios.',
    icon: Security,
    link: '/services/digital-assets',
  },
  {
    title: 'Financial Planning',
    description: 'Holistic financial planning that considers all aspects of your financial life and future goals.',
    icon: Psychology,
    link: '/services/financial-planning',
  },
]

export default function ServicesSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <AnimatedWrapper>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontFamily: 'var(--font-playfair)',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Comprehensive financial solutions designed to help you achieve your goals
          </Typography>
        </AnimatedWrapper>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={service.title}>
              <AnimatedWrapper delay={index * 0.1}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, flex: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: 'primary.main',
                          borderRadius: '12px',
                          p: 1,
                          mr: 2,
                        }}
                      >
                        <service.icon
                          sx={{
                            fontSize: 32,
                            color: 'secondary.main',
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {service.description}
                    </Typography>
                    <Link href={service.link} passHref style={{ textDecoration: 'none' }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                          mt: 'auto',
                          alignSelf: 'flex-start',
                        }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 