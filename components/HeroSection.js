// components/HeroSection.js
import { Typography, Button, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" className="bg-gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4" gutterBottom>
              Unlock the Power of Web3
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Transform your business with expert blockchain consulting. Harness the potential of decentralized technologies to stay ahead in the digital age.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <CTAButton href="/contact">Start Your Web3 Journey</CTAButton>
              <Button variant="outlined" color="primary" size="large" sx={{ ml: 2 }}>
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/hero-illustration.svg"
              alt="Web3 Illustration"
              width={600}
              height={400}
              layout="responsive"
              priority
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}