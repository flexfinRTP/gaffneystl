import { Container, Typography, Box } from '@mui/material'

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect information that you provide directly to us, including:
        </Typography>
        <ul>
          <li>Contact information (name, email, phone number)</li>
          <li>Financial information necessary for providing advisory services</li>
          <li>Investment objectives and risk tolerance</li>
          <li>Other information you choose to provide</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the information we collect to:
        </Typography>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Communicate with you about our services</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative messages and updates</li>
          <li>Comply with legal obligations</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Information Sharing
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell or rent your personal information to third parties. We may
          share your information with:
        </Typography>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Financial institutions as necessary for transactions</li>
          <li>Regulatory authorities as required by law</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the Internet is
          100% secure.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to:
        </Typography>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us at:
        </Typography>
        <Typography variant="body1">
          Email: justin@gaffneystl.com
        </Typography>
      </Box>

      <Box sx={{ mt: 8, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="body2" color="text.secondary">
          This privacy policy is subject to change. Please check back periodically
          for updates.
        </Typography>
      </Box>
    </Container>
  )
} 