// pages/services/web3-integration-for-web2-apps.js
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

export default function Web3IntegrationForWeb2Apps() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const service = {
    title: "Web3 Integration for Web2 Apps",
    description: "Transform your existing web applications with cutting-edge blockchain technology. Our Web3 integration services help you bridge the gap between traditional web services and the decentralized web, unlocking new possibilities for your business.",
    benefits: [
      { 
        title: "Enhanced User Experience", 
        description: "Implement seamless wallet connections and blockchain interactions in your existing apps." 
      },
      { 
        title: "New Revenue Streams", 
        description: "Explore tokenization and NFT integration to create innovative business models." 
      },
      { 
        title: "Improved Security", 
        description: "Leverage blockchain-based authentication for enhanced data protection and user privacy." 
      },
      { 
        title: "Decentralized Storage", 
        description: "Integrate decentralized storage solutions for improved data resilience and reduced costs." 
      },
      { 
        title: "Future-Proof Your App", 
        description: "Stay ahead of the curve by adopting Web3 technologies and preparing for the decentralized future." 
      }
    ],
    price: "15,000",
    imageSrc: "/integrate.jpg"
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
        <title>{`${service.title} - Modernize Your Web Apps with Blockchain`}</title>
        <meta name="description" content={`${service.description} Seamlessly integrate Web3 features into your existing web applications and unlock the power of blockchain.`} />
        <meta name="keywords" content="Web3 integration, blockchain for web apps, decentralized applications, DApp development, Web2 to Web3 migration, blockchain authentication, decentralized storage, NFT integration, tokenization" />
        <meta property="og:title" content={`${service.title} - Modernize Your Web Apps with Blockchain`} />
        <meta property="og:description" content={`${service.description} Seamlessly integrate Web3 features into your existing web applications and unlock the power of blockchain.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourcompany.com/services/web3-integration-for-web2-apps" />
        <meta property="og:image" content="https://www.yourcompany.com/images/web3-integration.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} - Modernize Your Web Apps with Blockchain`} />
        <meta name="twitter:description" content={`${service.description} Seamlessly integrate Web3 features into your existing web applications and unlock the power of blockchain.`} />
        <meta name="twitter:image" content="https://www.yourcompany.com/images/web3-integration.jpg" />
        <link rel="canonical" href="https://www.yourcompany.com/services/web3-integration-for-web2-apps" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <Container maxWidth="lg">
        <Box my={8}>
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
                      aria-label="Get started with Web3 Integration for Web2 Apps"
                      size={isMobile ? "medium" : "large"}
                    >
                      Get Started
                    </CTAButton>
                  </Link>
                </StyledPaper>
              </motion.div>
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