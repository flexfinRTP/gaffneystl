import React, { useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { 
  Typography, 
  Box, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FreeDAppOfferSection from '../components/FreeDAppOfferSection';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 20px',
  fontWeight: 'bold',
}));

const services = [
  {
    title: "Blockchain Strategy Consulting",
    description: "Develop a tailored blockchain roadmap for your business, identifying key opportunities and potential ROI.",
    features: [
      "Blockchain benefit analysis",
      "Integration roadmap development",
      "Use case identification",
      "ROI projection"
    ],
    slug: "blockchain-strategy-consulting"
  },
  {
    title: "Smart Contract Development and Auditing",
    description: "Create and audit secure, efficient smart contracts customized for your specific business needs.",
    features: [
      "Custom smart contract creation",
      "Security audits",
      "Gas optimization",
      "Integration support"
    ],
    slug: "smart-contract-development-and-auditing"
  },
  {
    title: "Web3 Integration for Web2 Apps",
    description: "Modernize your existing web applications with cutting-edge blockchain features.",
    features: [
      "Wallet connection implementation",
      "Token gating setup",
      "Blockchain-based authentication",
      "Decentralized storage integration"
    ],
    slug: "web3-integration-for-web2-apps"
  },
  {
    title: "Blockchain Education and Training",
    description: "Empower your team with comprehensive blockchain knowledge through custom training programs.",
    features: [
      "Tailored curriculum development",
      "Interactive workshops",
      "Hands-on project guidance",
      "Ongoing support and resources"
    ],
    slug: "blockchain-education-and-training"
  },
  {
    title: "Tokenomics Design and Consultation",
    description: "Design robust token economies and governance models for your blockchain projects.",
    features: [
      "Token utility definition",
      "Distribution strategy planning",
      "Governance model design",
      "Economic simulations"
    ],
    slug: "tokenomics-design-and-consultation"
  },
  {
    title: "Advanced Blockchain Solutions",
    description: "Comprehensive development and integration of advanced blockchain technologies.",
    features: [
      "DeFi protocol implementation",
      "NFT platform development",
      "DAO setup and governance",
      "Cross-chain interoperability solutions"
    ],
    slug: "advanced-blockchain-solutions"
  }
];

const tiers = [
  {
    title: 'Basic',
    price: '$3,000',
    description: 'For small businesses starting their blockchain journey',
    features: [
      'Initial blockchain strategy consultation',
      'Free basic dApp prototype or website',
      'Basic smart contract development',
      'Web3 integration assessment',
      '2 hours of blockchain education',
      'Monthly maintenance and support'
    ],
    maintenance: '$250/month'
  },
  {
    title: 'Professional',
    price: '$7,500',
    description: 'For growing companies ready to fully embrace blockchain',
    features: [
      'Comprehensive blockchain strategy',
      'Advanced smart contract development and audit',
      'Custom dApp or website development',
      'Full Web3 integration for one application',
      '8 hours of tailored blockchain education',
      'Basic tokenomics consultation',
      'Priority maintenance and support'
    ],
    maintenance: '$2,500/month'
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations requiring extensive blockchain solutions',
    features: [
      'End-to-end blockchain strategy and implementation',
      'Multiple smart contract development and audits',
      'Enterprise-grade dApp or website development',
      'Complete Web3 ecosystem integration',
      'Ongoing blockchain education and support',
      'Comprehensive tokenomics design',
      'Advanced blockchain solutions (DeFi, NFT, DAO)',
      '24/7 dedicated support and maintenance'
    ],
    maintenance: 'Custom'
  },
];

export default function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Blockchain Consulting Services - Justin Gaffney</title>
        <meta
          name="description"
          content="Expert blockchain consulting services including strategy, development, integration, and education. Transform your business with Web3 solutions."
        />
      </Head>

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ my: 4 }}>
            <Typography variant="h1" component="h1" align="center" gutterBottom>
              Consulting Services
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Web3 Education, Integrated blockchain solutions, and custom Smart
              Contract development
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {services.map((service, index) => (
              <Grid item key={service.title} xs={12} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard sx={{ height: '100%' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" paragraph>
                        {service.description}
                      </Typography>
                      <List>
                        {service.features.map((feature, idx) => (
                          <ListItem key={idx} disablePadding>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                    <CardActions>
                      <Link href={`/services/${service.slug}`} passHref>
                        <CTAButton 
                          variant="outlined" 
                          color="primary" 
                          endIcon={<ArrowForwardIcon />}
                          fullWidth
                        >
                          Learn More
                        </CTAButton>
                      </Link>
                    </CardActions>
                  </ServiceCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <FreeDAppOfferSection />

          <Box sx={{ my: 8 }}>
            <Typography variant="h2" align="center" gutterBottom>
              Web3 Integration Service Packages
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Choose the perfect plan for your business needs
            </Typography>
            <Grid container spacing={4} alignItems="flex-end">
              {tiers.map((tier) => (
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === 'Enterprise' ? 12 : 6}
                  md={4}
                >
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h2" align="center" gutterBottom>
                        {tier.title}
                      </Typography>
                      <Typography variant="h3" align="center" color="primary">
                        {tier.price}
                      </Typography>
                      {tier.maintenance && (
                        <Typography variant="subtitle1" align="center" color="textSecondary">
                          Maintenance: {tier.maintenance}
                        </Typography>
                      )}
                      <Typography variant="subtitle1" align="center" paragraph>
                        {tier.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <List>
                        {tier.features.map((feature) => (
                          <ListItem key={feature} disablePadding>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                    <CardActions>
                      <Link href="/how-it-works" passHref>
                        <CTAButton 
                          variant="contained" 
                          color="primary" 
                          fullWidth
                          endIcon={<ArrowForwardIcon />}
                        >
                          Get Started
                        </CTAButton>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8, textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Book your free 30-minute consultation today and discover how blockchain can revolutionize your operations.
            </Typography>
            <Link href="/contact" passHref>
              <CTAButton 
                variant="contained" 
                color="secondary" 
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Schedule Free Consultation
              </CTAButton>
            </Link>
          </Box>
        </motion.div>
      </Container>
    </Layout>
  );
}