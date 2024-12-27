// components/Footer.js
import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Twitter,
  LinkedIn,
  GitHub,
  Email,
} from "@mui/icons-material";

// Styled Components
const StyledFooter = styled(Box)(({ theme }) => ({
  background: "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 1) 100%)",
  color: theme.palette.text.primary,
  padding: theme.spacing(8, 0, 4),
  position: "relative",
  marginTop: "auto",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: 40,
    height: 2,
    background: theme.palette.primary.main,
  },
}));

const FooterLinkWrapper = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "all 0.3s ease",
  marginRight: theme.spacing(2),
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "translateY(-3px)",
  },
}));

export default function Footer() {
  const quickLinks = [
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { title: "Web3 Strategy", path: "/services/blockchain-strategy-consulting" },
    { title: "Smart Contracts", path: "/services/smart-contract-development-and-auditing" },
    { title: "DApp Development", path: "/services/web3-integration-for-web2-apps" },
    { title: "Blockchain Training", path: "/services/blockchain-education-and-training" },
  ];

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box mb={3}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Gaffney Consulting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Transforming businesses through innovative blockchain solutions and Web3 strategies.
              </Typography>
            </Box>
            <Box>
              <SocialButton 
                component="a"
                href="https://twitter.com/gaffney311" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </SocialButton>
              <SocialButton 
                component="a"
                href="https://linkedin.com/in/gaffney311" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </SocialButton>
              <SocialButton 
                component="a"
                href="https://github.com/flexfinrtp" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </SocialButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <FooterHeading variant="h6">Quick Links</FooterHeading>
            <List dense>
              {quickLinks.map((link) => (
                <ListItem key={link.title} sx={{ px: 0 }}>
                  <Link href={link.path} passHref>
                    <FooterLinkWrapper>
                      <ListItemText primary={link.title} />
                    </FooterLinkWrapper>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <FooterHeading variant="h6">Services</FooterHeading>
            <List dense>
              {serviceLinks.map((link) => (
                <ListItem key={link.title} sx={{ px: 0 }}>
                  <Link href={link.path} passHref>
                    <FooterLinkWrapper>
                      <ListItemText primary={link.title} />
                    </FooterLinkWrapper>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Email Contact */}
          <Grid item xs={12} md={4}>
            <FooterHeading variant="h6">Get in Touch</FooterHeading>
            <Box>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Email />}
                href="mailto:justin@gaffneystl.com"
                component="a"
                sx={{ mt: 2 }}
              >
                Email Me
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Copyright */}
        <Box sx={{ textAlign: "center", pt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Gaffney Consulting. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
}