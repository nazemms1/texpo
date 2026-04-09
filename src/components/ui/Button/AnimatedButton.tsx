'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Lang } from '@/src/lib/i18n';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import styles from './AnimatedButton.module.css';

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  isGroupHovered?: boolean;
}

export function PillButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  isGroupHovered,
}: PillButtonProps) {
  const cls = `${styles.pill} ${styles[variant]} ${styles[size]} ${className}`;

  const inner = (
    <motion.span
      className={cls}
      animate={isGroupHovered !== undefined ? { scale: isGroupHovered ? 1.03 : 1 } : undefined}
      whileHover={isGroupHovered === undefined ? { scale: 1.03 } : undefined}
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
  size?: 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  isGroupHovered?: boolean;
}

export function ArrowCircle({
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  isGroupHovered,
}: ArrowCircleProps) {
  const { lang } = useParams();
  const isAr = lang === 'ar';
  
  const [localHovered, setLocalHovered] = useState(false);
  const isHovered = isGroupHovered !== undefined ? isGroupHovered : localHovered;

  const isDashed = variant === 'dashed';
  const cls = isDashed
    ? `${styles.circle} ${styles.dashedCircle} ${styles[size]} ${className}`
    : `${styles.circle} ${styles[`${variant}Circle`]} ${styles[size]} ${className}`;

  const inner = (
    <motion.span
      className={cls}
      animate={{ scale: isHovered ? 1.08 : 1 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onHoverStart={() => setLocalHovered(true)}
      onHoverEnd={() => setLocalHovered(false)}
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
            stroke="#002068"
            strokeWidth="1"
            strokeDasharray="12 12"
          />
        </svg>
      )}
      <motion.span
        className={styles.iconWrapper}
        animate={{ rotate: isAr ? (isHovered ? -135 : -180) : (isHovered ? -45 : 0) }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        <IconArrowRight size={20} stroke={2} />
      </motion.span>
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

interface ButtonPairProps {
  pillHref?: string;
  arrowHref?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  children: React.ReactNode;
}

export function ButtonPair({ 
  pillHref, 
  arrowHref, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  children 
}: ButtonPairProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: (onClick || pillHref || arrowHref) ? 'pointer' : 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <PillButton 
        href={pillHref} 
        variant={variant} 
        size={size} 
        isGroupHovered={hovered}
      >
        {children}
      </PillButton>
      <ArrowCircle 
        href={arrowHref} 
        variant={variant} 
        size={size} 
        isGroupHovered={hovered} 
      />
    </div>
  );
}
