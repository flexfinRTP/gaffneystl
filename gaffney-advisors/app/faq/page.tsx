'use client'

import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)

const faqs = [
  {
    question: "What is wealth management and how can it benefit me?",
    answer: "Wealth management is a comprehensive approach to managing your financial life. It combines investment management, financial planning, tax strategies, estate planning, and other financial services. Our wealth management services can help you grow and preserve your wealth, plan for retirement, minimize taxes, protect your assets, and create a lasting legacy for future generations."
  },
  {
    question: "What is your investment philosophy?",
    answer: "Our investment philosophy is based on long-term, diversified investing tailored to your specific goals and risk tolerance. We focus on creating well-balanced portfolios using a mix of asset classes, regular rebalancing, and tax-efficient strategies. We believe in evidence-based investing rather than trying to time the market or chase short-term gains."
  },
  {
    question: "How do you charge for your services?",
    answer: "We operate on a fee-only basis, typically charging a percentage of assets under management. This aligns our interests with yours and ensures we're working solely for your benefit. We don't receive commissions or kickbacks from product sales. Our fee structure is transparent and includes all our wealth management services, including financial planning and investment management."
  },
  {
    question: "What is your approach to retirement planning?",
    answer: "Our retirement planning approach is comprehensive and personalized. We analyze your current financial situation, future goals, and potential risks. We then create a detailed plan that includes investment strategies, Social Security optimization, healthcare planning, and tax-efficient withdrawal strategies. We regularly review and adjust this plan as your circumstances change."
  },
  {
    question: "How do you help with estate planning and wealth transfer?",
    answer: "We work closely with you and your legal advisors to create an estate plan that efficiently transfers wealth to your heirs while minimizing taxes. This includes strategies for gift and estate tax planning, trust creation and management, charitable giving, and business succession planning. We help ensure your wealth serves your family's long-term interests and charitable goals."
  },
  {
    question: "How can digital assets benefit my investment portfolio?",
    answer: "Digital assets, including cryptocurrencies and blockchain-based investments, can provide portfolio diversification and potential growth opportunities. We help clients understand and strategically incorporate digital assets into their investment strategy, focusing on risk management and long-term value. Our approach includes thorough research, proper allocation, and regular monitoring to ensure these assets align with your overall financial goals and risk tolerance."
  },
  {
    question: "When will your services be available?",
    answer: "We are excited to announce that Gaffney Wealth Management will officially open its doors in Summer 2026. During this time, we will be fully operational to provide comprehensive wealth management services to our clients. We are currently in the process of building our infrastructure and assembling our expert team to ensure we deliver the highest quality service from day one. Please stay tuned for updates as we approach our launch date."
  }
]

export default function FAQPage() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.common.white,
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}CC, ${theme.palette.primary.dark}FF)`,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Playfair Display',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-12px',
                  left: 0,
                  width: '60px',
                  height: '4px',
                  background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                  borderRadius: '2px',
                },
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.grey[100],
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                maxWidth: '800px',
                mt: 4,
              }}
            >
              Find answers to common questions about our wealth management services and approach.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: '8px !important',
                overflow: 'hidden',
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 2,
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: '0 0 16px 0',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  '&.Mui-expanded': {
                    minHeight: 56,
                  },
             
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: '1.125rem',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '1rem',
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </>
  )
} 