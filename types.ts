export interface NavLink {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  minOrder?: string;
  tag?: string;
  tagColor?: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tag: string;
}