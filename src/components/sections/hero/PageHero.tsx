'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  titleAccent?: string;
}

export function PageHero({ title, titleAccent }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <img
        src="/images/Hero-section-page.svg"
        alt=""
        className={styles.bgImage}
        aria-hidden="true"
      />
      <img
        src="/images/Overlay.svg"
        alt=""
        className={styles.overlay}
        aria-hidden="true"
      />
      <img
        src="/images/lines.png"
        alt=""
        className={styles.linesBg}
        aria-hidden="true"
      />
      <motion.div
        className={styles.content}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.title} variants={fadeInUp}>
          <span className={styles.titlePrimary}>{title}</span>
          {titleAccent && (
            <span className={styles.titleAccent}> {titleAccent}</span>
          )}
        </motion.h1>
      </motion.div>
    </section>
  );
}
