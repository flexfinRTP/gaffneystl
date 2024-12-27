// components/ExitIntentPopup.js
import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Typography,
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: theme.spacing(2),
    maxWidth: '500px',
    width: '90%',
    margin: theme.spacing(2),
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.5rem',
  fontWeight: 700,
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2),
  justifyContent: 'center',
  gap: theme.spacing(2),
}));

const ExitIntentPopup = ({ onClose }) => {
  return (
    <StyledDialog 
      open={true} 
      onClose={onClose} 
      aria-labelledby="exit-intent-popup"
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(4px)',
        },
      }}
    >
      <StyledDialogTitle id="exit-intent-popup">
        Wait! Don't Miss This Opportunity
      </StyledDialogTitle>
      <StyledDialogContent>
        <Typography align="center" color="text.primary" paragraph>
          Get a FREE basic dApp prototype or website with any of our service packages. 
          Start your blockchain journey today!
        </Typography>
      </StyledDialogContent>
      <StyledDialogActions>
        <Button 
          onClick={onClose}
          variant="outlined"
          color="primary"
        >
          No, thanks
        </Button>
        <Link href="/free-dapp-offer" passHref>
          <Button 
            color="primary" 
            variant="contained" 
            onClick={onClose}
            component="a"
          >
            Learn More
          </Button>
        </Link>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default ExitIntentPopup;