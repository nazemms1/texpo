'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import styles from './AnimatedButton.module.css';

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
}

export function PillButton({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: PillButtonProps) {
  const cls = `${styles.pill} ${styles[variant]} ${className}`;

  const inner = (
    <motion.span
      className={cls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
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

interface ArrowCircleProps {
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'dashed';
  onClick?: () => void;
  className?: string;
}

export function ArrowCircle({
  href,
  variant = 'primary',
  onClick,
  className = '',
}: ArrowCircleProps) {
  const isDashed = variant === 'dashed';
  const cls = isDashed
    ? `${styles.circle} ${styles.dashedCircle} ${className}`
    : `${styles.circle} ${styles[`${variant}Circle`]} ${className}`;

  const inner = (
    <motion.span
      className={cls}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {isDashed && (
        <svg
          className={styles.dashedRing}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="40"
            cy="40"
            r="39"
            stroke="#42BEB3"
            strokeWidth="1"
            strokeDasharray="12 12"
          />
        </svg>
      )}
      <IconArrowRight size={20} stroke={2} />
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
