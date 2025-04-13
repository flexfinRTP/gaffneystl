import { Metadata } from "next";
import AboutHero from "../components/AboutHero";
import AboutContent from "../components/AboutContent";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "About Us | Gaffney Wealth Management",
  description:
    "Learn about our mission, vision, and commitment to serving as your trusted Chief Investment Officer, providing comprehensive wealth management solutions.",
};

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        "& > section": {
          position: "relative",
          "&:not(:last-child)": {
            mb: { xs: 4, md: 6 },
          },
        },
      }}
    >
      <AboutHero />
      <AboutContent />
    </Box>
  );
}
