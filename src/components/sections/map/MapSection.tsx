'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '@/src/lib/animations';
import styles from './MapSection.module.css';

export function MapSection() {
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
          <Image
            src="/images/Map.svg"
            alt="Participating Countries Map"
            width={1200}
            height={600}
            className={styles.map}
            priority
          />
          <motion.h2
            className={styles.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            PARTICIPATING COUNTRIES AT TEXPO LAND | 2ND EDITION
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
