'use client';

import { IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';
import styles from './Footer.module.css';

const contactItems = [
  { Icon: IconMapPin, text: 'Damascus, Syria – Exhibition City' },
  { Icon: IconPhone, text: '0949333200' },
  { Icon: IconPhone, text: '0112131184 - 0112131186' },
  { Icon: IconMail, text: 'info@texpo-exhibition.com' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <img
          src="/logos/Logo-footers.svg"
          alt="TEXPO"
          className={styles.logo}
        />
        <p className={styles.location}>Damascus, Syria – Exhibition City</p>
        <p className={styles.date}>17 JUNE - 20 JUNE 2026</p>
      </div>

      <div className={styles.bar}>
        {contactItems.map(({ Icon, text }, i) => (
          <span key={i} className={styles.barItem}>
            {i !== 0 && <span className={styles.sep}>|</span>}
            <Icon size={15} className={styles.barIcon} />
            <span className={styles.footerText} >{text}</span>
          </span>
        ))}
      </div>
    </footer>
  );
}
