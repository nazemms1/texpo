'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';
import { SponsorTierCard } from './SponsorTierCard';
import {
  SPONSORSHIP_TIER_ICON_SRC,
  type SponsorTierDefinition,
  type SponsorTierVariant,
} from './sponsorshipTiersData';

import styles from './SponsorshipTiersSection.module.css';

interface ApiTierItem {
  id: number;
  name: string;
  color: string;
  items: string[];
}

export interface SponsorshipTiersSectionProps {
  id?: string;
  enquiryAnchor?: string;
  apiItems?: ApiTierItem[];
  title?: string | null;
  description?: string | null;
}

const VALID_VARIANTS: SponsorTierVariant[] = ['silver', 'gold', 'platinum', 'diamond'];

function apiItemToTierDefinition(item: ApiTierItem): SponsorTierDefinition | null {
  const variant = item.name.toLowerCase() as SponsorTierVariant;
  if (!VALID_VARIANTS.includes(variant)) return null;
  return {
    variant,
    title: item.name.toUpperCase(),
    features: item.items.length > 0 ? item.items : undefined,
    ctaLabel: variant === 'diamond' ? 'Secure sponsorship' : 'Select tier',
    badge: variant === 'diamond' ? 'EXCLUSIVE' : undefined,
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
  if (!apiItems || apiItems.length === 0) return null;

  const tiers = [...apiItems]
    .reverse()
    .map(apiItemToTierDefinition)
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
