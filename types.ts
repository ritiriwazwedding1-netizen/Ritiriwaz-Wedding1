export interface Film {
  id: string;
  title: string;
  category: 'Wedding Film' | 'Highlight' | 'Teaser' | 'Pre-wedding' | 'Reels';
  thumbnailUrl: string;
  videoUrl: string; // Embed URL
  description: string;
  date: string;
  location: string;
}

export interface Photo {
  id: string;
  url: string;
  category: 'Bridal' | 'Groom' | 'Ceremony' | 'Candid' | 'Details' | 'Family' | 'Reception';
  caption?: string;
  heightClass?: string; // For masonry layout simulation
}

export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Bride", "Groom"
  text: string;
  location: string;
}

export interface NavItem {
  label: string;
  path: string;
}