'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './SocialIcons.module.css';
import facebookIcon from '../../../assets/Icons/facebook.svg';
import instagramIcon from '../../../assets/Icons/instagram.svg';
import linkedinIcon from '../../../assets/Icons/linkedin.svg';
import whatsappIcon from '../../../assets/Icons/whatsapp.svg';
import youtubeIcon from '../../../assets/Icons/youtube.svg';
import xIcon from '../../../assets/Icons/x.svg';
import { useApi } from '@/src/hooks/useApi';
import { publicDataService } from '@/src/lib/api';
import type { SocialLinkApiItem } from '@/src/types/api';

const LOCAL_ICONS: Record<string, string> = {
  facebook:  facebookIcon as unknown as string,
  instagram: instagramIcon as unknown as string,
  linkedin:  linkedinIcon as unknown as string,
  whatsapp:  whatsappIcon as unknown as string,
  youtube:   youtubeIcon as unknown as string,
  x:         xIcon as unknown as string,
};

export function SocialIcons({ horizontal = false }: { horizontal?: boolean }) {
  const { data } = useApi(() => publicDataService.getPublicData());

  const facebook  = data?.find((i) => i.key === 'facebook_url')?.value;
  const instagram = data?.find((i) => i.key === 'instagram_url')?.value;
  const linkedin  = data?.find((i) => i.key === 'linkedin_url')?.value;
  const whatsapp  = data?.find((i) => i.key === 'whatsapp_url')?.value;
  const youtube   = data?.find((i) => i.key === 'youtube_url')?.value;
  const x         = data?.find((i) => i.key === 'x_url')?.value;

  const allLinks: (SocialLinkApiItem & { _url: string | null | undefined })[] = [
    { platform: 'facebook',  href: facebook  || '#', _url: facebook  },
    { platform: 'instagram', href: instagram || '#', _url: instagram },
    { platform: 'linkedin',  href: linkedin  || '#', _url: linkedin  },
    { platform: 'whatsapp',  href: whatsapp  || '#', _url: whatsapp  },
    { platform: 'youtube',   href: youtube   || '#', _url: youtube   },
    { platform: 'x',         href: x         || '#', _url: x         },
  ];

  const links = allLinks.filter((l) => l._url);

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