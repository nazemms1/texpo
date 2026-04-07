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
  full_name: string;
  company_name: string;
  business_sector: string;
  country_city: string;
  address: string;
  phone_number: string;
  email: string;
  message: string;
}

export interface BookStandPayload {
  first_name: string;
  last_name: string;
  job_title: string;
  company_name: string;
  company_website: string;
  work_email: string;
  phone: string;
  country_of_residence: string;
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

export interface PublicDataItem {
  key: string;
  name: string;
  value: string | null;
}

export interface TexpoPageData {
  statistics: { key: string; value: string }[];
  title: string;
  description: string;
  image: string;
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface ContactUsApiData {
  data: {
    lan: string | null;
    lag: string | null;
    image: string;
  };
  formData: {
    title: string;
    subtitle: string;
    email: string | null;
    phone: string | null;
    address: string;
    description: string;
  };
}

export interface VisitorsPageData {
  title: string;
  description: string;
  items: {
    title: string;
    image: string;
  }[];
}

export interface AboutUsSectionItem {
  key: string;
  title: string;
  description: string;
  image: string;
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface HomeSectionData {
  key: string;
  title: string | null;
  description: string | null;
  media: any | null;
  'meta-data'?: any;
}

export type HomeResponse = HomeSectionData[];
export type AboutUsApiData = AboutUsSectionItem[];
