'use client';

import { motion } from 'framer-motion';
import styles from './ContactHeroCard.module.css';

export function ContactHeroCard() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <img
          src="/images/Container.svg"
          alt="Globe"
          className={styles.bgImage}
          aria-hidden="true"
        />
        
        <div className={styles.content}>
          <motion.div
            className={styles.titleBox}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.titleText}>TEXPO LAND</h2>
          </motion.div>

          <motion.p
            className={styles.location}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Damascus, Syria - Exhibition City
          </motion.p>
          
          <motion.p
            className={styles.date}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            17 JUNE - 20 JUNE 2026
          </motion.p>
          
          <motion.p
            className={styles.terms}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            *Terms &amp; Conditions apply
          </motion.p>
        </div>
      </div>
    </section>
  );
}
