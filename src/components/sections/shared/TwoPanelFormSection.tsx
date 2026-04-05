'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '@/src/lib/animations';
import styles from './TwoPanelFormSection.module.css';

type ContactItem = {
  Icon: React.ComponentType<{ size?: number; stroke?: number; className?: string }>;
  label: string;
  value: string;
};

type TwoPanelFormSectionClassNames = typeof styles;

interface TwoPanelFormSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  contactItems: ContactItem[];
  terms: string[];
  renderFormFields: (classNames: TwoPanelFormSectionClassNames) => React.ReactNode;
  submitLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
  onSubmit?: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  isSubmitting?: boolean;
  submitSuccess?: boolean;
  submitError?: string | null;
  successMessage?: string;
}

export function TwoPanelFormSection({
  id,
  title,
  subtitle,
  contactItems,
  terms,
  renderFormFields,
  submitLabel = 'Submit Request',
  logoSrc = '/logos/Logo-footers.svg',
  logoAlt = 'TEXPO',
  onSubmit,
  isSubmitting = false,
  submitSuccess = false,
  submitError = null,
  successMessage = 'Your request has been submitted successfully!',
}: TwoPanelFormSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.infoPanel}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            className={styles.logo}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />

          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.contactList}>
            {contactItems.map(({ Icon, label, value }) => (
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
            {terms.map((text, index) => (
              <p key={index} className={styles.termsText}>
                {text}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.formPanel}
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit?.(e);
            }}
          >
            <motion.div
              className={styles.formFields}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {renderFormFields(styles)}

              <motion.div className={styles.submitWrap} variants={fadeInUp}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? 'Submitting…' : submitLabel}
                </button>

                {submitSuccess && (
                  <p style={{ marginTop: '0.75rem', color: '#22c55e', fontSize: '0.875rem', fontWeight: 500 }}>
                    {successMessage}
                  </p>
                )}
                {submitError && (
                  <p style={{ marginTop: '0.75rem', color: '#ef4444', fontSize: '0.875rem' }}>
                    {submitError}
                  </p>
                )}
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

