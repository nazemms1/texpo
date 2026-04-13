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
  const targetLang: Lang = lang === 'en' ? 'ar' : 'en';
  const targetLabel = lang === 'en' ? 'العربية' : 'English';

  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openWithTimer() {
    setIsOpen(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsOpen(false), 1000);
  }

  function switchLanguage() {
    if (timerRef.current) clearTimeout(timerRef.current);
    const segments = pathname.split('/');
    segments[1] = targetLang;
    router.push(segments.join('/'));
    setIsOpen(false);
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  if (mobile) {
    return (
      <button
        className={styles.mobileLangBtn}
        onClick={switchLanguage}
      >
        <span>{targetLabel}</span>
      </button>
    );
  }

  return (
    <div className={styles.langWrapper}>
      <motion.div
        className={styles.langPill}
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.button
              className={styles.langChoice}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
              onClick={switchLanguage}
            >
              {targetLabel}
            </motion.button>
          )}
        </AnimatePresence>

        <button
          className={styles.langGlobeBtn}
          onClick={openWithTimer}
          aria-label="Switch language"
        >
          <IconWorld size={20} stroke={1.6} />
        </button>
      </motion.div>
    </div>
  );
}
