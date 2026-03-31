'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.gradient} />
      </div>
      <motion.div
        className={styles.content}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.title} variants={fadeInUp}>
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p className={styles.subtitle} variants={fadeInUp}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
