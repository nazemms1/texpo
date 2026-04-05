'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '@/src/lib/animations';
import { SectionTitle } from '@/src/components/ui/SectionTitle/SectionTitle';
import { IconCalendar, IconMapPin, IconUsers, IconStar } from '@tabler/icons-react';
import styles from './Texpo2025Section.module.css';

const highlights = [
  { Icon: IconCalendar, label: 'Dates', value: 'TBA — 2025' },
  { Icon: IconMapPin, label: 'Venue', value: 'Exhibition City, Placeholder' },
  { Icon: IconUsers, label: 'Expected Visitors', value: '200,000+' },
  { Icon: IconStar, label: 'Featured Exhibitors', value: '500+' },
];

const themes = [
  'Artificial Intelligence & Machine Learning',
  'Sustainable Energy & Clean Tech',
  'Space Exploration & Aerospace',
  'Biotechnology & Healthcare',
  'Quantum Computing',
  'Advanced Robotics & Automation',
  'Smart Cities & Infrastructure',
  'Cybersecurity & Digital Privacy',
];

export function Texpo2025Section() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
   
        <SectionTitle
          label="Edition Highlights"
          title="TEXPO 2025 AT A GLANCE"
          align="center"
          light
        />

        <motion.div
          className={styles.highlights}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {highlights.map(({ Icon, label, value }) => (
            <motion.div key={label} className={styles.highlightCard} variants={scaleIn}>
              <Icon size={28} className={styles.highlightIcon} />
              <span className={styles.highlightValue}>{value}</span>
              <span className={styles.highlightLabel}>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.themesBlock}>
          <SectionTitle
            label="Focus Areas"
            title="EXHIBITION THEMES"
            subtitle="TEXPO 2025 will spotlight the technologies and industries driving the next era of human progress."
            align="center"
            light
          />

          <motion.div
            className={styles.themes}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {themes.map((theme) => (
              <motion.div key={theme} className={styles.themeChip} variants={fadeInUp}>
                {theme}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
