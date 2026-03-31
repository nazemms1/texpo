'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/src/lib/constants';
import styles from './Header.module.css';

interface NavMenuProps {
  mobile?: boolean;
  open?: boolean;
  onClose?: () => void;
}

export function NavMenu({ mobile = false, open = false, onClose }: NavMenuProps) {
  const pathname = usePathname();

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
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${pathname === item.href ? styles.active : ''}`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    );
  }

  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
        >
          {item.label}
          {pathname === item.href && (
            <motion.span
              className={styles.underline}
              layoutId="nav-underline"
            />
          )}
        </Link>
      ))}
    </nav>
  );
}
