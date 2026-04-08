'use client';

import { motion } from 'framer-motion';
import { getImageUrl } from '@/src/lib/helpers';

import styles from './ContactHeroCard.module.css';

export function ContactHeroCard({ image, loading }: { image?: any; loading?: boolean }) {
  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.card}>

        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <img
          src={getImageUrl(image) || "/images/Container.svg"}
          alt="Globe"
          className={styles.bgImage}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
