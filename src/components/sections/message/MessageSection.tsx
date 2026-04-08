'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';
import { SectionTitle } from '@/src/components/ui/SectionTitle/SectionTitle';
import styles from './MessageSection.module.css';

const messages = [
  {
    role: 'Chairman',
    name: 'Placeholder Name',
    message:
      'TEXPO represents a bold step forward in our collective mission to accelerate technological advancement. This exhibition is more than a gathering — it is a catalyst for the ideas and partnerships that will shape the next decade.',
  },
  {
    role: 'CEO',
    name: 'Placeholder Name',
    message:
      'We built TEXPO to bridge the gap between innovation and application. Every exhibitor, every visitor, and every conversation that happens here has the potential to spark a breakthrough that changes lives.',
  },
];

export function MessageSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Leadership"
          title="A MESSAGE FROM OUR LEADERS"
          subtitle="Hear directly from the people who are driving TEXPO's vision forward."
          align="center"
          light
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          {messages.map((m) => (
            <motion.div key={m.role} className={styles.card} variants={fadeInUp}>
              <div className={styles.avatar} />
              <blockquote className={styles.quote}>&ldquo;{m.message}&rdquo;</blockquote>
              <div className={styles.meta}>
                <span className={styles.name}>{m.name}</span>
                <span className={styles.role}>{m.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
