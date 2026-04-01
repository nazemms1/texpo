'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/src/lib/animations';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import styles from './ContactSection.module.css';

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
    <section className={styles.section}>
      <div className={styles.inner}>
         <motion.div
          className={styles.infoPanel}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src="/logos/Logo-footers.svg" alt="TEXPO" className={styles.logo} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          
          <h2 className={styles.title}>CONTACT US</h2>
          <p className={styles.subtitle}>
            Submit your interest and our partnership team will contact you with a tailored sponsorship proposal within 24 hours.
          </p>

          <div className={styles.contactList}>
            {contactInfo.map(({ Icon, label, value }) => (
              <div key={label} className={styles.contactItem}>
                <div className={styles.iconWrap}>
                  <Icon size={20} stroke={1.5} className={styles.icon} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>{label}</span>
                  <span className={styles.contactValue}>{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.termsWrapper}>
            <p className={styles.termsText}>
              By registering for TEXPO Land, you consent to the collection and processing of your personal data for the purpose of facilitating your participation in the event. Your information may also be used to send event-related updates and notifications, as well as to share relevant news, offers, and marketing communications from the exhibition and its official partners, in accordance with your selected preferences.
            </p>
            <p className={styles.termsText}>
              I confirm that I am 21 years of age or older, and that I have read and agreed to the Terms and Conditions and the Privacy Policy. I understand that my personal data will be processed in accordance with the Privacy Policy and, where necessary, shared with contracted service providers, exhibitors, sponsors, and partners for the purpose of delivering event services, facilitating my participation, and managing follow-ups or communications related to this event.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.formPanel}
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <motion.div
              className={styles.formFields}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.row}>
                <motion.label className={styles.field} variants={fadeInUp}>
                  <span className={styles.fieldLabel}>Full Name</span>
                  <input className={styles.input} type="text" placeholder="John Doe" />
                </motion.label>
                <motion.label className={styles.field} variants={fadeInUp}>
                  <span className={styles.fieldLabel}>Company Name</span>
                  <input className={styles.input} type="text" placeholder="Tech Global Inc." />
                </motion.label>
              </div>

              <div className={styles.row}>
                <motion.label className={styles.field} variants={fadeInUp}>
                  <span className={styles.fieldLabel}>Business Sector</span>
                  <input className={styles.input} type="text" placeholder="AI &amp; Robotics" />
                </motion.label>
                <motion.label className={styles.field} variants={fadeInUp}>
                  <span className={styles.fieldLabel}>Country / City</span>
                  <input className={styles.input} type="text" placeholder="London, UK" />
                </motion.label>
              </div>

              <div className={styles.row}>
                <motion.label className={styles.field} variants={fadeInUp}>
                  <span className={styles.fieldLabel}>Booth Area</span>
                  <input className={styles.input} type="text" placeholder="Booth Area" />
                </motion.label>
                <motion.label className={styles.field} variants={fadeInUp}>
                  <span className={styles.fieldLabel}>Address</span>
                  <input className={styles.input} type="text" placeholder="Address" />
                </motion.label>
              </div>

              <div className={styles.row}>
                <motion.label className={styles.field} variants={fadeInUp}>
                  <span className={styles.fieldLabel}>Phone Number</span>
                  <input className={styles.input} type="tel" placeholder="+1 234 567 890" />
                </motion.label>
                <motion.label className={styles.field} variants={fadeInUp}>
                  <span className={styles.fieldLabel}>Email Address</span>
                  <input className={styles.input} type="email" placeholder="john@company.com" />
                </motion.label>
              </div>

              <motion.label className={styles.field} variants={fadeInUp}>
                <span className={styles.fieldLabel}>Message</span>
                <textarea className={`${styles.input} ${styles.textarea}`} rows={4} placeholder="How can we help your brand excel at TEXPO LAND?" />
              </motion.label>

              <motion.div variants={fadeInUp} style={{ marginTop: '0.5rem', width: '100%' }}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                >
                  Submit Request
                </button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
