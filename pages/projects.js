import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import CertificationsSection from "../components/CertificationsSection";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SocialIcons from "../components/SocialIcons";
import { projects } from "../utils/projects";
import styles from "../styles/Home.module.css";

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Justin Gaffney - Web3 Developer & Product Manager</title>
        <meta
          name="description"
          content="Portfolio of Justin Gaffney, showcasing cutting-edge web3 projects and product management expertise."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gaffney Consulting</h1>
        <p className={styles.description}>Innovative blockchain solutions and Web3 strategies</p>

        {/* <SocialIcons /> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <HeroSection /> */}
          <ProjectsSection />
          {/* <ExperienceSection /> */}
          <CertificationsSection />
        </motion.div>
      </main>
    </Layout>
  );
}
