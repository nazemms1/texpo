'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '@/src/lib/animations';
import { SectionTitle } from '@/src/components/ui/SectionTitle/SectionTitle';
import { IconCalendar, IconMapPin, IconUsers, IconStar } from '@tabler/icons-react';
import styles from './Texpo2025Section.module.css';
import { useApi } from '@/src/hooks/useApi';
import { texpoPageService } from '@/src/lib/api';

const DEFAULT_HIGHLIGHTS = [
  { Icon: IconCalendar, label: 'Dates', value: 'TBA — 2025' },
  { Icon: IconMapPin, label: 'Venue', value: 'Exhibition City, Placeholder' },
  { Icon: IconUsers, label: 'Expected Visitors', value: '200,000+' },
  { Icon: IconStar, label: 'Featured Exhibitors', value: '500+' },
];

const DEFAULT_THEMES = [
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
  const { data } = useApi(() => texpoPageService.getTexpoPageData());

  const icons = [IconCalendar, IconMapPin, IconUsers, IconStar];
  const highlights = data?.statistics?.length
    ? data.statistics.map((s, i) => ({
        Icon: icons[i % icons.length],
        label: s.key,
        value: s.value,
      }))
    : DEFAULT_HIGHLIGHTS;

  const themes = data?.items?.length 
    ? data.items.map(item => (typeof item === 'string' ? item : item.title))
    : DEFAULT_THEMES;
  const title = data?.title || 'TEXPO 2025 AT A GLANCE';
  const description = data?.description || 'TEXPO 2025 will spotlight the technologies and industries driving the next era of human progress.';

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
   
        <SectionTitle
          label="Edition Highlights"
          title={title}
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
            subtitle={description}
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
            {themes.map((theme, i) => (
              <motion.div key={`${theme}-${i}`} className={styles.themeChip} variants={fadeInUp}>
                {theme}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
