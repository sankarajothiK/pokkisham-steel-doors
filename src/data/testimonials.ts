export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    name: "Rajesh Kumar",
    location: "Adyar, Chennai",
    rating: 5,
    text: "Absolutely stunning doors! I installed the Teak Wood-Finish Steel Door for my new apartment main entrance. You cannot tell it is steel until you knock on it. The security is incredibly reassuring, especially the 12-point lock. Excellent installation service by Pokkisham team.",
    date: "June 20, 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "review-2",
    name: "Dr. Shalini Ramanathan",
    location: "Anna Nagar, Chennai",
    rating: 5,
    text: "We wanted a modern door for our villa and chose the Luxera glass-embedded door. It looks extremely luxurious and premium. The sound insulation is a blessing as we are close to the main road. The mouse hover glow and interactive elements on their showroom preview matched exactly with the final installed piece.",
    date: "July 2, 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "review-3",
    name: "Karthikeyan Swaminathan",
    location: "Ambattur, Chennai",
    rating: 5,
    text: "Being close to the Ambattur industrial zone, security was our top concern. We replaced our old wood door with Pokkisham Entrance Door. Excellent product, extremely solid structure, rust-resistant, and professional installation done in under 3 hours. Best decision we made.",
    date: "June 12, 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "review-4",
    name: "Ananya Deshmukh",
    location: "ECR Road, Chennai",
    rating: 5,
    text: "Superb product quality. The climate along ECR is highly humid, causing our old teak door to expand and warp. This steel door is completely unaffected by salinity and dampness, and still has the gorgeous luxury wood texture. Highly recommended!",
    date: "May 29, 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];
