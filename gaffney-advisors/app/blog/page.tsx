'use client'

import { Container, Typography, Grid, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { getAllPosts } from '../utils/blog';

const MotionBox = motion(Box);

export default function BlogPage() {
  const theme = useTheme();
  const posts = getAllPosts();

  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.common.white,
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}CC, ${theme.palette.primary.dark}FF)`,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Playfair Display',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-12px',
                  left: 0,
                  width: '60px',
                  height: '4px',
                  background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                  borderRadius: '2px',
                },
              }}
            >
              Blog & Resources
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.grey[100],
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                maxWidth: '800px',
                mt: 4,
              }}
            >
              Insights and educational resources about financial planning, wealth management, and investment strategies.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Grid item xs={12} md={6} lg={4} key={post.slug}>
                <BlogCard
                  title={post.title}
                  description={post.description}
                  slug={post.slug}
                  date={post.date}
                  imageUrl={post.imageUrl}
                  category="Financial Planning"
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box
                sx={{
                  bgcolor: theme.palette.background.paper,
                  borderRadius: 2,
                  p: 6,
                  textAlign: 'center',
                  boxShadow: theme.shadows[1],
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'Playfair Display',
                    color: theme.palette.text.primary,
                    mb: 2,
                  }}
                >
                  Coming Soon
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '1.125rem',
                  }}
                >
                  We are working on bringing you valuable educational content and resources. Check back soon!
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
} 