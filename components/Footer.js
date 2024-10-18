import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMedium,
} from "react-icons/fa";
import { init, send } from '@emailjs/browser';

const FooterWrapper = styled(motion.footer)`
  background-color: var(--color-primary);
  color: var(--color-text);
  position: relative;
  margin-top: auto; // This will push the footer to the bottom
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--color-accent),
      var(--color-secondary)
    );
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0;
`;

const FooterColumn = styled(motion.div)`
  flex: 1;
  margin-right: 2rem;
  min-width: 200px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Logo = styled(motion.a)`
  display: inline-block;
  margin-bottom: 1rem;
`;

const Tagline = styled(motion.p)`
  font-size: 1.2rem;
  margin: 1rem 0;
  color: var(--color-secondary);
  font-weight: 500;
`;

const FooterTitle = styled(motion.h4)`
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--color-accent);
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterItem = styled(motion.li)`


  a {
    color: var(--color-text);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: var(--color-secondary);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--color-secondary);
      transform: translateX(5px);

      &::after {
        width: 100%;
      }
    }
  }
`;

const Copyright = styled(motion.div)`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #888;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: var(--color-text);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-secondary);
  }
`;

const Newsletter = styled.div`
  margin-top: 1rem;
`;

const NewsletterInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.5rem 1rem;
  color: var(--color-text);
  border-radius: 4px 0 0 4px;
`;

const NewsletterButton = styled(motion.button)`
  background-color: var(--color-accent);
  color: var(--color-text);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 11px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-accent-hover);
  }
`;

const StatusMessage = styled(motion.p)`
  margin-top: 0.5rem;
  color: ${(props) => (props.success ? "var(--color-success)" : "var(--color-error)")};
`;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    init("LjgOoqNPpg23JpnH0");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("Please enter your email address.");
      setIsSuccess(false);
      return;
    }

    setStatus("Sending...");
    setIsSuccess(false);

    send(
      "service_itmoea9",
      "template_7nm6yt5",
      { email: email },
      "LjgOoqNPpg23JpnH0"
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Thank you for subscribing!");
        setIsSuccess(true);
        setEmail("");
      },
      (err) => {
        console.log("FAILED...", err);
        setStatus("Oops! Something went wrong. Please try again.");
        setIsSuccess(false);
      }
    );
  };

  return (
    <FooterWrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <FooterContent>
          <FooterColumn
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" passHref>
              <Logo whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image
                  src="/logo.png"
                  alt="Gaffney Consulting"
                  width={200}
                  height={60}
                />
              </Logo>
            </Link>
            <Tagline>Transforming Businesses with Web3 Solutions</Tagline>
            <SocialIcons>
              <SocialIcon
                href="https://twitter.com/gaffney311"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaTwitter />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/gaffney311"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/flexfinrtp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaGithub />
              </SocialIcon>
            </SocialIcons>
          </FooterColumn>
          <FooterColumn
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FooterTitle>Services</FooterTitle>
            <FooterList>
              {["Web3 Strategy Consulting", "Smart Contract Development", "Blockchain Education & Training", "Web3 Integration for Web2 Systems", "Enterprise Blockchain Solutions", "Tokenomics Design" ].map(
                (item, index) => (
                  <FooterItem
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href={`/services#${item.toLowerCase().replace(/ /g, "-")}`}>
                      <a>{item}</a>
                    </Link>
                  </FooterItem>
                )
              )}
            </FooterList>
          </FooterColumn>
          <FooterColumn
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FooterTitle>Stay Informed</FooterTitle>
            <p>Subscribe to receive Web3 insights and consulting promotions.</p>
            <Newsletter>
              <form onSubmit={handleSubmit}>
                <NewsletterInput
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <NewsletterButton
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </NewsletterButton>
              </form>
              <AnimatePresence>
                {status && (
                  <StatusMessage
                    success={isSuccess}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status}
                  </StatusMessage>
                )}
              </AnimatePresence>
            </Newsletter>
          </FooterColumn>
        </FooterContent>
        <Copyright
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} Gaffney Consulting. All rights reserved.
        </Copyright>
      </div>
    </FooterWrapper>
  );
};

export default Footer;