'use client';

import { motion } from 'framer-motion';
import { staggerContainer, scaleIn, fadeInUp } from '@/src/lib/animations';
import { SectionTitle } from '@/src/components/ui/SectionTitle/SectionTitle';
import styles from './SponsorsSection.module.css';

const tiers = [
  {
    tier: 'Platinum',
    sponsors: ['Sponsor Alpha', 'Sponsor Beta', 'Sponsor Gamma'],
  },
  {
    tier: 'Gold',
    sponsors: ['Sponsor Delta', 'Sponsor Epsilon', 'Sponsor Zeta', 'Sponsor Eta'],
  },
  {
    tier: 'Silver',
    sponsors: ['Sponsor Theta', 'Sponsor Iota', 'Sponsor Kappa', 'Sponsor Lambda', 'Sponsor Mu'],
  },
];

export function SponsorsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Partners"
          title="OUR SPONSORS"
          subtitle="World-leading organisations that power the TEXPO experience."
          align="center"
          light
        />

        <div className={styles.tiers}>
          {tiers.map(({ tier, sponsors }) => (
            <motion.div
              key={tier}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p className={styles.tierLabel} variants={fadeInUp}>
                {tier}
              </motion.p>
              <div className={`${styles.row} ${styles[tier.toLowerCase()]}`}>
                {sponsors.map((name) => (
                  <motion.div key={name} className={styles.logo} variants={scaleIn}>
                    <span className={styles.logoText}>{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
