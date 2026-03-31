'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/src/lib/animations';
import { SectionTitle } from '@/src/components/ui/SectionTitle/SectionTitle';
import { IconBriefcase, IconMicroscope, IconTrendingUp, IconSchool } from '@tabler/icons-react';
import styles from './VisitorInfoSection.module.css';

const profiles = [
  {
    Icon: IconBriefcase,
    title: 'Industry Leaders',
    body: 'C-suite executives and decision-makers scouting the next wave of disruptive technologies.',
  },
  {
    Icon: IconMicroscope,
    title: 'Researchers & Scientists',
    body: 'Academic and corporate researchers presenting and discovering breakthrough findings.',
  },
  {
    Icon: IconTrendingUp,
    title: 'Investors & VCs',
    body: 'Venture capitalists and angel investors identifying the most promising emerging startups.',
  },
  {
    Icon: IconSchool,
    title: 'Students & Graduates',
    body: 'The next generation of innovators gaining exposure to the technologies shaping their careers.',
  },
];

export function VisitorInfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Who Attends"
          title="OUR VISITOR PROFILES"
          subtitle="TEXPO attracts a diverse audience united by a passion for technology and innovation."
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
          {profiles.map(({ Icon, title, body }) => (
            <motion.div key={title} className={styles.card} variants={fadeInUp}>
              <div className={styles.iconWrap}>
                <Icon size={28} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
