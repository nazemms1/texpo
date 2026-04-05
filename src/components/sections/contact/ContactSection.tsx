'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/src/lib/animations';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { TwoPanelFormSection } from '@/src/components/sections/shared/TwoPanelFormSection';

const contactInfo = [
  {
    Icon: IconMail,
    label: 'Email Us',
    value: 'info@texpo-exhibition.com'
  },
  {
    Icon: IconPhone,
    label: 'Call Us',
    value: '0949333200'
  },
  {
    Icon: IconMapPin,
    label: 'Office',
    value: 'Damascus, Syria - Exhibition City'
  },
];

export function ContactSection() {
  return ( 
    <TwoPanelFormSection
      title="CONTACT US"
      subtitle="Submit your interest and our partnership team will contact you with a tailored sponsorship proposal within 24 hours."
      contactItems={contactInfo}
      terms={[
        'By registering for TEXPO Land, you consent to the collection and processing of your personal data for the purpose of facilitating your participation in the event. Your information may also be used to send event-related updates and notifications, as well as to share relevant news, offers, and marketing communications from the exhibition and its official partners, in accordance with your selected preferences.',
        'I confirm that I am 21 years of age or older, and that I have read and agreed to the Terms and Conditions and the Privacy Policy. I understand that my personal data will be processed in accordance with the Privacy Policy and, where necessary, shared with contracted service providers, exhibitors, sponsors, and partners for the purpose of delivering event services, facilitating my participation, and managing follow-ups or communications related to this event.',
      ]}
      renderFormFields={(styles) => (
        <>
          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Full Name</span>
              <input className={styles.input} type="text" placeholder="John Doe" />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Company Name</span>
              <input className={styles.input} type="text" placeholder="Tech Global Inc." required />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Business Sector</span>
              <input className={styles.input} type="text" placeholder="AI & Robotics" required />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Country / City</span>
              <input className={styles.input} type="text" placeholder="London, UK" />
            </motion.label>
          </div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>Address</span>
            <input className={styles.input} type="text" placeholder="Address" />
          </motion.label>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Phone Number</span>
              <input className={styles.input} type="tel" placeholder="+1 234 567 890" required />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Email Address</span>
              <input className={styles.input} type="email" placeholder="john@company.com" required />
            </motion.label>
          </div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>Message</span>
            <textarea className={`${styles.input} ${styles.textarea}`} rows={4} placeholder="How can we help your brand excel at TEXPO LAND?" />
          </motion.label>
        </>
      )}
    />
  );
}
