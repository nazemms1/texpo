'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';
import { SponsorTierCard } from './SponsorTierCard';
import { SPONSORSHIP_TIER_CARDS } from './sponsorshipTiersData';

import styles from './SponsorshipTiersSection.module.css';

export interface SponsorshipTiersSectionProps {
  id?: string;
  enquiryAnchor?: string;
}

export function SponsorshipTiersSection({
  id,
  enquiryAnchor = '#sponsor-enquiry',
}: SponsorshipTiersSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.gridWrap}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2
            className={`${styles.title} ${styles.spanAll}`}
            variants={fadeInUp}
          >
            YOUR SPACE TO MAKE YOUR BRAND&apos;S MARK
          </motion.h2>
          <motion.p
            className={`${styles.subtitle} ${styles.spanAll}`}
            variants={fadeInUp}
          >
            Join the elite sponsors at the most prominent exhibition for
            technology and innovation, and elevate your presence in front of
            investors, decision-makers, and entrepreneurs.
          </motion.p>

          {SPONSORSHIP_TIER_CARDS.map((tier) => (
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
