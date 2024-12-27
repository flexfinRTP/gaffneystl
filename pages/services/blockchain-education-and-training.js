// pages/services/blockchain-education-and-training.js
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

export default function BlockchainEducationAndTraining() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const service = {
    title: "Blockchain Education and Training",
    description: "Empower your team with comprehensive blockchain knowledge and skills. Our tailored education and training programs ensure your organization is well-equipped to leverage blockchain technology effectively and stay ahead in the rapidly evolving digital landscape.",
    benefits: [
      { 
        title: "Customized Curriculum", 
        description: "Training programs tailored to your team's specific needs, roles, and skill levels." 
      },
      { 
        title: "Hands-on Experience", 
        description: "Practical workshops and projects to apply blockchain concepts in real-world scenarios." 
      },
      { 
        title: "Expert Instructors", 
        description: "Learn from seasoned blockchain professionals with extensive industry experience." 
      },
      { 
        title: "Ongoing Support", 
        description: "Access to resources and support even after the training program concludes." 
      },
      { 
        title: "Team Alignment", 
        description: "Ensure your entire team shares a common understanding of blockchain technology and its potential." 
      }
    ],
    price: "8,000",
    videoSrc: "/videos/blockchain-education.mp4"
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
        <title>{`${service.title} - Comprehensive Blockchain Learning Solutions`}</title>
        <meta name="description" content={`${service.description} Equip your team with the knowledge and skills needed to excel in the blockchain era.`} />
        <meta name="keywords" content="blockchain education, blockchain training, cryptocurrency courses, Web3 learning, blockchain workshops, blockchain certification, DLT training, smart contract education, blockchain for business" />
        <meta property="og:title" content={`${service.title} - Comprehensive Blockchain Learning Solutions`} />
        <meta property="og:description" content={`${service.description} Equip your team with the knowledge and skills needed to excel in the blockchain era.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourcompany.com/services/blockchain-education-and-training" />
        <meta property="og:image" content="https://www.yourcompany.com/images/blockchain-education.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} - Comprehensive Blockchain Learning Solutions`} />
        <meta name="twitter:description" content={`${service.description} Equip your team with the knowledge and skills needed to excel in the blockchain era.`} />
        <meta name="twitter:image" content="https://www.yourcompany.com/images/blockchain-education.jpg" />
        <link rel="canonical" href="https://www.yourcompany.com/services/blockchain-education-and-training" />
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
                      aria-label="Get started with Blockchain Education and Training"
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