import { Author } from './author';

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: Author;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}
