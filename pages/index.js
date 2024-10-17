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
      const exitIntent = (e) => {
        if (e.clientY <= 0) {
          setShowExitPopup(true);
          document.removeEventListener('mouseleave', exitIntent);
        }
      };
      document.addEventListener('mouseleave', exitIntent);
      return () => document.removeEventListener('mouseleave', exitIntent);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Justin Gaffney - Web3 & Blockchain Consulting</title>
        <meta
          name="description"
          content="Transform your business with expert Web3 and blockchain consulting. Book a call to start your journey into decentralized solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Gaffney Web3 Consulting",
              "description": "Expert Web3 and blockchain consulting services",
              "url": "https://www.gaffneystl.com",
              "logo": "https://www.gaffneystl.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/in/gaffney311",
                "https://twitter.com/gaffney311",
                "https://github.com/flexfinrtp"
              ]
            }
          `}
        </script>
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
        <BlogSection />
        <CTASection />
      </motion.div>
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}
    </Layout>
  );
}