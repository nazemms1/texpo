export type SponsorTierVariant = 'silver' | 'gold' | 'platinum' | 'diamond';

export const SPONSORSHIP_TIER_ICON_SRC: Record<SponsorTierVariant, string> = {
  silver: '/images/sponsorship/silverIcon.svg',
  gold: '/images/sponsorship/GoldIcon.svg',
  platinum: '/images/sponsorship/platinumIcon.svg',
  diamond: '/images/sponsorship/DiamondIcon.svg',
};

export type SponsorTierDefinition = {
  variant: SponsorTierVariant;
  title: string;
  subtitle?: string;
  features?: readonly string[];
  ctaLabel: string;
  badge?: string;
  iconSrc: string;
};

export const SPONSORSHIP_TIER_CARDS: readonly SponsorTierDefinition[] = [
  {
    variant: 'silver',
    title: 'SILVER',
    subtitle: 'Supporting Sponsor',
    features: [
      '8–12 sponsors',
      '16 m² booth',
      'Standard logo placement',
    ],
    ctaLabel: 'Select tier',
    iconSrc: SPONSORSHIP_TIER_ICON_SRC.silver,
  },
  {
    variant: 'gold',
    title: 'GOLD',
    subtitle: 'Official Sponsor',
    features: [
      '4–6 sponsors',
      '32 m² booth',
      'Mid-tier media exposure',
    ],
    ctaLabel: 'Select tier',
    iconSrc: SPONSORSHIP_TIER_ICON_SRC.gold,
  },
  {
    variant: 'platinum',
    title: 'PLATINUM',
    subtitle: 'Strategic Sponsor',
    features: [
      '2–3 sponsors',
      '64 m² booth',
      'Speaking opportunities',
    ],
    ctaLabel: 'Select tier',
    iconSrc: SPONSORSHIP_TIER_ICON_SRC.platinum,
  },
  {
    variant: 'diamond',
    title: 'DIAMOND',
    subtitle: 'Main Sponsor',
    features: [
      'Exclusive 1 sponsor',
      '96 m² prime location',
      'All premium media access',
    ],
    ctaLabel: 'Secure sponsorship',
    badge: 'EXCLUSIVE',
    iconSrc: SPONSORSHIP_TIER_ICON_SRC.diamond,
  },
];
