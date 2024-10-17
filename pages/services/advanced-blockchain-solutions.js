// pages/services/advanced-blockchain-solutions.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
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
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

export default function AdvancedBlockchainSolutions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const service = {
    title: "Advanced Blockchain Solutions",
    description:
      "Take your blockchain implementation to the next level with our cutting-edge solutions. We specialize in developing advanced blockchain applications tailored to your specific industry needs, leveraging the latest innovations in distributed ledger technology.",
    benefits: [
      {
        title: "DeFi Protocol Implementation",
        description:
          "Create decentralized finance protocols that revolutionize traditional financial services.",
      },
      {
        title: "NFT Platform Development",
        description:
          "Build robust platforms for creating, trading, and managing non-fungible tokens.",
      },
      {
        title: "DAO Setup and Governance",
        description:
          "Implement decentralized autonomous organizations with custom governance models.",
      },
      {
        title: "Cross-chain Interoperability",
        description:
          "Develop solutions that enable seamless communication between different blockchain networks.",
      },
      {
        title: "Scalability Solutions",
        description:
          "Implement Layer 2 solutions and other scaling technologies to enhance blockchain performance.",
      },
    ],
    price: "50,000",
    videoSrc: "/videos/advanced-blockchain-solutions.mp4",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Your Company Name",
      url: "https://www.yourcompany.com",
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "USD",
    },
  };

  return (
    <Layout>
      <Head>
        <title>{`${service.title} - Cutting-edge Blockchain Development Services`}</title>
        <meta
          name="description"
          content={`${service.description} Harness the full potential of blockchain with our advanced solutions in DeFi, NFTs, DAOs, and more.`}
        />
        <meta
          name="keywords"
          content="advanced blockchain solutions, DeFi development, NFT platform, DAO implementation, cross-chain interoperability, blockchain scalability, Layer 2 solutions, enterprise blockchain, custom blockchain development"
        />
        <meta
          property="og:title"
          content={`${service.title} - Cutting-edge Blockchain Development Services`}
        />
        <meta
          property="og:description"
          content={`${service.description} Harness the full potential of blockchain with our advanced solutions in DeFi, NFTs, DAOs, and more.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourcompany.com/services/advanced-blockchain-solutions"
        />
        <meta
          property="og:image"
          content="https://www.yourcompany.com/images/advanced-blockchain-solutions.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${service.title} - Cutting-edge Blockchain Development Services`}
        />
        <meta
          name="twitter:description"
          content={`${service.description} Harness the full potential of blockchain with our advanced solutions in DeFi, NFTs, DAOs, and more.`}
        />
        <meta
          name="twitter:image"
          content="https://www.yourcompany.com/images/advanced-blockchain-solutions.jpg"
        />
        <link
          rel="canonical"
          href="https://www.yourcompany.com/services/advanced-blockchain-solutions"
        />
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
                  <Typography
                    variant="h1"
                    gutterBottom
                    sx={{ fontSize: isMobile ? "2.5rem" : "3.5rem" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph component="div">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: service.description.replace(/\. /g, ".</p><p>"),
                      }}
                    />
                  </Typography>
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ fontSize: isMobile ? "2rem" : "2.5rem" }}
                  >
                    Key Benefits
                  </Typography>
                  <BenefitList>
                    {service.benefits.map((benefit, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h3"
                              sx={{ fontSize: isMobile ? "1.5rem" : "1.75rem" }}
                            >
                              {benefit.title}
                            </Typography>
                          }
                          secondary={benefit.description}
                        />
                      </ListItem>
                    ))}
                  </BenefitList>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ mt: 4, fontSize: isMobile ? "1.75rem" : "2rem" }}
                  >
                    Starting from ${service.price}
                  </Typography>
                  <Link href="/how-it-works" passHref>
                    <CTAButton
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      aria-label="Get started with Advanced Blockchain Solutions"
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
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: isMobile ? "300px" : "400px",
                  }}
                >
                  <Image
                    src="/images/advanced-blockchain-solutions.jpg"
                    alt="Illustration of advanced blockchain solutions, showing interconnected networks, smart contracts, and decentralized applications"
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
                    aria-label="Video showcasing our advanced blockchain solutions and their applications in various industries"
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
