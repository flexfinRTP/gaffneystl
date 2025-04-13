import { Container, Typography, Box } from '@mui/material'

export default function TermsOfService() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="body1" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Agreement to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing or using our website and services, you agree to be bound by
          these Terms of Service. If you disagree with any part of the terms, you
          may not access the service.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Investment Advisory Services
        </Typography>
        <Typography variant="body1" paragraph>
          Gaffney Wealth Management is a registered investment advisor. Our services include:
        </Typography>
        <ul>
          <li>Financial planning and investment management</li>
          <li>Retirement planning</li>
          <li>Digital asset advisory services</li>
          <li>Portfolio analysis and recommendations</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Client Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          As a client, you agree to:
        </Typography>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Review and understand investment recommendations</li>
          <li>Make informed decisions about your investments</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Fees and Compensation
        </Typography>
        <Typography variant="body1" paragraph>
          Our fees are disclosed in our Form ADV Part 2A. We are compensated:
        </Typography>
        <ul>
          <li>Through advisory fees based on assets under management</li>
          <li>Through fixed fees for specific services</li>
          <li>Through hourly rates for consultation services</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Risk Disclosure
        </Typography>
        <Typography variant="body1" paragraph>
          Investing involves risks, including:
        </Typography>
        <ul>
          <li>Potential loss of principal</li>
          <li>Market volatility</li>
          <li>Economic conditions</li>
          <li>Regulatory changes</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content on this website is the property of Gaffney Wealth Management and is
          protected by intellectual property laws. You may not use our content
          without express written permission.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          Gaffney Wealth Management shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages resulting from your use of
          our services.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify these terms at any time. We will notify
          you of any changes by posting the new terms on this page.
        </Typography>
      </Box>

      <Box sx={{ mt: 8, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="body2" color="text.secondary">
          For questions about these Terms of Service, please contact us at
          justin@gaffneystl.com
        </Typography>
      </Box>
    </Container>
  )
} 