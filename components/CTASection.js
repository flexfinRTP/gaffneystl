// components/CTASection.js
import { Typography, Box, Button } from '@mui/material';
import CTAButton from './CTAButton';

export default function CTASection() {
  return (
    <Box component="section" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
        Ready to try Web3?
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Take the first step towards a decentralized future. Schedule a consultation today.
      </Typography>
      <CTAButton href="/contact" size="large">
        Book Your Free Consultation
      </CTAButton>
    </Box>
  );
}