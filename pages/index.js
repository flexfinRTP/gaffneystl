// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";
import ProjectsSection from "../components/ProjectsSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import { motion } from "framer-motion";
import ValueProposition from "../components/ValueProposition";
import ExitIntentPopup from "../components/ExitIntentPopup";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    
    if (!hasVisitedBefore) {
      let exitIntentShown = false;
      
      const handleMouseLeave = (e) => {
        // Only trigger if moving mouse above the top of the window
        if (e.clientY <= 0 && !exitIntentShown) {
          setShowExitPopup(true);
          exitIntentShown = true;
          // Set visited flag
          localStorage.setItem('hasVisited', 'true');
        }
      };

      // Add event listener with delay to prevent immediate triggering
      setTimeout(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
      }, 2000);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const handleCloseExitPopup = () => {
    setShowExitPopup(false);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <Layout>
      <Head>
        <title>Justin Gaffney - Web3 & Blockchain Consulting</title>
        <meta
          name="description"
          content="Transform your business with expert Web3 and blockchain consulting. Book a call to start your journey into decentralized solutions."
        />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <ValueProposition />
        <HeroSection />
        <ServicesSection />
        <FAQSection />
        <CTASection />
        {/* <BlogSection /> */}
      </motion.div>

      {showExitPopup && (
        <ExitIntentPopup onClose={handleCloseExitPopup} />
      )}
    </Layout>
  );
}