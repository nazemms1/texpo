'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/src/lib/animations';
import styles from './MapSection.module.css';
import { getImageUrl } from '@/src/lib/helpers';


export function MapSection({ 
  title, 
  image, 
  loading 
}: { 
  title?: string | null; 
  image?: any; 
  loading?: boolean;
}) {
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
            {title || "  COUNTRIES AT TEXPO LAND | 2ND EDITION"}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
