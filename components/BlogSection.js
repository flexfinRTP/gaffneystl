// components/BlogSection.js
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: "The Future of DeFi: Trends to Watch",
    excerpt: "Explore the emerging trends in Decentralized Finance (DeFi) and how they're shaping the future of the financial industry.",
    image: "/images/defi-trends.jpg",
    slug: "future-of-defi-trends"
  },
  {
    title: "Blockchain in Supply Chain: A Game Changer",
    excerpt: "Discover how blockchain technology is revolutionizing supply chain management, enhancing transparency and efficiency.",
    image: "/images/blockchain-supply-chain.jpg",
    slug: "blockchain-supply-chain"
  },
  {
    title: "NFTs Beyond Art: Exploring New Use Cases",
    excerpt: "Delve into the world of Non-Fungible Tokens (NFTs) and their potential applications beyond digital art.",
    image: "/images/nft-use-cases.jpg",
    slug: "nfts-beyond-art"
  }
];

export default function BlogSection() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Latest Insights
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia sx={{ height: 200, position: 'relative' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.excerpt}
                </Typography>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button variant="text" color="primary">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Link href="/blog" passHref>
          <Button variant="contained" color="primary">View All Posts</Button>
        </Link>
      </Box>
    </Box>
  );
}