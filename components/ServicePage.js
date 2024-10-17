import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { 
  Typography, 
  Box, 
  Container, 
  Grid, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
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

export default function ServicePage({ service }) {
  return (
    <Layout>
      <Head>
        <title>{service.title} - Blockchain Consulting Services</title>
        <meta name="description" content={service.description} />
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
                  <Typography variant="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <BenefitList>
                    {service.benefits.map((benefit, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText 
                          primary={benefit.title}
                          secondary={benefit.description}
                        />
                      </ListItem>
                    ))}
                  </BenefitList>
                  <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                    Starting from ${service.price}
                  </Typography>
                  <Link href="/how-it-works" passHref>
                    <CTAButton
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
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
                <VideoWrapper>
                  <video autoPlay loop muted playsInline>
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

export async function getStaticProps({ params }) {
  // In a real application, you would fetch this data from an API or database
  const service = {
    title: "Service Title",
    description: "Service description goes here...",
    benefits: [
      { title: "Benefit 1", description: "Description of benefit 1" },
      { title: "Benefit 2", description: "Description of benefit 2" },
      { title: "Benefit 3", description: "Description of benefit 3" },
    ],
    price: "1,000",
    videoSrc: "/videos/service-demo.mp4"
  };

  return {
    props: {
      service
    },
  };
}

export async function getStaticPaths() {
  // This would be dynamically generated in a real application
  const paths = [
    { params: { slug: 'blockchain-strategy-consulting' } },
    { params: { slug: 'smart-contract-development-and-auditing' } },
    { params: { slug: 'web3-integration-for-web2-apps' } },
    { params: { slug: 'blockchain-education-and-training' } },
    { params: { slug: 'tokenomics-design-and-consultation' } },
    { params: { slug: 'advanced-blockchain-solutions' } },
  ];

  return { paths, fallback: false };
}