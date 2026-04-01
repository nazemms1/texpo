'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/src/lib/animations';
import styles from './TargetAudienceSection.module.css';
import image1 from '@/src/assets/images/image1.png';
import image2 from '@/src/assets/images/image2.png';

const audiences = [
  { label: 'Investors and Venture Capital Funds' },
  { label: 'AI-Powered Learning & Interactive Solutions' },
  { label: 'Collaboration & Virtual Communication Tools' },
  { label: 'Consulting & Advisory Firms' },
  { label: 'Development Agencies & Foundations' },
  { label: 'Governments' },
  { label: 'Learning, Assessment & Accreditation Platforms' },
  { label: 'Universities & Research Institutes' },
  { label: 'Tech Startups & Entrepreneurs' },
  { label: 'Healthcare & MedTech Companies' },
  { label: 'Telecommunications Providers' },
  { label: 'Smart Cities & Infrastructure' },
];

export function TargetAudienceSection() {
   const bgType1 = `linear-gradient(135deg, rgba(50, 85, 141, 0.8) 0%, rgba(13, 14, 18, 0.95) 100%), url(${image1.src})`;
  const bgType2 = `linear-gradient(135deg, rgba(66, 190, 179, 0.8) 0%, rgba(13, 14, 18, 0.95) 100%), url(${image2.src})`;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className={styles.title}>
            TARGET AUDIENCE FOR VISITING TEXPO LAND | 2ND EDITION
          </h2>
          <p className={styles.subtitle}>
            The exhibition targets a wide range of visitors, including decision-makers, investors, entrepreneurs, technology and innovation professionals, government and academic entities, as well as those interested in technology and innovation from various sectors. This helps foster knowledge exchange, build partnerships, and enhance optimal value for all parties.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {audiences.map(({ label }, index) => (
            <motion.div
              key={label}
              className={styles.card}
              variants={fadeInUp}
              style={{ 
                background: index % 2 === 0 ? bgType1 : bgType2,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span className={styles.cardLabel}>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
