import { Container, Typography, Box } from '@mui/material'

export default function Disclosures() {
  return (
    <Container maxWidth="lg" sx={{ py: 10, pt: 32 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Important Disclosures
      </Typography>
      <Typography variant="body1" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Investment Advisory Services
        </Typography>
        <Typography variant="body1" paragraph>
          Gaffney Wealth Management ("we" or "our") is a registered investment advisor with
          the Securities and Exchange Commission (SEC). Registration as an
          investment advisor does not imply any level of skill or training.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Form ADV
        </Typography>
        <Typography variant="body1" paragraph>
          Our Form ADV Part 2A and 2B, which provide detailed information about
          our advisory services, fees, and conflicts of interest, are available
          upon request. You may obtain a copy by contacting us at
          justin@gaffneystl.com.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Risk Disclosure
        </Typography>
        <Typography variant="body1" paragraph>
          All investments involve risk, including the possible loss of principal.
          Past performance is not indicative of future results. The value of
          investments may fluctuate, and investors may not get back the amount
          invested.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Digital Assets
        </Typography>
        <Typography variant="body1" paragraph>
          Digital assets, including cryptocurrencies, are highly speculative and
          involve significant risks. These risks include, but are not limited to:
        </Typography>
        <ul>
          <li>Extreme price volatility</li>
          <li>Regulatory uncertainty</li>
          <li>Technological risks</li>
          <li>Limited liquidity</li>
          <li>Potential for total loss</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Conflicts of Interest
        </Typography>
        <Typography variant="body1" paragraph>
          We have policies and procedures in place to identify and address
          potential conflicts of interest. These include:
        </Typography>
        <ul>
          <li>Fee-based compensation structure</li>
          <li>Proprietary investment products</li>
          <li>Affiliated service providers</li>
          <li>Personal trading policies</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph>
          Our website may contain links to third-party websites. We are not
          responsible for the content or accuracy of these external sites.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          No Guarantees
        </Typography>
        <Typography variant="body1" paragraph>
          Nothing on this website should be construed as a guarantee or assurance
          of future performance. Investment decisions should be based on an
          individual's specific financial situation and objectives.
        </Typography>
      </Box>

      <Box sx={{ mt: 8, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="body2" color="text.secondary">
          For additional information about our services and disclosures, please
          contact us at justin@gaffneystl.com.
        </Typography>
      </Box>
    </Container>
  )
} 