'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { type Lang } from '@/src/lib/i18n';
import { IconWorld } from '@tabler/icons-react';
import styles from './Header.module.css';

interface LanguageSwitcherProps {
  mobile?: boolean;
}

export function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const lang = (params?.lang as Lang) ?? 'en';
  
  const languages = [
    { code: 'en' as Lang, label: 'EN' },
    { code: 'ar' as Lang, label: 'عربي' }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (mobile) return;
    setIsOpen(true);
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  }

  function handleMouseLeave() {
    if (mobile) return;
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setIsOpen(false), 300);
  }

  function switchLanguage(targetLang: Lang) {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (targetLang === lang) {
      setIsOpen(false);
      return;
    }
    const segments = pathname.split('/');
    segments[1] = targetLang;
    router.push(segments.join('/'));
    setIsOpen(false);
  }

  useEffect(() => () => { 
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current); 
  }, []);

  if (mobile) {
    return (
      <div className={styles.mobileLangContainer}>
        <div className={styles.mobileLangTrack}>
          <motion.div 
            className={styles.mobileLangActiveIndicator}
            initial={false}
            animate={{
              x: lang === 'en' ? '0%' : '100%',
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          {languages.map((lng) => (
            <button
              key={lng.code}
              className={`${styles.mobileLangItem} ${lang === lng.code ? styles.active : ''}`}
              onClick={() => switchLanguage(lng.code)}
            >
              {lng.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={styles.langWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={styles.langPill}
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <AnimatePresence>
          {isOpen && (
            <div className={styles.langOptions}>
              {languages.map((lng) => (
                <motion.button
                  key={lng.code}
                  className={`${styles.langCircle} ${lang === lng.code ? styles.langCircleActive : ''}`}
                  initial={{ opacity: 0, scale: 0.6, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: 'auto' }}
                  exit={{ opacity: 0, scale: 0.6, width: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  onClick={() => switchLanguage(lng.code)}
                >
                  {lng.label}
                </motion.button>
              ))}
            </div>
          )}
        </AnimatePresence>

        <button
          className={styles.langGlobeBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconWorld size={20} stroke={1.6} />
        </button>
      </motion.div>
    </div>
  );
}