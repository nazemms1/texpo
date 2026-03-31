'use client';

import { motion } from 'framer-motion';
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
} from '@tabler/icons-react';
import styles from './SocialIcons.module.css';

const icons = [
  { Icon: IconBrandLinkedin, label: 'LinkedIn', href: '#' },
  { Icon: IconBrandFacebook, label: 'Facebook', href: '#' },
  { Icon: IconBrandInstagram, label: 'Instagram', href: '#' },
];

export function SocialIcons({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <div className={`${styles.bar} ${horizontal ? styles.horizontal : ''}`}>
      {icons.map(({ Icon, label, href }) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          className={styles.iconBtn}
          whileHover={{ scale: 1.18, backgroundColor: 'rgba(26,122,255,0.35)' }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
}
