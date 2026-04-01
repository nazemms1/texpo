'use client';

import { motion } from 'framer-motion';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { headerTranslations, type Lang } from '@/src/lib/i18n';
import styles from './Header.module.css';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const lang = (params?.lang as Lang) ?? 'en';
  const nextLang: Lang = lang === 'en' ? 'ar' : 'en';
  const label = headerTranslations[lang].switchTo;

  function handleSwitch() {
    // Replace /en/... with /ar/... or vice versa
    const newPath = pathname.replace(`/${lang}`, `/${nextLang}`);
    router.push(newPath);
  }

  return (
    <motion.button
      className={styles.langBtn}
      onClick={handleSwitch}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      aria-label="Switch language"
    >
      <span>{label}</span>
    </motion.button>
  );
}
