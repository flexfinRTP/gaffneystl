import React from 'react';
import Link from 'next/link';
import { Box, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const OfferPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  borderRadius: 16,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
    zIndex: 1,
  }
}));

const OfferButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  }
}));

export default function FreeDAppOfferSection() {
  return (
    <Box sx={{ my: 8 }}>
      <OfferPaper elevation={3}>
        <RocketLaunchIcon sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h3" gutterBottom>
          Launch Your Web3 Journey for Free
        </Typography>
        <Typography variant="h6" paragraph>
          Get a FREE basic dApp prototype or website after an inital consultation
        </Typography>
        <Typography variant="body1" paragraph>
          Start your blockchain transformation today with no upfront development costs. 
          Our expert team will create a custom prototype tailored to your business needs.
        </Typography>
        <Link href="free-dapp-offer" passHref>
          <OfferButton href="free-dapp-offer" variant="contained" size="large">
            Learn More About This Offer
          </OfferButton>
        </Link>
      </OfferPaper>
    </Box>
  );
}