export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'tax-efficient-investing',
    title: 'Tax-Efficient Investment Strategies',
    description: 'Discover how to maximize your investment returns through tax-efficient strategies and smart portfolio management.',
    date: 'March 10, 2024',
    imageUrl: '/gwmlogo.png',
    category: 'Investment Strategy',
    content: `
      Tax efficiency is a crucial aspect of investment success. Here are key strategies to consider:

      1. Asset Location
      Place tax-inefficient investments in tax-advantaged accounts and tax-efficient investments in taxable accounts.

      2. Tax-Loss Harvesting
      Strategic selling of investments at a loss can help offset capital gains and reduce your tax burden.

      3. Municipal Bonds
      Consider tax-free municipal bonds for tax-efficient income, especially if you're in a higher tax bracket.

      4. Hold Periods
      Long-term capital gains are typically taxed at lower rates than short-term gains.

      5. Fund Selection
      Choose tax-efficient funds and ETFs that minimize distributions of capital gains.
    `
  },
];