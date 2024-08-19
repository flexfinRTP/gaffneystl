import { motion } from 'framer-motion'
import { Typography, Button } from '@mui/material'

export default function HeroSection() {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <Typography variant="h1" className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        John Doe
      </Typography>
      <Typography variant="h2" className="text-3xl mb-8 text-gray-300">
       Web3 Product Engineer & Thought Leader
      </Typography>
      <Typography variant="body1" className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
        From operating complex printing presses to developing cutting-edge blockchain solutions, my journey exemplifies the power of adaptability and continuous learning. Today, I leverage my diverse background to bridge traditional industries with Web3 innovations, creating impactful solutions at the intersection of technology and business.
      </Typography>
      <Button variant="contained" color="primary" size="large" href="#projects" className="mr-4">
        Explore My Projects
      </Button>
      <Button variant="outlined" color="primary" size="large" href="#experience">
        View My Journey
      </Button>
    </motion.section>
  )
}