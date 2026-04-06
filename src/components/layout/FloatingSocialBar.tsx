'use client';

import { motion } from 'framer-motion';
import { SocialIcons } from '../ui/SocialIcons/SocialIcons';
import styles from './FloatingSocialBar.module.css';

export function FloatingSocialBar() {
  return (
    <motion.div
      className={styles.socialBar}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <SocialIcons />
    </motion.div>
  );
}
