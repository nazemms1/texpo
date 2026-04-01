'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './SocialIcons.module.css';
import facebookIcon from '../../../assets/Icons/facebook.svg';
import instagramIcon from '../../../assets/Icons/instagram.svg';
import linkedinIcon from '../../../assets/Icons/linkedin.svg';

const icons = [
    { icon: linkedinIcon, label: 'Instagram', href: '#' },

  { icon: facebookIcon, label: 'LinkedIn', href: '#' },
  { icon: instagramIcon, label: 'Facebook', href: '#' },
];

export function SocialIcons({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <div className={`${styles.bar} ${horizontal ? styles.horizontal : ''}`}>
      {icons.map(({ icon, label, href }) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          className={styles.iconBtn}
          whileHover={{ scale: 1.18, backgroundColor: 'rgba(26,122,255,0.35)' }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <Image 
            src={icon} 
            alt={label} 
            width={24} 
            height={24}
            className={styles.icon}
          />
        </motion.a>
      ))}
    </div>
  );
}