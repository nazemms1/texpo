'use client';

import { IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';
import styles from './Footer.module.css';
import { useApi } from '@/src/hooks/useApi';
import { publicDataService } from '@/src/lib/api';

export function Footer() {
  const { data } = useApi(() => publicDataService.getPublicData());

  const address = data?.find((i) => i.key === 'address')?.value || ' ';
  const phone = data?.find((i) => i.key === 'phone')?.value;
  const mobile = data?.find((i) => i.key === 'mobile')?.value;
  const email = data?.find((i) => i.key === 'email')?.value || ' ';
  const dateRange = data?.find((i) => i.key === 'date_range')?.value || ' ';

  const contactItems = [
    { Icon: IconMapPin, text: address },
    ...(mobile ? [{ Icon: IconPhone, text: mobile }] : []),
    ...(phone ? [{ Icon: IconPhone, text: phone }] : []),
    { Icon: IconMail, text: email },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <img
          src="/logos/texpo.svg"
          alt="TEXPO"
          className={styles.logo}
        />
        <p className={styles.location}>{address}</p>
        <p className={styles.date}>{dateRange}</p>
      </div>

      <div className={styles.bar}>
        {contactItems.map(({ Icon, text }, i) => (
          <span key={i} className={styles.barItem}>
            {i !== 0 && <span className={styles.sep}>|</span>}
            <Icon size={15} className={styles.barIcon} />
            <span className={styles.footerText}>{text}</span>
          </span>
        ))}
      </div>
    </footer>
  );
}
