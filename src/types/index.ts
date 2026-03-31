export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SponsorItem {
  name: string;
  tier: 'platinum' | 'gold' | 'silver';
}

export interface CountryItem {
  name: string;
  flag: string;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}
