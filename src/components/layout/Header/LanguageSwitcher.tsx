'use client';

import { motion } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './Header.module.css';

export function LanguageSwitcher() {
  return (
    <motion.button
      className={styles.langBtn}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      aria-label="Switch language"
    >
      <span>English</span>
      <IconChevronDown size={14} />
    </motion.button>
  );
}
