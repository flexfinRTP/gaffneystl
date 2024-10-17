// pages/free-dapp-offer.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
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

export default function FreeDAppOffer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const offerDetails = {
    title: "Free dApp Prototype or Website",
    description: "Jump-start your blockchain journey with a free dApp prototype or website. This offer is designed to help you visualize the potential of blockchain technology for your business without any upfront development costs.",
    benefits: [
      { 
        title: "Custom Prototype", 
        description: "A basic dApp or website tailored to your specific business needs." 
      },
      { 
        title: "No Upfront Costs", 
        description: "Get started with blockchain technology without initial development expenses." 
      },
      { 
        title: "Expert Development", 
        description: "Benefit from our team's expertise in blockchain and web development." 
      },
      { 
        title: "Visualization Tool", 
        description: "Use the prototype to better understand and demonstrate blockchain's potential for your business." 
      },
      { 
        title: "Foundation for Growth", 
        description: "A starting point that can be expanded into a full-fledged blockchain solution." 
      }
    ],
    maintenance: "200",
    videoSrc: "/videos/free-dapp-offer.mp4"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": offerDetails.title,
    "description": offerDetails.description,
    "price": "0",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://www.yourcompany.com"
    }
  };

  return (
    <Layout>
      <Head>
        <title>{`${offerDetails.title} - Start Your Web3 Journey for Free`}</title>
        <meta name="description" content={`${offerDetails.description} No upfront costs, just pure blockchain innovation for your business.`} />
        <meta name="keywords" content="free dApp, blockchain prototype, Web3 website, no-cost blockchain development, dApp consulting, Web3 integration, blockchain visualization, custom blockchain solution" />
        <meta property="og:title" content={`${offerDetails.title} - Start Your Web3 Journey for Free`} />
        <meta property="og:description" content={`${offerDetails.description} No upfront costs, just pure blockchain innovation for your business.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourcompany.com/free-dapp-offer" />
        <meta property="og:image" content="https://www.yourcompany.com/images/free-dapp-offer.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${offerDetails.title} - Start Your Web3 Journey for Free`} />
        <meta name="twitter:description" content={`${offerDetails.description} No upfront costs, just pure blockchain innovation for your business.`} />
        <meta name="twitter:image" content="https://www.yourcompany.com/images/free-dapp-offer.jpg" />
        <link rel="canonical" href="https://www.yourcompany.com/free-dapp-offer" />
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
                    {offerDetails.title}
                  </Typography>
                  <Typography variant="body1" paragraph component="div">
                    <div dangerouslySetInnerHTML={{ __html: offerDetails.description.replace(/\. /g, '.</p><p>') }} />
                  </Typography>
                  <Typography variant="h2" gutterBottom sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }}>Key Benefits</Typography>
                  <BenefitList>
                    {offerDetails.benefits.map((benefit, index) => (
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
                    Maintenance fee: ${offerDetails.maintenance}/month
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    The maintenance fee covers ongoing support, updates, and ensures your dApp or website remains secure and up-to-date.
                  </Typography>
                  <Link href="/how-it-works" passHref>
                    <CTAButton
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      aria-label="Get started with our free dApp or website offer"
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
                    src="/images/free-dapp-offer.jpg"
                    alt="Illustration of a free dApp prototype showing blockchain nodes and a user interface"
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
                    aria-label="Video showcasing the process and benefits of our free dApp prototype offer"
                  >
                    <source src={offerDetails.videoSrc} type="video/mp4" />
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