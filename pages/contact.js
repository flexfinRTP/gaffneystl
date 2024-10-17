import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Paper,
  IconButton,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Layout from "../components/Layout";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { InlineWidget } from "react-calendly";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
  borderRadius: "16px",
}));

const StyledForm = styled("form")(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1, 4),
  borderRadius: "50px",
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-3px)",
  },
}));

const services = [
  "Free Web3 dApp or website",
  "Web3 Strategy Consulting",
  "Web3 Integration for Web2 Systems",
  "Smart Contract Development",
  "Blockchain Education & Training",
  "Tokenomics Design",
  "Enterprise Blockchain Solutions",
];

const plans = [
  "Free Web3 dApp or website",
  "Basic Plan",
  "Professional Plan",
  "Enterprise Plan",
];

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        service: data.service,
        plan: data.plan,
      };

      await emailjs.send(
        "service_itmoea9",
        "template_7nm6yt5",
        templateParams,
        "LjgOoqNPpg23JpnH0"
      );
      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });
      reset();
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    }
    setIsSubmitting(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Layout>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StyledPaper elevation={3}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700, color: theme.palette.primary.main }}
            >
              Let's Build the Future of Blockchain Together
            </Typography>

            <Box my={4}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  color: theme.palette.text.secondary,
                }}
              >
                As a seasoned blockchain architect and developer, I specialize
                in crafting innovative decentralized solutions that drive
                business transformation. With expertise spanning DeFi, NFTs,
                smart contracts, and enterprise blockchain integration, I offer
                comprehensive consultation and development services tailored to
                your unique needs.
              </Typography>
            </Box>

            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <StyledTextField
                        {...field}
                        fullWidth
                        label="Name"
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <StyledTextField
                        {...field}
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="service"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Service selection is required" }}
                    render={({ field }) => (
                      <StyledTextField
                        {...field}
                        select
                        fullWidth
                        label="Interested Service"
                        variant="outlined"
                        error={!!errors.service}
                        helperText={errors.service?.message}
                      >
                        {services.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </StyledTextField>
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="plan"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Plan selection is required" }}
                    render={({ field }) => (
                      <StyledTextField
                        {...field}
                        select
                        fullWidth
                        label="Interested Plan"
                        variant="outlined"
                        error={!!errors.plan}
                        helperText={errors.plan?.message}
                      >
                        {plans.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </StyledTextField>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <StyledTextField
                        {...field}
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="center" mt={4}>
                <StyledButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </StyledButton>
              </Box>
            </StyledForm>

            <Box mt={6}>
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{ fontWeight: 600, color: theme.palette.text.primary }}
              >
                Schedule Your Free Consultation
              </Typography>
              <InlineWidget url="https://calendly.com/gaffney311" />
            </Box>

            <Box mt={4} textAlign="center">
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: theme.palette.text.primary }}
              >
                Or reach out directly:
              </Typography>
              <StyledButton
                variant="outlined"
                color="primary"
                startIcon={<EmailIcon />}
                onClick={() =>
                  (window.location.href = "mailto:justin@gaffneystl.com")
                }
                sx={{ mt: 2 }}
              >
                Email Me
              </StyledButton>
            </Box>

            <Box mt={4} display="flex" justifyContent="center">
              <SocialIconButton
                color="primary"
                aria-label="LinkedIn"
                component="a"
                href="https://linkedin.com/in/gaffney311"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </SocialIconButton>
              <SocialIconButton
                color="primary"
                aria-label="GitHub"
                component="a"
                href="https://github.com/flexfinrtp"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </SocialIconButton>
            </Box>
          </StyledPaper>
        </motion.div>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  );
}