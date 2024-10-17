// components/ExitIntentPopup.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import Link from 'next/link';

const ExitIntentPopup = ({ onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} aria-labelledby="exit-intent-popup">
      <DialogTitle id="exit-intent-popup">Wait! Don't Miss This Opportunity</DialogTitle>
      <DialogContent>
        <Typography>
          Get a FREE basic dApp prototype or website with any of our service packages. Start your blockchain journey today!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No, thanks</Button>
        <Link href="/free-dapp-offer" passHref>
          <Button color="primary" variant="contained" onClick={onClose}>
            Learn More
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default ExitIntentPopup;