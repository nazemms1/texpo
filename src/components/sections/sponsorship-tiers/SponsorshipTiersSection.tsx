'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';
import { SponsorTierCard } from './SponsorTierCard';
import {
  SPONSORSHIP_TIER_ICON_SRC,
  type SponsorTierDefinition,
  type SponsorTierVariant,
} from './sponsorshipTiersData';

import { useParams } from 'next/navigation';
import { sponsorshipTiersTranslations, type Lang } from '@/src/lib/i18n';
import styles from './SponsorshipTiersSection.module.css';

interface ApiTierItem {
  id: number;
  name: string;
  color: string;
  items: Array<{ item: string }> | string[];
}

export interface SponsorshipTiersSectionProps {
  id?: string;
  enquiryAnchor?: string;
  apiItems?: ApiTierItem[];
  title?: string | null;
  description?: string | null;
}

const VALID_VARIANTS: SponsorTierVariant[] = ['silver', 'gold', 'platinum', 'diamond'];

function apiItemToTierDefinition(item: ApiTierItem, lang: Lang): SponsorTierDefinition | null {
  const t = sponsorshipTiersTranslations[lang];
  const idMap: Record<number, SponsorTierVariant> = {
    1: 'diamond',
    2: 'platinum',
    3: 'gold',
    4: 'silver'
  };

  const variant = idMap[item.id] || (item.name.toLowerCase() as SponsorTierVariant);
  if (!VALID_VARIANTS.includes(variant)) return null;

  const features = item.items?.map((i: any) => 
    typeof i === 'string' ? i : i?.item
  ).filter(Boolean);

  return {
    variant,
    title: item.name,
    features: features && features.length > 0 ? features : undefined,
    ctaLabel: variant === 'diamond' ? t.secureSponsorship : t.selectTier,
    badge: variant === 'diamond' ? t.exclusive : undefined,
    iconSrc: SPONSORSHIP_TIER_ICON_SRC[variant],
  };
}

export function SponsorshipTiersSection({
  id,
  enquiryAnchor = '#sponsor-enquiry',
  apiItems,
  title,
  description,
}: SponsorshipTiersSectionProps) {
  const { lang } = useParams();
  const currentLang = (lang as Lang) || 'en';

  if (!apiItems || apiItems.length === 0) return null;

  const tiers = [...apiItems]
    .reverse()
    .map((item) => apiItemToTierDefinition(item, currentLang))
    .filter((t): t is SponsorTierDefinition => t !== null);

  if (tiers.length === 0) return null;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.gridWrap}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {title && (
            <motion.h2
              className={`${styles.title} ${styles.spanAll}`}
              variants={fadeInUp}
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p
              className={`${styles.subtitle} ${styles.spanAll}`}
              variants={fadeInUp}
            >
              {description}
            </motion.p>
          )}

          {tiers.map((tier) => (
            <motion.div
              key={tier.variant}
              className={styles.cardSlot}
              variants={fadeInUp}
            >
              <SponsorTierCard tier={tier} ctaHref={enquiryAnchor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
