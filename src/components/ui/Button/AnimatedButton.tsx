'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import styles from './AnimatedButton.module.css';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export function AnimatedButton({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  showArrow = true,
}: AnimatedButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  const inner = (
    <motion.span
      className={cls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <span className={styles.label}>{children}</span>
      {showArrow && (
        <span className={styles.arrowBadge}>
          <IconArrowRight size={14} stroke={2.5} />
        </span>
      )}
    </motion.span>
  );

  if (href) {
    return <Link href={href} className={styles.link}>{inner}</Link>;
  }

  return (
    <button onClick={onClick} className={styles.link}>
      {inner}
    </button>
  );
}
