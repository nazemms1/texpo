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
  title: string;
  subtitle: string;
  contactItems: ContactItem[];
  terms: string[];
  renderFormFields: (classNames: TwoPanelFormSectionClassNames) => React.ReactNode;
  submitLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export function TwoPanelFormSection({
  title,
  subtitle,
  contactItems,
  terms,
  renderFormFields,
  submitLabel = 'Submit Request',
  logoSrc = '/logos/Logo-footers.svg',
  logoAlt = 'TEXPO',
}: TwoPanelFormSectionProps) {
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
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <motion.div
              className={styles.formFields}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {renderFormFields(styles)}

              <motion.div className={styles.submitWrap} variants={fadeInUp}>
                <button type="submit" className={styles.submitBtn}>
                  {submitLabel}
                </button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

