'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { NAV_ITEMS } from '@/src/lib/constants';
import { headerTranslations, type Lang } from '@/src/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './Header.module.css';

interface NavMenuProps {
  mobile?: boolean;
  open?: boolean;
  onClose?: () => void;
}

export function NavMenu({ mobile = false, open = false, onClose }: NavMenuProps) {
  const pathname = usePathname();
  const params = useParams();
  const lang = (params?.lang as Lang) ?? 'en';
  const t = headerTranslations[lang].nav;

  if (mobile) {
    return (
      <AnimatePresence>
        {open && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map((item) => {
              const href = `/${lang}${item.path}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`${styles.mobileLink} ${isActive ? styles.active : ''}`}
                  onClick={onClose}
                >
                  {t[item.key as keyof typeof t]}
                </Link>
              );
            })}
            <div className={styles.mobileFooter}>
              <LanguageSwitcher mobile />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    );
  }

  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map((item) => {
        const href = `/${lang}${item.path}`;
        const isActive = pathname === href;
        return (
          <Link
            key={item.key}
            href={href}
            className={`${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            {t[item.key as keyof typeof t]}
            {isActive && (
              <motion.span
                className={styles.underline}
                layoutId="nav-underline"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
