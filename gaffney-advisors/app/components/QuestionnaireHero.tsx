"use client";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import RetirementQuestionnaire from "./RetirementQuestionnaire";

export default function QuestionnaireHero() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  return (
    <>
      <Box
        sx={{
          py: { xs: 10, md: 12 },
          backgroundColor: "rgba(26, 59, 93, 0.95)", // Deep Navy Blue overlay
            // backgroundImage: 'url("/gwmlogo.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(26, 59, 93, 0.92), rgba(26, 59, 93, 0.85))",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: "#D4B97C", // Rich Gold
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-10px",
                    left: 0,
                    width: "80px",
                    height: "3px",
                    background: "linear-gradient(to right, #C4A052, transparent)",
                  },
                }}
              >
                COMPLIMENTARY
                <br />
                RETIREMENT
                <br />
                FINANCIAL PLAN &
                <br />
                TAX STRATEGY
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                pl: { md: 8 }, 
                borderLeft: { md: "2px solid rgba(212, 185, 124, 0.3)" },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#D4B97C", // Light Gray
                    fontSize: { xs: "1.125rem", md: "1.25rem" },
                    mb: 4,
                    lineHeight: 1.8,
                    fontWeight: 400,
                    textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    textAlign: 'center'
                  }}
                >
                  Take our 3-minute questionnaire and receive a complimentary
                  Retirement Financial Plan and Tax Strategy designed to help you
                  minimize taxes, maximize wealth, and secure your financial future.
                  Get personalized insights tailored to your retirement goals today!
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setShowQuestionnaire(true)}
                  disabled={true}
                  sx={{
                    backgroundColor: "#C4A052", // Rich Gold
                    color: "#FFFFFF", // Light Gray
                    fontSize: "1.125rem",
                    py: 1.75,
                    px: 4,
                    borderRadius: "50px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#9C7F3D", // Darker Gold
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 8px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  Start Your Plan Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {showQuestionnaire && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(26, 43, 60, 0.95)", // Dark Navy with opacity
            zIndex: 1000,
            overflowY: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(5px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowQuestionnaire(false);
            }
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              m: 2,
              position: "relative",
              animation: "slideUp 0.3s ease-out",
              "@keyframes slideUp": {
                from: { transform: "translateY(20px)", opacity: 0 },
                to: { transform: "translateY(0)", opacity: 1 },
              },
            }}
          >
            <Button
              onClick={() => setShowQuestionnaire(false)}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                color: "#F7F9FC",
                zIndex: 1,
                "&:hover": {
                  backgroundColor: "rgba(247, 249, 252, 0.1)",
                },
              }}
            >
              Close
            </Button>
            <RetirementQuestionnaire />
          </Box>
        </Box>
      )}
    </>
  );
}
