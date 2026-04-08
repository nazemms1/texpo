'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './SocialIcons.module.css';
import facebookIcon from '../../../assets/Icons/facebook.svg';
import instagramIcon from '../../../assets/Icons/instagram.svg';
import linkedinIcon from '../../../assets/Icons/linkedin.svg';
import { useApi } from '@/src/hooks/useApi';
import { publicDataService } from '@/src/lib/api';
import type { SocialLinkApiItem } from '@/src/types/api';

const LOCAL_ICONS: Record<string, string> = {
  facebook:  facebookIcon as unknown as string,
  instagram: instagramIcon as unknown as string,
  linkedin:  linkedinIcon as unknown as string,
};

export function SocialIcons({ horizontal = false }: { horizontal?: boolean }) {
  const { data } = useApi(() => publicDataService.getPublicData());

  const facebook = data?.find((i) => i.key === 'facebook_url')?.value;
  const instagram = data?.find((i) => i.key === 'instagram_url')?.value;
  const linkedin = data?.find((i) => i.key === 'linkedin_url')?.value;

  const links: SocialLinkApiItem[] = [
    { platform: 'facebook',  href: facebook || '#' },
    { platform: 'instagram', href: instagram || '#' },
    { platform: 'linkedin',  href: linkedin || '#' },
  ];

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