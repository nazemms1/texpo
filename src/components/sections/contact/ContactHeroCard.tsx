'use client';

import { motion } from 'framer-motion';
import styles from './ContactHeroCard.module.css';

export function ContactHeroCard({ image }: { image?: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <img
          src={image || "/images/Container.svg"}
          alt="Globe"
          className={styles.bgImage}
          aria-hidden="true"
        />
        
     
      </div>
    </section>
  );
}
