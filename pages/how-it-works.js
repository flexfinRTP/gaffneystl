import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Typography, 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const CTAButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 20px',
  fontWeight: 'bold',
  marginTop: theme.spacing(2),
}));

const steps = [
  {
    label: 'Initial Consultation',
    description: 'We begin with a free 30-minute consultation to understand your business needs and goals.',
  },
  {
    label: 'Proposal and Agreement',
    description: 'Based on your requirements, we provide a detailed proposal outlining our services, timeline, and costs.',
  },
  {
    label: 'Project Kickoff',
    description: 'Once the agreement is signed, we schedule a kickoff meeting to align on project objectives and milestones.',
  },
  {
    label: 'Development and Implementation',
    description: 'Our team works diligently to deliver the agreed-upon services, with regular check-ins and progress updates.',
  },
  {
    label: 'Review and Handover',
    description: 'We present the final deliverables, conduct a thorough review, and ensure a smooth handover process.',
  },
  {
    label: 'Ongoing Support and Maintenance',
    description: 'We provide continuous support and maintenance to ensure your blockchain solution remains effective and up-to-date.',
  },
];

const maintenanceTerms = [
  '24/7 monitoring and issue resolution',
  'Regular security audits and updates',
  'Performance optimization',
  'Scalability management',
  'Ongoing consultation and advice',
];

export default function HowItWorks() {
  return (
    <Layout>
      <Head>
        <title>How It Works - Blockchain Consulting Services</title>
        <meta name="description" content="Learn about our blockchain consulting process and how we can transform your business with Web3 solutions." />
      </Head>

      <Container maxWidth="lg">
        <Box my={8}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" gutterBottom align="center">
              How It Works
            </Typography>
            <Typography variant="h5" paragraph align="center" color="textSecondary">
              Your journey to blockchain transformation starts here
            </Typography>

            <StyledPaper elevation={3}>
              <Stepper orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label} active={true}>
                    <StepLabel>
                      <Typography variant="h6">{step.label}</Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </StyledPaper>

            <StyledPaper elevation={3}>
              <Typography variant="h4" gutterBottom>
                Maintenance and Support
              </Typography>
              <Typography variant="body1" paragraph>
                Our commitment to your success doesn't end with project delivery. We offer ongoing maintenance and support to ensure your blockchain solution continues to drive value for your business.
              </Typography>
              <Typography variant="body1" paragraph>
                The monthly maintenance fee is based on the plan chosen, which includes:
              </Typography>
              <List>
                {maintenanceTerms.map((term, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={term} />
                  </ListItem>
                ))}
              </List>
            </StyledPaper>

            <StyledPaper elevation={3}>
              <Typography variant="h4" gutterBottom>
                Ready to Get Started?
              </Typography>
              <Typography variant="body1" paragraph>
                Click the button below to schedule your free consultation and begin your Web3 journey.
              </Typography>
              <Link href="/contact" passHref>
                <CTAButton
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Schedule Free Consultation
                </CTAButton>
              </Link>
            </StyledPaper>
          </motion.div>
        </Box>
      </Container>
    </Layout>
  );
}