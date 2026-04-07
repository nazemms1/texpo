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

import { Skeleton } from '@/src/components/ui/Skeleton/Skeleton';

interface TwoPanelFormSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  contactItems: ContactItem[];
  terms: string[];
  renderFormFields: (classNames: TwoPanelFormSectionClassNames) => React.ReactNode;
  submitLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
  onSubmit?: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  isSubmitting?: boolean;
  loading?: boolean;
  submitSuccess?: boolean;
  submitError?: string | null;
  successMessage?: string;
}

export function TwoPanelFormSection({
  id,
  title,
  subtitle,
  description,
  contactItems,
  terms,
  renderFormFields,
  submitLabel = 'Submit Request',
  logoSrc = '/logos/Logo-footers.svg',
  logoAlt = 'TEXPO',
  onSubmit,
  isSubmitting = false,
  loading = false,
  submitSuccess = false,
  submitError = null,
  successMessage = 'Your request has been submitted successfully!',
}: TwoPanelFormSectionProps) {
  if (loading) {
    return (
      <section id={id} className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.infoPanel}>
            <Skeleton variant="image" height={48} width={120} mb="xl" />
            <Skeleton variant="title" width="60%" mb="md" />
            <Skeleton variant="text" width="80%" mb="sm" />
            <div className={styles.contactList}>
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.contactItem}>
                  <Skeleton variant="image" height={40} width={40} radius="50%" />
                  <div style={{ flex: 1 }}>
                    <Skeleton variant="text" width="40%" mb="xs" />
                    <Skeleton variant="text" width="60%" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.formPanel}>
             <div className={styles.form}>
                <div className={styles.row}>
                   <Skeleton variant="text" height={50} />
                   <Skeleton variant="text" height={50} />
                </div>
                <div className={styles.row}>
                   <Skeleton variant="text" height={50} />
                   <Skeleton variant="text" height={50} />
                </div>
                <Skeleton variant="card" height={100} mb="xl" />
                <Skeleton variant="button" />
             </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.infoPanel}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
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

          {description && (
            <div className={styles.descriptionWrapper} style={{ marginTop: 'auto', marginBottom: '1.5rem' }}>
              <p className={styles.description}>{description}</p>
            </div>
          )}

          <div className={styles.termsWrapper} style={{ marginTop: description ? '0' : 'auto' }}>
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
          viewport={{ once: true, amount: 0.1 }}
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
