import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Typography, Box, Container, Grid, Paper, Chip, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  background: theme.palette.background.paper,
}));

const ProfileImage = styled(Image)({
  borderRadius: "50%",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
});

const SocialButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: "50%",
  minWidth: "auto",
  padding: theme.spacing(1.5),
}));

const skills = [
  "Blockchain Architecture",
  "Smart Contract Development",
  "Web3 Integration",
  "DeFi Protocols",
  "Tokenomics",
  "Product Management",
  "Full-stack Development",
  "Agile Methodologies",
];

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>About John Doe - Blockchain Architect & Web3 Developer</title>
        <meta
          name="description"
          content="Learn about John Doe, an experienced blockchain architect and Web3 developer with a passion for transforming businesses through decentralized technologies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <Box my={8}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box display="flex" justifyContent="center">
                  <ProfileImage
                    src="/images/john-doe-profile.jpg"
                    alt="John Doe"
                    width={300}
                    height={300}
                    priority
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <StyledPaper elevation={0}>
                  <Typography variant="h2" gutterBottom>
                    John Doe
                  </Typography>
                  <Typography variant="h5" color="textSecondary" gutterBottom>
                    Blockchain Architect & Web3 Developer
                  </Typography>
                  <Typography variant="body1" paragraph>
                    With over a decade of experience in software development and a passion for blockchain technology, I've dedicated my career to bridging the gap between traditional systems and the decentralized web. My journey began in fintech, where I honed my skills in building robust, scalable applications. This foundation, combined with my deep dive into blockchain technologies, has equipped me to tackle complex challenges in the Web3 space.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    As a blockchain architect and Web3 developer, I've had the privilege of working on groundbreaking projects that are shaping the future of finance, supply chain management, and digital identity. My expertise spans from designing intricate tokenomics models to implementing secure smart contracts and seamlessly integrating Web3 functionalities into existing applications.
                  </Typography>
                  <Typography variant="body1">
                    I'm not just a developer; I'm a problem solver and a visionary. My goal is to help businesses harness the full potential of blockchain technology, creating solutions that are not only technologically advanced but also practical and user-friendly.
                  </Typography>
                </StyledPaper>
              </Grid>
            </Grid>
          </Box>

          <Box my={8}>
            <StyledPaper elevation={0}>
              <Typography variant="h4" gutterBottom>
                Expertise
              </Typography>
              <Box my={3}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </StyledPaper>
          </Box>

          <Box my={8}>
            <StyledPaper elevation={0}>
              <Typography variant="h4" gutterBottom>
                Achievements
              </Typography>
              <Typography variant="body1" paragraph>
                • Led the development of a DeFi platform that now manages over $100M in total value locked (TVL)
              </Typography>
              <Typography variant="body1" paragraph>
                • Winner of multiple blockchain hackathons, including ETHGlobal and Chainlink Hackathon
              </Typography>
              <Typography variant="body1" paragraph>
                • Published author on blockchain technology and its applications in enterprise systems
              </Typography>
              <Typography variant="body1">
                • Regular speaker at Web3 conferences and blockchain meetups
              </Typography>
            </StyledPaper>
          </Box>

          <Box my={8} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Let's Connect
            </Typography>
            <Box>
              <SocialButton
                variant="contained"
                color="primary"
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </SocialButton>
              <SocialButton
                variant="contained"
                color="primary"
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </SocialButton>
              <SocialButton
                variant="contained"
                color="primary"
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </SocialButton>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
              sx={{ mt: 3 }}
            >
              Download Resume
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Layout>
  );
}