'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/src/lib/animations';
import { SectionTitle } from '@/src/components/ui/SectionTitle/SectionTitle';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import styles from './ContactSection.module.css';

const contactItems = [
  { Icon: IconMail, label: 'Email', value: 'info@texpo.example.com' },
  { Icon: IconPhone, label: 'Phone', value: '+1 (555) 000-0000' },
  { Icon: IconMapPin, label: 'Address', value: 'Exhibition City, Country' },
];

export function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Info */}
        <motion.div
          className={styles.info}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            label="Get In Touch"
            title="WE&apos;D LOVE TO HEAR FROM YOU"
            light
          />

          <div className={styles.contactList}>
            {contactItems.map(({ Icon, label, value }) => (
              <div key={label} className={styles.contactItem}>
                <div className={styles.iconWrap}>
                  <Icon size={20} />
                </div>
                <div>
                  <span className={styles.contactLabel}>{label}</span>
                  <span className={styles.contactValue}>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className={styles.formWrap}
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <form className={styles.form}>
            <motion.div
              className={styles.formFields}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>First Name</span>
                  <input className={styles.input} type="text" placeholder="John" />
                </label>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Last Name</span>
                  <input className={styles.input} type="text" placeholder="Doe" />
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Email</span>
                <input className={styles.input} type="email" placeholder="john@example.com" />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Subject</span>
                <input className={styles.input} type="text" placeholder="How can we help?" />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Message</span>
                <textarea className={`${styles.input} ${styles.textarea}`} rows={5} placeholder="Your message..." />
              </label>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
