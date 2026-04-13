'use client';

import { motion } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useNavbar } from '@/src/hooks/useNavbar';
import { NavMenu } from './NavMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './Header.module.css';

export function Header() {
  const { scrolled, menuOpen, setMenuOpen } = useNavbar();
  const params = useParams();
  const lang = (params?.lang as string) || 'en';

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
  
        <Link href={`/${lang}`} className={styles.logo}>
          <Image
            src="/images/logo-header2.svg"
            alt="TEXPO logo"
            width={160}
            height={40}
            className={styles.logoImage}
            priority
          />
        </Link>

     
        <div className={styles.desktopNav}>
          <NavMenu />
                <LanguageSwitcher />
          <Link href={`/${lang}/visitors`} className={styles.registerBtn}>
            {lang === 'ar' ? 'تسجيل زائر' : 'Register Visitor'}
          </Link>
  
        </div>

      
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

   
      <NavMenu mobile open={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.header>
  );
}
