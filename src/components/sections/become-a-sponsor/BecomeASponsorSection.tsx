"use client";

import { motion } from "framer-motion";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { fadeInUp } from "@/src/lib/animations";
import { TwoPanelFormSection } from "@/src/components/sections/shared/TwoPanelFormSection";

const sponsorContactInfo = [
  {
    Icon: IconMail,
    label: "Email Us",
    value: "info@texpo-exhibition.com",
  },
  {
    Icon: IconPhone,
    label: "Call Us",
    value: "0949333200",
  },
  {
    Icon: IconMapPin,
    label: "Office",
    value: "Damascus, Syria - Exhibition City",
  },
];

export function BecomeASponsorSection() {
  return (
    <TwoPanelFormSection
      id="sponsor-enquiry"
      title="BECOME A SPONSOR"
      subtitle="Submit your interest and our partnership team will contact you with a tailored sponsorship proposal within 24 hours."
      contactItems={sponsorContactInfo}
      terms={[
        "By submitting this form, you consent to the collection and processing of your personal data for the purpose of handling your sponsorship enquiry and follow-up communication.",
        "Your information may be shared with contracted service providers and official partners only when needed to deliver event services and coordinate sponsorship packages.",
      ]}
      renderFormFields={(styles) => (
        <>
          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Full Name</span>
              <input
                className={styles.input}
                type="text"
                placeholder="John Doe"
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Company Name</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Tech Global Inc."
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Business Sector</span>
              <input
                className={styles.input}
                type="text"
                placeholder="AI &amp; Robotics"
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Country / City</span>
              <input
                className={styles.input}
                type="text"
                placeholder="London, UK"
              />
            </motion.label>
          </div>
          <div className={styles.row}>
            <motion.label
              className={styles.field}
              variants={fadeInUp}
              style={{ gridColumn: "1 / -1" }}
            >
              <span className={styles.fieldLabel}>Sponsorship Categories</span>
              <span className={styles.selectWrap}>
                <select className={`${styles.input} ${styles.selectField}`} defaultValue="">
                  <option value="" disabled>
                    Diamond (Main Sponsor)
                  </option>
                  <option value="platinum">Platinum</option>
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                  <option value="other">Other / Custom</option>
                </select>
              </span>
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Phone Number</span>
              <input
                className={styles.input}
                type="tel"
                placeholder="+1 234 567 890"
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Email Address</span>
              <input
                className={styles.input}
                type="email"
                placeholder="john@company.com"
              />
            </motion.label>
          </div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>Message</span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              rows={4}
              placeholder="Tell us what you want to achieve as a sponsor at TEXPO LAND."
            />
          </motion.label>
        </>
      )}
    />
  );
}
