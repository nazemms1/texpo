'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './SocialIcons.module.css';
import facebookIcon from '../../../assets/Icons/facebook.svg';
import instagramIcon from '../../../assets/Icons/instagram.svg';
import linkedinIcon from '../../../assets/Icons/linkedin.svg';
import { useApi } from '@/src/hooks/useApi';
import { socialService } from '@/src/lib/api';
import type { SocialLinkApiItem } from '@/src/types/api';

const LOCAL_ICONS: Record<string, string> = {
  facebook:  facebookIcon as unknown as string,
  instagram: instagramIcon as unknown as string,
  linkedin:  linkedinIcon as unknown as string,
};

const FALLBACK_ICONS: SocialLinkApiItem[] = [
  { platform: 'linkedin',  href: '#' },
  { platform: 'facebook',  href: '#' },
  { platform: 'instagram', href: '#' },
];

export function SocialIcons({ horizontal = false }: { horizontal?: boolean }) {
  const { data } = useApi(() => socialService.getSocialLinks());

  const links: SocialLinkApiItem[] = data ?? FALLBACK_ICONS;

  return (
    <div className={`${styles.bar} ${horizontal ? styles.horizontal : ''}`}>
      {links.map(({ platform, href, icon }) => {
        const iconSrc = icon ?? LOCAL_ICONS[platform.toLowerCase()] ?? facebookIcon;
        return (
          <motion.a
            key={platform}
            href={href}
            aria-label={platform}
            className={styles.iconBtn}
            whileHover={{ scale: 1.18, backgroundColor: 'rgba(26,122,255,0.35)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <Image
              src={iconSrc}
              alt={platform}
              width={24}
              height={24}
              className={styles.icon}
            />
          </motion.a>
        );
      })}
    </div>
  );
}