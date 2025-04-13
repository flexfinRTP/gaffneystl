'use client'

import { Container, Typography, Box, Grid, Card, CardContent, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import ServicesHero from '@/app/components/ServicesHero'
import { AccountBalance, TrendingUp, CurrencyBitcoin, BusinessCenter } from '@mui/icons-material'
import Link from 'next/link'
const MotionGrid = motion.create(Grid)
const MotionCard = motion.create(Card)
const MotionBox = motion.create(Box)

export default function Services() {
  const theme = useTheme();

  const services = [
    {
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services tailored to your unique goals and circumstances.',
      features: [
        'Retirement planning',
        'Tax optimization',
        'Estate planning',
        'Risk management',
        'Education funding'
      ],
      icon: AccountBalance,
      color: '#4E5D94'
    },
    {
      title: 'Investment Management',
      description: 'Professional portfolio management with a focus on long-term growth and risk management.',
      features: [
        'Asset allocation',
        'Portfolio rebalancing',
        'Performance monitoring',
        'Tax-efficient investing',
        'Risk assessment'
      ],
      icon: TrendingUp,
      color: '#2D3748'
    },
    {
      title: 'Digital Asset Advisory',
      description: 'Expert guidance on cryptocurrency and digital asset investments.',
      features: [
        'Portfolio allocation',
        'Risk assessment',
        'Security best practices',
        'Tax implications',
        'Market analysis'
      ],
      icon: CurrencyBitcoin,
      color: '#4E5D94'
    },
    {
      title: 'Wealth Management',
      description: 'Comprehensive wealth management services for high-net-worth individuals.',
      features: [
        'Estate planning',
        'Trust services',
        'Philanthropic planning',
        'Business succession',
        'Family office services'
      ],
      icon: BusinessCenter,
      color: '#2D3748'
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  }

  return (
    <>
      <ServicesHero />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }} id="services-overview">
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
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 3,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-12px',
                left: 0,
                width: '80px',
                height: '4px',
                background: 'linear-gradient(to right, #4E5D94, #2D3748)',
                borderRadius: '2px',
              }
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="body1" 
            sx={{
              fontSize: '1.25rem',
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
              mb: 8,
              maxWidth: '800px',
            }}
          >
            At Gaffney Wealth Management, we offer a comprehensive suite of financial services
            designed to help you achieve your financial goals. Our team of experienced
            professionals provides personalized solutions tailored to your unique needs.
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Grid item xs={12} md={6} key={index}>
                <MotionCard
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease-in-out',
                    background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => theme.shadows[8],
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                          mr: 2,
                        }}
                      >
                        <Icon sx={{ fontSize: 32, color: theme.palette.common.white }} />
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: 'Playfair Display',
                          fontSize: '1.75rem',
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1.125rem',
                        lineHeight: 1.8,
                        color: theme.palette.text.secondary,
                        mb: 3,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 2,
                      }}
                    >
                      Key Features:
                    </Typography>
                    <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Box
                          component="li"
                          key={featureIndex}
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '1.125rem',
                            lineHeight: 2,
                            position: 'relative',
                            '&::marker': {
                              color: service.color,
                            },
                          }}
                        >
                          {feature}
                        </Box>
                      ))}
                    </Box>
                    <Button
                      variant="outlined"
                      disabled
                      sx={{
                        mt: 2,
                        borderColor: service.color,
                        color: service.color,
                        borderWidth: '2px',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        padding: '8px 24px',
                        '&:hover': {
                          borderWidth: '2px',
                          borderColor: service.color,
                          backgroundColor: `${service.color}11`,
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </MotionCard>
              </Grid>
            )
          })}
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{ 
            mt: 12,
            p: 6,
            bgcolor: 'background.paper',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #f8fafc, #ffffff)',
            boxShadow: (theme) => theme.shadows[2],
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Playfair Display',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 4,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-12px',
                left: 0,
                width: '60px',
                height: '4px',
                background: 'linear-gradient(to right, #4E5D94, #2D3748)',
                borderRadius: '2px',
              }
            }}
          >
            Our Approach
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.25rem',
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
              mb: 4,
            }}
          >
            We believe in a comprehensive, client-centered approach to financial
            planning. Our process includes:
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            {[
              { title: 'Initial Consultation', desc: 'Understanding your financial goals and current situation' },
              { title: 'Analysis', desc: 'Evaluating your current financial position and identifying opportunities' },
              { title: 'Strategy Development', desc: 'Creating a customized plan to achieve your objectives' },
              { title: 'Implementation', desc: 'Putting the plan into action with ongoing support' },
              { title: 'Monitoring', desc: 'Regular reviews and adjustments to ensure you stay on track' }
            ].map((step, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '1.125rem',
                  lineHeight: 2,
                  mb: 2,
                  '&::marker': {
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                  },
                }}
              >
                <Box component="strong" sx={{ color: theme.palette.text.primary, display: 'block' }}>
                  {step.title}
                </Box>
                {step.desc}
              </Box>
            ))}
          </Box>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          sx={{ 
            mt: 8,
            p: 6,
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #4E5D94, #2D3748)',
            color: theme.palette.common.white,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Playfair Display',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Get Started
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.25rem',
              lineHeight: 1.8,
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Take control of your financial future. Contact us today to
            schedule a consultation and learn how we can help you achieve your
            financial goals.
          </Typography>
          <Link href="/contact" passHref>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: theme.palette.common.white,
              color: theme.palette.primary.main,
              fontSize: '1.125rem',
              py: 1.5,
              px: 4,
              borderRadius: '8px',
              textTransform: 'none',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            Schedule a Consultation
          </Button>
          </Link>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              mt: 4,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Email me at justin@gaffneystl.com
          </Typography>
        </MotionBox>
      </Container>
    </>
  )
} 