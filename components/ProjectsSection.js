import { Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Arcus",
    description: "One-click Bitcoin Loans and Native Bitcoin Lending Pools. BSL Pre-Accelerator('24) Cohort. Testnet is Live!",
    image: "/arcus.jpg",
    link: "https://arcusbtc.com/"
  },
  {
    title: "GluBear",
    description: "Pediatric CGM Solutions with Smart Teddy Bear + Mobile App. MIT Grand Hack Boston 2023 - Intersystems 3rd Place Winner!",
    image: "/glubear.png",
    link: "https://myglubear.com/"
  },
  {
    title: "DataLink DAO",
    description: "Global Verifiable Identities through decentralized services. ZK + DiD + DAO integration.",
    image: "/DataLink.jpg",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4183833"
  },
  {
    title: "zAAp Protocol",
    description: "Transaction Bundler on zkSync. 3rd Place Winner in Scaling Ethereum Spring 23!",
    image: "/zaap.png",
    link: "https://github.com/tx-bundler/tx-bundler"
  },
  {
    title: "Quickfund",
    description: "Venture DAO developed during Chainlink Hackathon Fall 22.",
    image: "/quickfund.png",
    link: "https://github.com/KickStarter-DAO/KickStarter-Frontend"
  },
  {
    title: "Skeuomorphia",
    description: "Stablecoin ATM. Print Stablecoin notes for physical redemption, earn passive income on your stablecoin savings.",
    image: "/skeu.png",
    link: "https://github.com/flexfinRTP/skeuomorphia"
  },
  {
    title: "Bump Wallet",
    description: "Bump-to-Pay. Instant Bitcoin payments via NFC.",
    image: "/bump.png",
    link: "https://github.com/BumpBTC/"
  },
  {
    title: "Palm Protocol",
    description: "Zeniq Lending Market Nomo App Integration. Developed during ZenCon Rio 2023.",
    image: "/palm.png",
    link: "https://github.com/Palm-Lending"
  },
  {
    title: "Bulk Paper Wallet Generator (ETH)",
    description: "Generate multiple ETH wallets in seconds. Use for vanity purposes or load dust for Developed during Cornell IC3 SummerCamp 21.",
    image: "/ethwallet_gen.png",
    link: "https://github.com/flexfinRTP/ethwallet-gen-stripped"
  }
]

export default function ProjectsSection() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ pb: 2 }} className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={project.title} xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardMedia sx={{ height: 420, position: 'relative' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </CardMedia>
                <CardContent className="flex-grow">
                  <Typography gutterBottom variant="h5" component="h3" className="font-bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}