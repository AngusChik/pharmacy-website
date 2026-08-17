export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: number;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Resource {
  title: string;
  type: string;
  readTime: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}
