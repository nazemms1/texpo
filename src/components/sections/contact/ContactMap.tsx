'use client';

import { motion } from 'framer-motion';
import { Skeleton } from "@/src/components/ui/Skeleton/Skeleton";
import styles from './ContactMap.module.css';

export function ContactMap({ lan, lag, loading }: { lan?: string | null; lag?: string | null; loading?: boolean }) {


  const latitude = lan || "33.4069";
  const longitude = lag || "36.4246";
  const bbox = `${parseFloat(longitude) - 0.02}%2C${parseFloat(latitude) - 0.01}%2C${parseFloat(longitude) + 0.02}%2C${parseFloat(latitude) + 0.01}`;

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.mapWrap}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
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
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=transportmap&amp;marker=${latitude}%2C${longitude}`}
        ></iframe>
      </motion.div>
    </section>
  );
}