import { type BlogPost, blogPosts } from '../data/blog-posts';

export type { BlogPost };

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => (
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = blogPosts.find(post => post.slug === slug);
  return post || null;
} 