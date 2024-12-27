import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Card, CardContent, Box, Chip, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';

const StyledSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const certifications = [
  {
    title: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    date: "Jan 2022",
    credentialId: "001310774",
    link: "https://www.scrumalliance.org/certification/123456"
  },
  {
    title: "DeFi Ninja NFT - UC Berkeley",
    issuer: "Berkeley DeFi MOOC",
    date: "Fall 2021",
    credentialId: "BNFT2021",
    link: "https://bit.ly/3yIDCCg"
  },
  {
    title: "Google Cloud Digital Leader",
    issuer: "Coursera",
    date: "Mar 2022",
    credentialId: "TTY992KX9JEX",
    link: "https://www.credential.net/123456"
  },
  // Add more certifications here
];

export default function CertificationsSection() {
  return (
    <StyledSection>
      <Box maxWidth="lg" margin="auto">
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          Certifications & Achievements
        </Typography>
        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCard elevation={3}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Issued by: {cert.issuer}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Date: {cert.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Credential ID: {cert.credentialId}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <StyledChip
                      icon={<VerifiedIcon />}
                      label="Verified"
                      size="small"
                    />
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer" sx={{ mt: 2, display: 'inline-block' }}>
                      View Certificate
                    </Link>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledSection>
  );
}