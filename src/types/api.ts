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

export interface SponsorApiItem {
  id: string;
  type: {
    title: string;
    color: string;
  };
  image: string;
  name?: string;
}

export interface SocialLinkApiItem {
  platform: string;
  href: string;
  icon?: string;
}

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

export interface VisitorInfoApiItem {
  id: string;
  icon?: string;
  title: string;
  description: string;
}

export interface AboutApiData {
  title: string;
  description: string;
  highlights?: { icon?: string; text: string }[];
}
