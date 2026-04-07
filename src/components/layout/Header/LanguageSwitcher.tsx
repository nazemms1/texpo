'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { headerTranslations, type Lang } from '@/src/lib/i18n';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './Header.module.css';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const lang = (params?.lang as Lang) ?? 'en';
  const nextLang: Lang = lang === 'en' ? 'ar' : 'en';
  const currentLabel = headerTranslations[lang].label;
  const nextLabel = headerTranslations[lang].switchTo;
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSwitch() {
    const newPath = pathname.replace(`/${lang}`, `/${nextLang}`);
    router.push(newPath);
    setIsOpen(false);
  }

  return (
    <div className={styles.langWrapper} ref={dropdownRef}>
      <motion.button
        className={styles.langBtn}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-expanded={isOpen}
        aria-label="Toggle language menu"
      >
        <span>{currentLabel}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex' }}
        >
          <IconChevronDown size={18} stroke={2.5} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button className={styles.dropdownItem} onClick={handleSwitch}>
              {nextLabel}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
