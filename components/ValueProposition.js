// components/ValueProposition.js
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        py: 4,
        textAlign: 'center',
        borderRadius: '22px'
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
          Want a FREE Web3 dApp?
          </Typography>
          <Typography variant="h5">
            Special offer when you a schedule a call now! We will build you a prototype Web3 Application - FREE, NO CONTRACTS for giving us a try.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ValueProposition;