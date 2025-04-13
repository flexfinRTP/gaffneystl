'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  imageUrl?: string;
  category: string;
}

export default function BlogCard({
  title,
  description,
  slug,
  date,
  imageUrl,
  category,
}: BlogCardProps) {
  const theme = useTheme();

  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: theme.shadows[1],
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[4],
        },
      }}
    >
      {imageUrl && (
        <Box sx={{ position: 'relative', height: 200, width: '100%' }}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      )}
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="overline"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            mb: 1,
          }}
        >
          {category}
        </Typography>
        <Link href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 700,
              mb: 2,
              color: theme.palette.text.primary,
              transition: 'color 0.2s',
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            {title}
          </Typography>
        </Link>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            mb: 3,
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '0.875rem',
            }}
          >
            {date}
          </Typography>
          <Link href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
            <Typography
              variant="button"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: '0.875rem',
                transition: 'color 0.2s',
                '&:hover': {
                  color: theme.palette.primary.dark,
                },
              }}
            >
              Read More →
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </MotionCard>
  );
} 