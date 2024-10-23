// pages/services/blockchain-strategy-consulting.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { 
  Typography, 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const VideoWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 Aspect Ratio
  height: 0,
  overflow: 'hidden',
  '& iframe, & video': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

const BenefitList = styled(List)(({ theme }) => ({
  '& .MuiListItem-root': {
    alignItems: 'flex-start',
    padding: theme.spacing(1, 0),
  },
  '& .MuiListItemIcon-root': {
    minWidth: '40px',
    color: theme.palette.primary.main,
  },
  '& .MuiListItemText-primary': {
    fontWeight: 'bold',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 20px',
  fontWeight: 'bold',
  marginTop: theme.spacing(4),
}));

export default function BlockchainStrategyConsulting() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const service = {
    title: "Blockchain Strategy Consulting",
    description: "Navigate the complex world of blockchain with our expert strategy consulting. We help you identify opportunities, mitigate risks, and create a roadmap for successful blockchain integration that aligns with your business goals.",
    benefits: [
      { 
        title: "Increased Efficiency", 
        description: "Streamline operations and reduce costs through blockchain-enabled process improvements." 
      },
      { 
        title: "Enhanced Security", 
        description: "Leverage blockchain's inherent security features to protect your data and transactions." 
      },
      { 
        title: "New Revenue Streams", 
        description: "Identify and capitalize on new business models made possible by blockchain technology." 
      },
      { 
        title: "Competitive Advantage", 
        description: "Stay ahead of the curve by adopting blockchain solutions before your competitors." 
      },
      { 
        title: "Risk Mitigation", 
        description: "Navigate regulatory challenges and technical complexities with our expert guidance." 
      }
    ],
    price: "5,000",
    videoSrc: "/blockchain.png"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://www.yourcompany.com"
    },
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "USD"
    }
  };

  return (
    <Layout>
      <Head>
        <title>{`${service.title} - Expert Blockchain & Web3 Consulting Services`}</title>
        <meta name="description" content={`${service.description} Boost efficiency, security, and innovation with our blockchain strategy consulting services. Expert guidance in Web3, DeFi, and cryptocurrency integration.`} />
        <meta name="keywords" content="blockchain consulting, blockchain strategy, web3 integration, cryptocurrency consulting, DeFi strategy, blockchain efficiency, blockchain security, crypto adoption, web3 transformation, blockchain ROI, distributed ledger technology, smart contract strategy" />
        <meta property="og:title" content={`${service.title} - Expert Blockchain & Web3 Consulting Services`} />
        <meta property="og:description" content={`${service.description} Boost efficiency, security, and innovation with our blockchain strategy consulting services. Expert guidance in Web3, DeFi, and cryptocurrency integration.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourcompany.com/services/blockchain-strategy-consulting" />
        <meta property="og:image" content="https://www.yourcompany.com/images/blockchain-strategy-consulting.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} - Expert Blockchain & Web3 Consulting Services`} />
        <meta name="twitter:description" content={`${service.description} Boost efficiency, security, and innovation with our blockchain strategy consulting services.`} />
        <meta name="twitter:image" content="https://www.yourcompany.com/images/blockchain-strategy-consulting.jpg" />
        <link rel="canonical" href="https://www.yourcompany.com/services/blockchain-strategy-consulting" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <Container maxWidth="lg">
        <Box my={8}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <StyledPaper elevation={3}>
                  <Typography variant="h1" gutterBottom sx={{ fontSize: isMobile ? '2.5rem' : '3.5rem' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph component="div">
                    <div dangerouslySetInnerHTML={{ __html: service.description.replace(/\. /g, '.</p><p>') }} />
                  </Typography>
                  <Typography variant="h2" gutterBottom sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }}>Key Benefits</Typography>
                  <BenefitList>
                    {service.benefits.map((benefit, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText 
                          primary={<Typography variant="h3" sx={{ fontSize: isMobile ? '1.5rem' : '1.75rem' }}>{benefit.title}</Typography>}
                          secondary={benefit.description}
                        />
                      </ListItem>
                    ))}
                  </BenefitList>
                  <Typography variant="h3" gutterBottom sx={{ mt: 4, fontSize: isMobile ? '1.75rem' : '2rem' }}>
                    Starting from ${service.price}
                  </Typography>
                  <Link href="/how-it-works" passHref>
                    <CTAButton
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      aria-label="Get started with Blockchain Strategy Consulting"
                      size={isMobile ? "medium" : "large"}
                    >
                      Get Started
                    </CTAButton>
                  </Link>
                </StyledPaper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: isMobile ? '300px' : '400px' }}>
                  <Image
                    src="/blockchain.png"
                    alt="Blockchain Strategy Consulting illustration showing interconnected nodes representing a blockchain network"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </Box>
                <VideoWrapper>
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    aria-label="Blockchain Strategy Consulting video showcasing our services and benefits"
                  >
                    <source src={service.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </VideoWrapper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  // You can fetch data here if needed
  return {
    props: {},
  };
}