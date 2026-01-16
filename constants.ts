import { Film, Photo, Package, Testimonial } from './types';

// Brand Info
export const BRAND = {
  name: "Ritiriwaz Wedding",
  tagline: "Every wedding has a story. We don’t just capture how it looked, we capture how it felt.",
  phone1: "+977-9825357865",
  phone2: "+977-9826189938",
  whatsapp1: "9779825357865",
  whatsapp2: "9779826189938",
  instagram: "https://www.instagram.com/ritiriwazwedding/",
  email: "bookings@ritiriwaz.com",
  association: "In Association with Kaji Production"
};

// WhatsApp Link Generator
export const getWhatsAppLink = (message: string = "Hi, I would like to check availability for my wedding.") => {
  return `https://api.whatsapp.com/send?phone=${BRAND.whatsapp1}&text=${encodeURIComponent(message)}`;
};

// Featured Films Data
export const FILMS: Film[] = [
  {
    id: 'f1',
    title: "A Royal Union in Kathmandu",
    category: "Wedding Film",
    thumbnailUrl: "https://picsum.photos/id/1059/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    description: "A celebration of love amidst ancient temples and royal traditions.",
    date: "Dec 2023",
    location: "Kathmandu"
  },
  {
    id: 'f2',
    title: "Emotions of the Himalayas",
    category: "Highlight",
    thumbnailUrl: "https://picsum.photos/id/1015/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Tears of joy and laughter echoing through the mountains.",
    date: "Jan 2024",
    location: "Pokhara"
  },
  {
    id: 'f3',
    title: "The Golden Hour Vows",
    category: "Teaser",
    thumbnailUrl: "https://picsum.photos/id/1016/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A cinematic teaser of a sunset wedding.",
    date: "Nov 2023",
    location: "Chitwan"
  },
  {
    id: 'f4',
    title: "Urban Chic Romance",
    category: "Pre-wedding",
    thumbnailUrl: "https://picsum.photos/id/1025/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Modern love story shot in the heart of the city.",
    date: "Feb 2024",
    location: "Lalitpur"
  },
  {
    id: 'f5',
    title: "Traditional Elegance",
    category: "Reels",
    thumbnailUrl: "https://picsum.photos/id/106/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Short format storytelling focused on rituals.",
    date: "Oct 2023",
    location: "Bhaktapur"
  },
  {
    id: 'f6',
    title: "Ethereal Night",
    category: "Wedding Film",
    thumbnailUrl: "https://picsum.photos/id/129/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "The magic that happens when the sun goes down.",
    date: "Dec 2023",
    location: "Kathmandu"
  }
];

// Photography Gallery Data
export const PHOTOS: Photo[] = [
  { id: 'p1', url: 'https://picsum.photos/id/65/600/800', category: 'Bridal', heightClass: 'h-96' },
  { id: 'p2', url: 'https://picsum.photos/id/64/600/600', category: 'Candid', heightClass: 'h-64' },
  { id: 'p3', url: 'https://picsum.photos/id/91/600/900', category: 'Ceremony', heightClass: 'h-[450px]' },
  { id: 'p4', url: 'https://picsum.photos/id/103/600/700', category: 'Details', heightClass: 'h-80' },
  { id: 'p5', url: 'https://picsum.photos/id/177/600/600', category: 'Groom', heightClass: 'h-64' },
  { id: 'p6', url: 'https://picsum.photos/id/250/600/800', category: 'Reception', heightClass: 'h-96' },
  { id: 'p7', url: 'https://picsum.photos/id/319/600/600', category: 'Bridal', heightClass: 'h-64' },
  { id: 'p8', url: 'https://picsum.photos/id/338/600/800', category: 'Family', heightClass: 'h-96' },
  { id: 'p9', url: 'https://picsum.photos/id/349/600/600', category: 'Candid', heightClass: 'h-64' },
  { id: 'p10', url: 'https://picsum.photos/id/435/600/750', category: 'Ceremony', heightClass: 'h-80' },
  { id: 'p11', url: 'https://picsum.photos/id/453/600/600', category: 'Details', heightClass: 'h-64' },
  { id: 'p12', url: 'https://picsum.photos/id/514/600/900', category: 'Reception', heightClass: 'h-[450px]' },
];

// Packages Data
export const PACKAGES: Package[] = [
  {
    id: 'pkg1',
    name: 'Starter Collection',
    price: 'Contact for Quote',
    features: [
      'Up to 8 Hours Coverage',
      '1 Photographer + 1 Cinematographer',
      'Edited High-Res Images (300+)',
      '3-4 Minute Cinematic Highlight',
      'Online Gallery Delivery',
      '30 Days Delivery Time'
    ]
  },
  {
    id: 'pkg2',
    name: 'Classic Royal',
    price: 'Most Popular',
    isPopular: true,
    features: [
      'Full Day Coverage (12 Hours)',
      '2 Photographers + 2 Cinematographers',
      'Edited High-Res Images (500+)',
      '5-7 Minute Cinematic Highlight',
      'Full Wedding Film (45-60 Mins)',
      'Signature Photo Album (20 Pages)',
      'Drone Coverage (Where permitted)'
    ]
  },
  {
    id: 'pkg3',
    name: 'Premium Legacy',
    price: 'Elite Experience',
    features: [
      'Multi-Day Coverage (2 Days)',
      'Senior Team: 3 Photo + 3 Cinema',
      'Unlimited Edited Images',
      'Same-Day Edit (Reel/Teaser)',
      'Feature Film (Documentary Style)',
      '2 Premium Leather Albums',
      'Pre-wedding Shoot Included',
      'Raw Footage on Hard Drive'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Sita & Ram",
    role: "Couple",
    location: "Kathmandu",
    text: "Ritiriwaz didn't just take photos; they captured the soul of our wedding. Watching the film brings tears to our eyes every single time. The team was respectful and invisible yet present everywhere."
  },
  {
    id: 't2',
    name: "Aakash & Priya",
    role: "Couple",
    location: "Pokhara",
    text: "The royal color grading is exactly what we wanted. It feels like a Bollywood movie. Professional, on time, and the delivery was faster than expected."
  },
  {
    id: 't3',
    name: "Rohan K.",
    role: "Groom",
    location: "Lalitpur",
    text: "Working with the team was a breeze. They understood the rituals and knew exactly when the important moments would happen. Highly recommended!"
  }
];

export const FAQS = [
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking at least 3-6 months in advance, especially for dates during the peak wedding season (Mangsir-Magh)."
  },
  {
    question: "Do you travel outside Kathmandu?",
    answer: "Yes, we love destination weddings! Travel and accommodation costs are applicable for locations outside the Kathmandu Valley."
  },
  {
    question: "What is your delivery timeline?",
    answer: "For photos, we deliver a sneak peek within 1 week and the full gallery within 4-6 weeks. Films typically take 8-10 weeks for perfection."
  },
  {
    question: "Do you provide raw footage?",
    answer: "Raw footage is available as an add-on or included in our Premium Legacy package. We believe the magic is in the edit, but we understand if you want the archives."
  }
];