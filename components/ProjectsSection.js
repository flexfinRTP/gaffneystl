import { motion } from 'framer-motion'
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material'

const projects = [
  {
    title: "Arcus",
    description: "One-click Bitcoin Loans and Native Bitcoin Lending Pools. BSL Pre-Accelerator('24) Cohort. Testnet is Live!",
    image: "/images/arcus.jpg",
    link: "https://arcusbtc.com/"
  },
  {
    title: "GluBear",
    description: "Pediatric CGM Solutions with Smart Teddy Bear + Mobile App. MIT Grand Hack Boston 2023 - Intersystems 3rd Place Winner!",
    image: "/images/glubear.jpg",
    link: "#"
  },
  {
    title: "DataLink DAO",
    description: "Global Verifiable Identities through decentralized services. ZK + DiD + DAO integration.",
    image: "/images/datalink.jpg",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4183833"
  },
  {
    title: "zAAp Protocol",
    description: "Transaction Bundler on zkSync. 3rd Place Winner in Scaling Ethereum Spring 23!",
    image: "/images/zaap.jpg",
    link: "#"
  },
  {
    title: "Palm Protocol",
    description: "Zeniq Lending Market Nomo App Integration. Developed during ZenCon Rio 2023.",
    image: "/images/palm.jpg",
    link: "#"
  },
  {
    title: "BitBull",
    description: "BTC Prediction Market built on Stacks. Part of Building on Bitcoin March 23 event.",
    image: "/images/bitbull.jpg",
    link: "#"
  },
  {
    title: "Quickfund",
    description: "Venture DAO developed during Chainlink Hackathon Fall 22.",
    image: "/images/quickfund.jpg",
    link: "#"
  },
  {
    title: "Ninja NFT",
    description: "DeFi project developed during Berkeley DeFi MOOC Fall 21.",
    image: "/images/ninja-nft.jpg",
    link: "https://bit.ly/3yIDCCg"
  },
  {
    title: "DeSilo",
    description: "Decentralized Science (DeSoc) project developed during ETHOnline 21.",
    image: "/images/desilo.jpg",
    link: "#"
  },
  {
    title: "AMM",
    description: "Automated Market Maker project developed during HackFS 21.",
    image: "/images/amm.jpg",
    link: "#"
  },
  {
    title: "Personal Token",
    description: "Developed during Chainlink Bootcamp Summer 21 - Inaugural Event.",
    image: "/images/personal-token.jpg",
    link: "#"
  },
  {
    title: "Paper Wallet Generator (ETH)",
    description: "Developed during Cornell IC3 SummerCamp 21.",
    image: "/images/paper-wallet.jpg",
    link: "#"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <Typography variant="h2" className="text-4xl font-bold mb-12 text-center text-white">
        Blockchain Projects Showcase
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-gray-800 text-white">
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent className="flex-grow">
                  <Typography gutterBottom variant="h5" component="div" className="text-blue-400">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="text-gray-300">
                    {project.description}
                  </Typography>
                </CardContent>
                <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener noreferrer" className="mx-2 mb-2">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}