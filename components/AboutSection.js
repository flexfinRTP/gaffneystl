import React, { useState } from 'react';
import { Typography, Container, Box, Button, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

const BookCover = ({ isOpen, title }) => (
  <motion.div
    initial={false}
    animate={{ rotateY: isOpen ? -180 : 0, opacity: isOpen ? 0 : 1 }}
    transition={{ duration: 1 }}
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#8B4513',
      display: 'flex',
      borderRadius: '22px',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 0 20px rgba(0,0,0,0.3)',
      backgroundImage: 'url("/booktexture.png")',
      backgroundRepeat: 'repeat',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden',
    }}
  >
    <Typography variant="h2" sx={{ fontFamily: 'Merriweather', color: '#f0e7d5', textAlign: 'center', padding: '20px' }}>
      {title}
    </Typography>
  </motion.div>
);

const StoryPages = ({ currentPage, content, isMobile }) => (
  <motion.div
    initial={{ rotateY: currentPage === 0 ? 180 : 0 }}
    animate={{ rotateY: 0 }}
    transition={{ duration: 1 }}
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      transformStyle: 'preserve-3d',
    }}
  >
    <Box
      sx={{
        width: isMobile ? '100%' : '50%',
        height: isMobile ? '50%' : '100%',
        backgroundColor: '#f0e7d5',
        padding: '20px',
        borderRadius: '11px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundImage: 'url("/papertexture.png")',
        backgroundRepeat: 'repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box 
        component="img" 
        src={content.image} 
        alt={content.title} 
        sx={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          maxHeight: isMobile ? '200px' : '400px'
        }} 
      />
    </Box>
    <Box
      sx={{
        width: isMobile ? '100%' : '50%',
        height: isMobile ? '50%' : '100%',
        backgroundColor: '#f0e7d5',
        padding: '20px',
        borderRadius: '11px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundImage: 'url("/papertexture.png")',
        backgroundRepeat: 'repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflowY: 'auto',
      }}
    >
      <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontFamily: 'Merriweather', mb: 2, color: '#333' }}>
        {content.title}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Lato', fontSize: isMobile ? '0.9rem' : '1.1rem', color: '#333', lineHeight: 1.6 }}>
        {content.content}
      </Typography>
      <Typography variant="body2" sx={{ position: 'absolute', bottom: 10, right: 20, fontFamily: 'Merriweather', color: '#333' }}>
        {currentPage * 2 + 2}
      </Typography>
    </Box>
  </motion.div>
);

const storyContent = [
  { 
    title: "The Seeds of Curiosity", 
    content: "In the quiet corners of my high school library, I found myself lost in the labyrinthine world of Austrian economics. Little did I know, those dense tomes were planting the seeds of a passion that would bloom into a lifelong journey of financial exploration and technological innovation.",
    image: "/economics.png"
  },
  { 
    title: "The Symphony of Printing Presses", 
    content: "The rhythmic hum of printing presses became the soundtrack of my early career. In the bustling showroom of the industry's titan, I learned the delicate dance of precision and creativity. Each whir and click of the machines was a note in the grand opus of bringing ideas to vibrant, tangible life.",
    image: "/printing.png"
  },
  { 
    title: "A Digital Renaissance", 
    content: "As the world retreated indoors, I embarked on a digital odyssey. The pandemic became my cocoon, and a free coding bootcamp, my chrysalis. Emerging from this metamorphosis, I found myself reborn into the pulsating world of tech, armed with the power to bend bits and bytes to my will.",
    image: "/coding.png"
  },
  { 
    title: "Scaling New Heights", 
    content: "With the wind of newfound skills at my back, I soared to unexpected heights. Landing at a prestigious credit bureau was just the beginning. The siren call of hackathons lured me into arenas of innovation, where I not only competed but conquered, time and again, pushing the boundaries of what's possible in fintech.",
    image: "/hackathon.png"
  },
  { 
    title: "The Blockchain Revolution", 
    content: "In the alchemy of finance and technology, I found my philosopher's stone. My Bitcoin lending app, once a mere glimmer of an idea, burgeoned into a thriving ecosystem. With over 700 users and 20 BTC in play, it stands as a testament to the transformative power of blockchain technology.",
    image: "/blockchain.png"
  },
  { 
    title: "Healing Through Innovation", 
    content: "Today, my journey takes an unexpected yet deeply meaningful turn. By leveraging cutting-edge technology to revolutionize pediatric diabetes care, I'm not just writing code – I'm writing hope. Every line of code is a lifeline, every algorithm a beacon of empowerment for young patients and their families.",
    image: "/healthcare.png"
  },
  { 
    title: "Your Web3 Sherpa", 
    content: "As I continue to push the envelope of what's possible in the digital realm, I extend an invitation to you. Whether you're a startup with a bold vision or an established company looking to harness the power of Web3, I'm here to guide you through this exciting new frontier. Together, we can turn your Web3 aspirations into reality.",
    image: "/web3.png"
  },
];

export default function About() {
    const [currentPage, setCurrentPage] = useState(-1);
    const [isBookOpen, setIsBookOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const nextPage = () => {
      if (currentPage < storyContent.length - 1) {
        setCurrentPage(currentPage + 1);
      } else {
        setIsBookOpen(false);
        setCurrentPage(-1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      } else if (currentPage === 0) {
        setIsBookOpen(false);
        setCurrentPage(-1);
      }
    };
  
    return (
      <Container maxWidth={isMobile ? "sm" : "lg"} sx={{ height: isMobile ? 'auto' : '80vh', position: 'relative', perspective: 1000, my: 4 }}>
        <Box sx={{ 
          width: '100%', 
          height: isMobile ? '70vh' : '100%', 
          position: 'relative', 
          transformStyle: 'preserve-3d',
          mb: isMobile ? 4 : 0
        }}>
          <BookCover isOpen={isBookOpen} title="From Print to Pixels" />
          <AnimatePresence mode="wait">
            {isBookOpen && currentPage >= 0 && (
              <StoryPages key={currentPage} currentPage={currentPage} content={storyContent[currentPage]} isMobile={isMobile} />
            )}
          </AnimatePresence>
        </Box>
        <Box sx={{ 
          position: isMobile ? 'static' : 'absolute', 
          bottom: 20, 
          left: 0, 
          right: 0, 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 2,
          mt: isMobile ? 2 : 0
        }}>
          {isBookOpen ? (
            <>
              <Button onClick={prevPage} disabled={currentPage === 0}>Previous</Button>
              <Button onClick={nextPage}>
                {currentPage === storyContent.length - 1 ? 'Close Book' : 'Next'}
              </Button>
            </>
          ) : (
            <Button onClick={() => {setIsBookOpen(true); setCurrentPage(0);}}>Open Book</Button>
          )}
        </Box>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontFamily: 'Merriweather', mb: 2, color: '#333' }}>
            Let's Write the Next Chapter Together
          </Typography>
          <Link href="/contact" passHref>
            <Button variant="contained" color="primary">
              Contact Me
            </Button>
          </Link>
        </Box>
      </Container>
    );
  }