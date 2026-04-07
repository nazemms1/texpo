'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/src/lib/animations';
import styles from './MapSection.module.css';
import { getImageUrl } from '@/src/lib/helpers';
import { Skeleton } from '@/src/components/ui/Skeleton/Skeleton';

export function MapSection({ 
  title, 
  image, 
  loading 
}: { 
  title?: string | null; 
  image?: any; 
  loading?: boolean;
}) {
  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <Skeleton variant="card" height={380} width="100%" radius="32px" />
          <Skeleton variant="title" width="40%" mx="auto" mt="xl" />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.mapWrapper}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src={getImageUrl(image) || "/images/Map.svg"}
            alt={title || "Participating Countries Map"}
            className={styles.map}
          />
          <motion.h2
            className={styles.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {title || "PARTICIPATING COUNTRIES AT TEXPO LAND | 2ND EDITION"}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
