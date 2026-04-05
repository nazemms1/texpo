import type {
  BenefitCellValue,
  CompareBenefitsDataset,
  TierId,
} from "./compareBenefitsTypes";

export const BENEFIT_PROPERTY_ORDER = [
  "sponsorCategory",
  "logoPlacement",
  "exhibitionBooth",
  "podcastSponsorship",
  "openingSpeech",
  "workshopSpace",
  "mediaCoverage",
  "vipPasses",
  "visitorDatabaseAccess",
  "speakingOpportunity",
] as const;

export type BenefitPropertyId = (typeof BENEFIT_PROPERTY_ORDER)[number];

export const BENEFIT_PROPERTY_LABELS = {
  sponsorCategory: "Sponsor category",
  logoPlacement: "Logo placement",
  exhibitionBooth: "Exhibition booth",
  podcastSponsorship: "Podcast sponsorship",
  openingSpeech: "Opening speech",
  workshopSpace: "Workshop space",
  mediaCoverage: "Media coverage",
  vipPasses: "VIP passes",
  visitorDatabaseAccess: "Visitor database access",
  speakingOpportunity: "Speaking opportunity",
} satisfies Record<BenefitPropertyId, string>;

type TierColumn = Partial<Record<BenefitPropertyId, BenefitCellValue>>;

export const compareBenefitsByTier: Record<TierId, TierColumn> = {
  Silver: {
    sponsorCategory: "Supporting",
    logoPlacement: true,
    exhibitionBooth: "16 m²",
    podcastSponsorship: false,
    openingSpeech: false,
    workshopSpace: false,
    mediaCoverage: "Digital",
    vipPasses: "2",
    visitorDatabaseAccess: false,
    speakingOpportunity: false,
  },
  Gold: {
    sponsorCategory: "Official",
    logoPlacement: true,
    exhibitionBooth: "32 m²",
    podcastSponsorship: false,
    openingSpeech: false,
    workshopSpace: false,
    mediaCoverage: "Digital + Print",
    vipPasses: "5",
    visitorDatabaseAccess: false,
    speakingOpportunity: false,
  },
  Platinum: {
    sponsorCategory: "Strategic",
    logoPlacement: true,
    exhibitionBooth: "64 m²",
    podcastSponsorship: true,
    openingSpeech: false,
    workshopSpace: true,
    mediaCoverage: "Full media",
    vipPasses: "10",
    visitorDatabaseAccess: true,
    speakingOpportunity: true,
  },
  Diamond: {
    sponsorCategory: "Main",
    logoPlacement: true,
    exhibitionBooth: "96 m² Prime",
    podcastSponsorship: true,
    openingSpeech: true,
    workshopSpace: true,
    mediaCoverage: "Exclusive press",
    vipPasses: "25 (Unlimited)",
    visitorDatabaseAccess: true,
    speakingOpportunity: true,
  },
};

export const compareBenefitsDefaultDataset: CompareBenefitsDataset<BenefitPropertyId> =
  {
    propertyOrder: BENEFIT_PROPERTY_ORDER,
    labels: BENEFIT_PROPERTY_LABELS,
    byTier: compareBenefitsByTier,
  };
