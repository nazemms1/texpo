// ─── Generic wrappers ────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  status: number;
  fieldErrors?: Record<string, string>;
}

// ─── Home page ───────────────────────────────────────────────────────────────

export interface StatApiItem {
  value: string;
  label: string;
}

export interface HeroApiData {
  heading: string;
  subheading: string;
  description: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
}

// ─── Sponsors ────────────────────────────────────────────────────────────────

export interface SponsorApiItem {
  id: string;
  type: {
    title: string;
    color: string;
  };
  image: string;
  name?: string;
}

// ─── Social media ────────────────────────────────────────────────────────────

export interface SocialLinkApiItem {
  platform: string; // "facebook" | "instagram" | "linkedin" | "twitter" | ...
  href: string;
  icon?: string;    // optional override icon URL
}

// ─── Contact form ────────────────────────────────────────────────────────────

export interface ContactFormPayload {
  fullName: string;
  companyName: string;
  sector: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  message: string;
}

// ─── Book a Stand form ───────────────────────────────────────────────────────

export interface BookStandPayload {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  companyWebsite: string;
  email: string;
  phone: string;
  country: string;
  sector: string;
}

// ─── Become a Sponsor form ───────────────────────────────────────────────────

export interface BecomeSponsorPayload {
  fullName: string;
  companyName: string;
  sector: string;
  country: string;
  sponsorshipCategory: string;
  phone: string;
  email: string;
  message: string;
}

// ─── Visitors page ───────────────────────────────────────────────────────────

export interface VisitorInfoApiItem {
  id: string;
  icon?: string;
  title: string;
  description: string;
}

// ─── About page ──────────────────────────────────────────────────────────────

export interface AboutApiData {
  title: string;
  description: string;
  highlights?: { icon?: string; text: string }[];
}
