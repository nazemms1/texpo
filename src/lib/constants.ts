import type { NavItem, StatItem } from "@/src/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Our Visitors", href: "/visitors" },
  { label: "Texpo 2025", href: "/texpo-2025" },
];

export const STATS: StatItem[] = [
  { value: "200+", label: "Lorem Ipsum" },
  { value: "180+", label: "Lorem Ipsum Dolor Sit" },
  { value: "40%", label: "Lorem Ipsum Dolor Sit" },
  { value: "40%", label: "Lorem Ipsum Dolor Sit" },
  { value: "40%", label: "Lorem Ipsum Dolor Sit" },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
];
