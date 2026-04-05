'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight } from '@/src/lib/animations';
import { SectionTitle } from '@/src/components/ui/SectionTitle/SectionTitle';
import { IconRocket, IconGlobe, IconBulb, IconUsers } from '@tabler/icons-react';
import styles from './VisionSection.module.css';

const pillars = [
  {
    Icon: IconRocket,
    title: 'Innovation',
    body: 'Showcasing breakthrough technologies that push the boundaries of what is possible.',
  },
  {
    Icon: IconGlobe,
    title: 'Global Reach',
    body: 'Connecting innovators and investors from every corner of the world.',
  },
  {
    Icon: IconBulb,
    title: 'Knowledge',
    body: 'Hosting world-class conferences, workshops, and knowledge-sharing sessions.',
  },
  {
    Icon: IconUsers,
    title: 'Community',
    body: 'Building a lasting ecosystem of collaboration, mentorship, and shared growth.',
  },
];

export function VisionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <SectionTitle
            label="Our Purpose"
            title="OUR VISION &amp; MISSION"
            subtitle="We envision a world where technology is a universal force for progress, accessible to every nation and every community."
            light
          />
        </motion.div>

        <motion.div
          className={styles.right}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {pillars.map(({ Icon, title, body }) => (
            <motion.div key={title} className={styles.pillar} variants={fadeInRight}>
              <div className={styles.iconWrap}>
                <Icon size={24} />
              </div>
              <div>
                <h3 className={styles.pillarTitle}>{title}</h3>
                <p className={styles.pillarBody}>{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
