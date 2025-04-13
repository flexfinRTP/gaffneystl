import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { Container, Typography, Box } from '@mui/material';
import { formatDate } from '@/lib/utils';

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
  author: string;
  excerpt: string;
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, color: 'text.secondary' }}>
          <Typography variant="body1">{post.author}</Typography>
          <Typography variant="body1">•</Typography>
          <Typography variant="body1">{formatDate(post.date)}</Typography>
        </Box>
        <Box
          sx={{
            '& h2': { mt: 4, mb: 2 },
            '& p': { mb: 2 },
            '& ul, & ol': { mb: 2, pl: 4 },
            '& li': { mb: 1 },
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Box>
    </Container>
  );
} 