'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/src/lib/animations';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { TwoPanelFormSection } from '@/src/components/sections/shared/TwoPanelFormSection';
import { useMutation } from '@/src/hooks/useMutation';
import { contactService } from '@/src/lib/api';
import type { ContactFormPayload, ContactUsApiData } from '@/src/types/api';

export function ContactSection({ formData, loading }: { formData?: ContactUsApiData['formData'], loading?: boolean }) {
  const contactInfo = [
    { Icon: IconMail,    label: 'Email Us', value: formData?.email || 'info@texpo-exhibition.com' },
    { Icon: IconPhone,   label: 'Call Us',  value: formData?.phone || '0949333200' },
    { Icon: IconMapPin,  label: 'Office',   value: formData?.address || 'Damascus, Syria - Exhibition City' },
  ];

  const { submit, loading: isSubmitting, error, success } = useMutation(contactService.submit);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    const fd = new FormData(e.currentTarget);
    const payload: ContactFormPayload = {
      full_name:       fd.get('fullName')    as string,
      company_name:    fd.get('companyName') as string,
      business_sector: fd.get('sector')      as string,
      country_city:    fd.get('country')     as string,
      address:         fd.get('address')     as string,
      phone_number:    fd.get('phone')       as string,
      email:           fd.get('email')       as string,
      message:         fd.get('message')     as string,
    };
    submit(payload);
  }
 
  return (
    <TwoPanelFormSection
      title={formData?.title || "CONTACT US"}
      subtitle={formData?.subtitle || "Submit your interest and our partnership team will contact you with a tailored sponsorship proposal within 24 hours."}
      description={formData?.description}
      contactItems={contactInfo}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      loading={loading}
      submitSuccess={success}
      submitError={error}
      terms={[
               ]}
      renderFormFields={(styles) => (
        <>
          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Full Name</span>
              <input name="fullName" className={styles.input} type="text" placeholder="John Doe" />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Company Name</span>
              <input name="companyName" className={styles.input} type="text" placeholder="Tech Global Inc." required />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Business Sector</span>
              <input name="sector" className={styles.input} type="text" placeholder="AI & Robotics" required />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Country / City</span>
              <input name="country" className={styles.input} type="text" placeholder="London, UK" />
            </motion.label>
          </div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>Address</span>
            <input name="address" className={styles.input} type="text" placeholder="Address" />
          </motion.label>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Phone Number</span>
              <input name="phone" className={styles.input} type="tel" placeholder="+1 234 567 890" required />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Email Address</span>
              <input name="email" className={styles.input} type="email" placeholder="john@company.com" required />
            </motion.label>
          </div>

          <motion.label className={styles.field} variants={fadeInUp}>
            <span className={styles.fieldLabel}>Message</span>
            <textarea name="message" className={`${styles.input} ${styles.textarea}`} rows={4} placeholder="How can we help your brand excel at TEXPO LAND?" />
          </motion.label>
        </>
      )}
    />
  );
}
