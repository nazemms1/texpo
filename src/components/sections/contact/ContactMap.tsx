'use client';

import { motion } from 'framer-motion';
import styles from './ContactMap.module.css';

export function ContactMap() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.mapWrap}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          title="Exhibition City Location"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.openstreetmap.org/export/embed.html?bbox=36.402%2C33.393%2C36.446%2C33.419&amp;layer=cyclemap&amp;marker=33.4069%2C36.4246"
        ></iframe>
      </motion.div>
    </section>
  );
}
