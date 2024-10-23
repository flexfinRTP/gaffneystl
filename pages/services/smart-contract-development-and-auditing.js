// pages/services/smart-contract-development-and-auditing.js
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
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const VideoWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: "56.25%", // 16:9 Aspect Ratio
  height: 0,
  overflow: "hidden",
  "& iframe, & video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

const BenefitList = styled(List)(({ theme }) => ({
  "& .MuiListItem-root": {
    alignItems: "flex-start",
    padding: theme.spacing(1, 0),
  },
  "& .MuiListItemIcon-root": {
    minWidth: "40px",
    color: theme.palette.primary.main,
  },
  "& .MuiListItemText-primary": {
    fontWeight: "bold",
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  padding: "10px 20px",
  fontWeight: "bold",
  marginTop: theme.spacing(4),
}));

export default function SmartContractDevelopmentAuditing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const service = {
    title: "Smart Contract Development and Auditing",
    description:
      "Leverage the power of blockchain with secure, efficient smart contracts. Our expert team develops and audits smart contracts to ensure they're robust, gas-efficient, and aligned with your business logic.",
    benefits: [
      {
        title: "Custom Solutions",
        description:
          "Tailor-made smart contracts that perfectly fit your business needs and use cases.",
      },
      {
        title: "Enhanced Security",
        description:
          "Rigorous auditing process to identify and eliminate vulnerabilities in your smart contracts.",
      },
      {
        title: "Gas Optimization",
        description:
          "Efficient contract design to minimize transaction costs on the blockchain.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ensure your smart contracts adhere to relevant regulations and best practices.",
      },
      {
        title: "Seamless Integration",
        description:
          "Expert support in integrating smart contracts with your existing systems and workflows.",
      },
    ],
    price: "10,000",
    videoSrc: "/videos/smart-contract-dev.mp4",
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
        <title>{`${service.title} - Expert Blockchain Development Services`}</title>
        <meta
          name="description"
          content={`${service.description} Secure, efficient, and customized smart contracts for your blockchain projects.`}
        />
        <meta
          name="keywords"
          content="smart contract development, smart contract auditing, blockchain security, gas optimization, Solidity development, Ethereum smart contracts, Web3 development, DApp smart contracts, blockchain compliance"
        />
        <meta
          property="og:title"
          content={`${service.title} - Expert Blockchain Development Services`}
        />
        <meta
          property="og:description"
          content={`${service.description} Secure, efficient, and customized smart contracts for your blockchain projects.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourcompany.com/services/smart-contract-development-and-auditing"
        />
        <meta
          property="og:image"
          content="https://www.yourcompany.com/images/smart-contract-development.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${service.title} - Expert Blockchain Development Services`}
        />
        <meta
          name="twitter:description"
          content={`${service.description} Secure, efficient, and customized smart contracts for your blockchain projects.`}
        />
        <meta
          name="twitter:image"
          content="https://www.yourcompany.com/images/smart-contract-development.jpg"
        />
        <link
          rel="canonical"
          href="https://www.yourcompany.com/services/smart-contract-development-and-auditing"
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
                      aria-label="Get started with Smart Contract Development and Auditing"
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
                    src="/smart-contracts.png"
                    alt="Illustration of smart contract development process showing code blocks and blockchain integration"
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
                    aria-label="Video showcasing our smart contract development and auditing process"
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
