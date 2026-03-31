'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/src/lib/animations';
import { SectionTitle } from '@/src/components/ui/SectionTitle/SectionTitle';
import styles from './CountriesSection.module.css';

const countries = [
  'United States', 'United Kingdom', 'Germany', 'Japan', 'South Korea',
  'France', 'Canada', 'Australia', 'UAE', 'Singapore',
  'Netherlands', 'Sweden', 'Switzerland', 'Brazil', 'India',
  'China', 'Italy', 'Spain', 'Israel', 'Saudi Arabia',
];

export function CountriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Global Presence"
          title="PARTICIPATING COUNTRIES"
          subtitle={`Over 80 countries represented — bringing the world to one stage.`}
          align="center"
          light
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {countries.map((country) => (
            <motion.div key={country} className={styles.chip} variants={fadeInUp}>
              <span className={styles.flag}>🌐</span>
              <span>{country}</span>
            </motion.div>
          ))}
          <motion.div className={styles.chip + ' ' + styles.more} variants={fadeInUp}>
            <span>+60 more</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
