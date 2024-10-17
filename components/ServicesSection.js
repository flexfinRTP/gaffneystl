// components/ServicesSection.js
import { Typography, Grid, Card, CardContent, CardMedia, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import Image from 'next/image';

const services = [
  {
    title: 'Web3 Strategy Consulting',
    description: 'Develop a comprehensive Web3 strategy tailored to your business needs. Stay ahead of the curve in the decentralized economy.',
    image: '/images/web3-strategy.svg',
    benefits: ['Future-proof business model', 'Competitive advantage', 'New revenue streams'],
  },
  {
    title: 'Blockchain Integration',
    description: 'Seamlessly integrate blockchain technology into your existing systems. Enhance security, transparency, and efficiency across your operations.',
    image: '/images/blockchain-integration.svg',
    benefits: ['Improved security', 'Enhanced transparency', 'Streamlined operations'],
  },
  {
    title: 'Smart Contract Development',
    description: 'Create secure and efficient smart contracts to automate and enforce your business agreements. Reduce costs and increase trust in transactions.',
    image: '/images/smart-contract.svg',
    benefits: ['Automated enforcement', 'Reduced intermediaries', 'Lower operational costs'],
  },
];

export default function ServiceSection() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom className="text-3xl md:text-4xl font-bold">
        Our Services
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Comprehensive solutions to drive your business into the Web3 era
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {services.map((service, index) => (
          <Grid item key={service.title} xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: '100%' }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} className="card-hover">
                <CardMedia sx={{ height: 200, position: 'relative' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography gutterBottom variant="h5" component="h3" className="font-bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    {service.benefits.map((benefit) => (
                      <Chip key={benefit} label={benefit} sx={{ mr: 1, mb: 1 }} />
                    ))}
                  </Box>
                  <CTAButton href="/contact" fullWidth>Book a Consultation</CTAButton>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}