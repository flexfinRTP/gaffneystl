"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Modal,
  IconButton,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function AboutContent() {
  const [bioModalOpen, setBioModalOpen] = useState(false);

  const handleOpenBio = () => setBioModalOpen(true);
  const handleCloseBio = () => setBioModalOpen(false);

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Introduction Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.25rem",
                  lg: "3.75rem",
                },
                fontWeight: 700,
                color: "#1A202C",
                mb: { xs: 3, md: 4 },
                lineHeight: 1.1,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-12px",
                  left: 0,
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(to right, #4E5D94, #2D3748)",
                  borderRadius: "2px",
                },
              }}
            >
              Our Approach to Wealth Management
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                lineHeight: 1.8,
                color: "#4A5568",
                mb: { xs: 3, md: 4 },
                maxWidth: "800px",
              }}
            >
              At Gaffney Wealth Management, we believe that true wealth
              management goes beyond just investment management. Our
              comprehensive approach integrates investment strategy, financial
              planning, and tax optimization to help you achieve your financial
              goals.
            </Typography>
          </motion.div>
        </Box>

        {/* Core Values Section */}
        <Box
          sx={{
            mb: { xs: 8, md: 12 },
            background: (theme) => `linear-gradient(135deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: 24,
          }}
        >
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "common.white",
                  textAlign: "center",
                  mb: { xs: 4, md: 6 },
                  fontFamily: "Playfair Display",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                }}
              >
                Our Core Values
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {[
                {
                  title: "Client-Centric Excellence",
                  description:
                    "We put our clients first, delivering personalized solutions and exceptional service that exceeds expectations.",
                  // icon: "🤝",
                },
                {
                  title: "Integrity & Transparency",
                  description:
                    "We maintain the highest ethical standards, ensuring clear communication and honest advice in all our relationships.",
                  // icon: "✨",
                },
                {
                  title: "Innovation & Expertise",
                  description:
                    "We combine cutting-edge strategies with deep industry knowledge to provide forward-thinking wealth management solutions.",
                  // icon: "🚀",
                },
              ].map((value, index) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ cursor: "pointer" }}
                  key={index}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: "100%",
                        backgroundColor: (theme) => theme.palette.primary.main,
                        borderRadius: 3,
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          backgroundColor: (theme) =>
                            theme.palette.primary.dark,
                        },
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: "3rem",
                          mb: 2,
                          textAlign: "center",
                        }}
                      >
                        {/* {value.icon} */}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "common.white",
                          mb: 2,
                          textAlign: "center",
                          fontFamily: "Playfair Display",
                          fontWeight: 600,
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          textAlign: "center",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          sx={{
            pb: { xs: 8, md: 12 },
            backgroundColor: "#F7FAFC",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              {/* Mission Section */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    background: (theme) => `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: 24,
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      fontFamily: "Playfair Display",
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 700,
                      color: "#1A202C",
                      mb: 3,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: 0,
                        width: "60px",
                        height: "3px",
                        background:
                          "linear-gradient(to right, #4E5D94, #2D3748)",
                        borderRadius: "2px",
                      },
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.125rem",
                      lineHeight: 1.8,
                      color: "#4A5568",
                      mb: 3,
                    }}
                  >
                    To serve as your trusted Chief Investment Officer, providing
                    comprehensive wealth management solutions that optimize
                    every aspect of your financial life. We are committed to:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                    {[
                      "Delivering personalized investment strategies aligned with your goals",
                      "Providing transparent, objective financial advice",
                      "Building long-term relationships based on trust and integrity",
                      "Continuously innovating to serve you better",
                    ].map((point, index) => (
                      <Typography
                        key={index}
                        component="li"
                        sx={{
                          fontSize: "1.125rem",
                          color: "#4A5568",
                          mb: 2,
                          "&:last-child": { mb: 0 },
                        }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Grid>

              {/* Vision Section */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    background: (theme) => `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "rgba(0, 0, 0, 0.08)",
                    boxShadow: 24,
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      fontFamily: "Playfair Display",
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 700,
                      color: "#1A202C",
                      mb: 3,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: 0,
                        width: "60px",
                        height: "3px",
                        background:
                          "linear-gradient(to right, #4E5D94, #2D3748)",
                        borderRadius: "2px",
                      },
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.125rem",
                      lineHeight: 1.8,
                      color: "#4A5568",
                      mb: 3,
                    }}
                  >
                    To be recognized as the premier wealth management firm in
                    St. Louis, known for:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                    {[
                      "Excellence in comprehensive wealth management",
                      "Innovation in financial planning and investment strategies",
                      "Dedication to client education and empowerment",
                      "Making a positive impact in our community",
                    ].map((point, index) => (
                      <Typography
                        key={index}
                        component="li"
                        sx={{
                          fontSize: "1.125rem",
                          color: "#4A5568",
                          mb: 2,
                          "&:last-child": { mb: 0 },
                        }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Founder Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "1.75rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "2.75rem",
                },
                fontWeight: 700,
                mb: { xs: 4, md: 6 },
                color: "#1A202C",
                fontFamily: "Playfair Display",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-12px",
                  left: 0,
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(to right, #4E5D94, #2D3748)",
                  borderRadius: "2px",
                },
              }}
            >
              Meet Our Founder
            </Typography>
          </motion.div>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <MotionCard
              onClick={handleOpenBio}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: (theme) => theme.shadows[8],
                  "& .profile-image": {
                    transform: "scale(1.05)",
                  },
                },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #ffffff, #f8fafc)",
                width: "100%",
                maxWidth: "1200px",
              }}
              role="button"
              tabIndex={0}
              aria-label="Open Justin's biography"
            >
              <Box
                className="profile-image"
                sx={{
                  width: { xs: "100%", md: "400px" },
                  height: { xs: "300px", md: "400px" },
                  backgroundImage: 'url("/Gaffney.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.3s ease-in-out",
                  borderRadius: { xs: "16px 16px 0 0", md: "0 16px 16px 0" },
                }}
              />
              <CardContent
                sx={{
                  flex: 1,
                  p: { xs: 3, md: 6 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontFamily: "Playfair Display",
                    color: "#1A202C",
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                  }}
                >
                  Justin Gaffney
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    color: "#4E5D94",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Founder & CEO
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4A5568",
                    mb: 4,
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    lineHeight: 1.8,
                  }}
                >
                  With extensive experience in wealth management and a passion
                  for helping clients achieve their financial goals, I lead
                  Gaffney Wealth Management with a focus on innovative solutions
                  and personalized service.
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "#4E5D94",
                    color: "#4E5D94",
                    borderWidth: "2px",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "1rem",
                    padding: "8px 24px",
                    alignSelf: "flex-start",
                    "&:hover": {
                      borderColor: "#3D4B7D",
                      backgroundColor: "rgba(77, 93, 148, 0.1)",
                      borderWidth: "2px",
                    },
                  }}
                >
                  Read Full Bio
                </Button>
              </CardContent>
            </MotionCard>
          </Box>
        </Box>
      </Container>

      {/* Bio Modal */}
      <Modal
        open={bioModalOpen}
        onClose={handleCloseBio}
        aria-labelledby="bio-modal-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            maxHeight: "90vh",
            overflow: "auto",
            bgcolor: "background.paper",
            borderRadius: "16px",
            boxShadow: 24,
            p: { xs: 3, md: 6 },
          }}
        >
          <IconButton
            onClick={handleCloseBio}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#4A5568",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h4"
            id="bio-modal-title"
            sx={{
              mb: 4,
              fontFamily: "Playfair Display",
              fontWeight: 700,
              color: "#1A202C",
            }}
          >
            Justin Gaffney - Full Biography
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#4A5568",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            [Detailed biography content would go here]
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
