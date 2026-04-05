import type { NavItem, StatItem } from "@/src/types";

export const NAV_ITEMS: NavItem[] = [
  { key: "home", path: "" },
  { key: "about", path: "/about" },
  { key: "contact", path: "/contact" },
  // { key: "sponsor", path: "/become-a-sponsor" },
  { key: "visitors", path: "/visitors" },
  { key: "texpo2025", path: "/texpo-2025" },
  { key: "bookStand", path: "/book-a-stand" },
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
 
