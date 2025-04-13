"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Disclosures", href: "/disclosures" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gaffney311/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Twitter",
    href: "https://x.com/gaffney311",
    icon: "/icons/twitter.svg",
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: { xs: 2, md: 4 },
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2, ml: 4 }}>
              <Image
                src="/gwm_wordmark.png"
                alt="Gaffney Wealth Management"
                width={240}
                height={80}
              />
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, pr: 8 }}
            >
              Gaffney Wealth Management is a registered investment advisor
              providing wealth management services to clients across USA
            </Typography>

          </Grid>

          {/* Navigation */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
              Navigation
            </Typography>
            <Box
              component="nav"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <MuiLink
                    component="span"
                    sx={{
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.name}
                  </MuiLink>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
              Legal
            </Typography>
            <Box
              component="nav"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {legalLinks.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <MuiLink
                    component="span"
                    sx={{
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.name}
                  </MuiLink>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              {socialLinks.map((item) => (
                <IconButton
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Compliance Notice */}
          <Grid item xs={12}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 4,
                pt: 4,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              Gaffney Wealth Management is a registered investment advisor. All
              investments involve risk and are not guaranteed. Be sure to first
              consult with a qualified financial advisor and/or tax professional
              before implementing any strategy discussed herein. Past
              performance is not indicative of future results.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              © {new Date().getFullYear()} Gaffney Wealth Management. All rights
              reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
