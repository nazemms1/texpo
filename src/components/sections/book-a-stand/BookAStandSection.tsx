'use client';

import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { fadeInUp } from '@/src/lib/animations';
import { TwoPanelFormSection } from '@/src/components/sections/shared/TwoPanelFormSection';
import { useMutation } from '@/src/hooks/useMutation';
import { bookStandService } from '@/src/lib/api';
import type { BookStandPayload } from '@/src/types/api';

const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Bosnia and Herzegovina',
  'Brazil', 'Bulgaria', 'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia', 'Croatia',
  'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Ecuador', 'Egypt', 'Estonia', 'Ethiopia',
  'Finland', 'France', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Hungary', 'India', 'Indonesia',
  'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
  'Kuwait', 'Latvia', 'Lebanon', 'Libya', 'Lithuania', 'Luxembourg', 'Malaysia', 'Malta',
  'Mexico', 'Moldova', 'Monaco', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway',
  'Oman', 'Pakistan', 'Palestine', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
  'Romania', 'Russia', 'Saudi Arabia', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia',
  'South Africa', 'South Korea', 'Spain', 'Sudan', 'Sweden', 'Switzerland', 'Syria',
  'Thailand', 'Tunisia', 'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
  'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen',
];

const SECTORS = [
  'Technology & IT',
  'Artificial Intelligence & Robotics',
  'Energy & Renewables',
  'Manufacturing & Industry',
  'Healthcare & Pharmaceuticals',
  'Agriculture & Food',
  'Finance & Banking',
  'Education & Training',
  'Retail & E-Commerce',
  'Logistics & Supply Chain',
  'Construction & Real Estate',
  'Tourism & Hospitality',
  'Media & Entertainment',
  'Telecommunications',
  'Defense & Security',
  'Government & Public Sector',
  'Non-Profit & NGOs',
  'Other',
];

const standContactInfo = [
  {
    Icon: IconMail,
    label: 'Email Us',
    value: 'info@texpo-exhibition.com',
  }, 
  
  {
    Icon: IconPhone,
    label: 'Call Us',
    value: '0949333200',
  },
  {
    Icon: IconMapPin,
    label: 'Office',
    value: 'Damascus, Syria - Exhibition City',
  },
];

export function BookAStandSection() {
  const { submit, loading, error, success } = useMutation(bookStandService.submit);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    const fd = new FormData(e.currentTarget);
    const payload: BookStandPayload = {
      firstName:       fd.get('firstName')       as string,
      lastName:        fd.get('lastName')        as string,
      jobTitle:        fd.get('jobTitle')        as string,
      companyName:     fd.get('companyName')     as string,
      companyWebsite:  fd.get('companyWebsite')  as string,
      email:           fd.get('email')           as string,
      phone:           fd.get('phone')           as string,
      country:         fd.get('country')         as string,
      sector:          fd.get('sector')          as string,
    };
    submit(payload);
  }

  return (
    <TwoPanelFormSection
      title="BOOK A STAND"
      subtitle="Reserve your exhibition stand at TEXPO and connect with thousands of industry leaders, investors, and innovators."
      contactItems={standContactInfo}
      submitLabel="Book My Stand"
      onSubmit={handleSubmit}
      isSubmitting={loading}
      submitSuccess={success}
      submitError={error}
      successMessage="Your stand booking request has been submitted! We'll be in touch shortly."
      terms={[
        'By submitting this form, you consent to the collection and processing of your personal data for the purpose of handling your stand booking enquiry and follow-up communication.',
        'I confirm that I am 21 years of age or older, and that I have read and agreed to the Terms and Conditions and the Privacy Policy. Your information may be shared with contracted service providers and official partners only when needed to deliver event services and coordinate stand arrangements.',
      ]}
      renderFormFields={(styles) => (
        <>
          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>First Name</span>
              <input
                name="firstName"
                className={styles.input}
                type="text"
                placeholder="John"
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Last Name</span>
              <input
                name="lastName"
                className={styles.input}
                type="text"
                placeholder="Doe"
                required
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Job Title</span>
              <input
                name="jobTitle"
                className={styles.input}
                type="text"
                placeholder="Chief Executive Officer"
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Company Name</span>
              <input
                name="companyName"
                className={styles.input}
                type="text"
                placeholder="Tech Global Inc."
                required
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Company Website</span>
              <input
                name="companyWebsite"
                className={styles.input}
                type="url"
                placeholder="https://www.yourcompany.com"
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Work Email Address</span>
              <input
                name="email"
                className={styles.input}
                type="email"
                placeholder="john@company.com"
                required
              />
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Mobile Phone</span>
              <input
                name="phone"
                className={styles.input}
                type="tel"
                placeholder="+1 234 567 890"
                required
              />
            </motion.label>
            <motion.label className={styles.field} variants={fadeInUp}>
              <span className={styles.fieldLabel}>Country of Residence</span>
              <span className={styles.selectWrap}>
                <select
                  name="country"
                  className={`${styles.input} ${styles.selectField}`}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select your country</option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </span>
            </motion.label>
          </div>

          <div className={styles.row}>
            <motion.label
              className={styles.field}
              variants={fadeInUp}
              style={{ gridColumn: '1 / -1' }}
            >
              <span className={styles.fieldLabel}>What sector are you in?</span>
              <span className={styles.selectWrap}>
                <select
                  name="sector"
                  className={`${styles.input} ${styles.selectField}`}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select your sector</option>
                  {SECTORS.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </span>
            </motion.label>
          </div>
        </>
      )}
    />
  );
}
