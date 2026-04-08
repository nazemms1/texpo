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

import { getImageUrl } from '@/src/lib/helpers';
import { Skeleton } from "@/src/components/ui/Skeleton/Skeleton";

export function TargetAudienceSection({ 
  title, 
  description, 
  items,
  loading
}: { 
  title?: string; 
  description?: string; 
  items?: { title: string; image: any }[];
  loading?: boolean;
}) {
  if (loading && (!items || items.length === 0)) return null;

  if (!items || items.length === 0) return null;

  const gradient1 = 'linear-gradient(135deg, rgba(50, 85, 141, 0.6) 0%, rgba(13, 14, 18, 0.9) 100%)';
  const gradient2 = 'linear-gradient(135deg, rgba(66, 190, 179, 0.6) 0%, rgba(13, 14, 18, 0.9) 100%)';

  const displayTitle = title || '';
  const displaySubtitle = description || '';

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className={styles.title}>
            {displayTitle}
          </h2>
          <p className={styles.subtitle}>
            {displaySubtitle}
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {items.map(({ title: label, image }, index) => {
            const itemImageUrl = getImageUrl(image);
            const overlay = index % 2 === 0 ? gradient1 : gradient2;
            const bg = itemImageUrl 
              ? `${overlay}, url(${itemImageUrl})`
              : overlay;

            return (
              <motion.div
                key={`${label}-${index}`}
                className={styles.card}
                variants={fadeInUp}
                style={{ 
                  background: bg,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
              }}
              >
                <span className={styles.cardLabel}>{label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
