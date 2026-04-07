'use client';

import { Skeleton as MantineSkeleton, type SkeletonProps as MantineSkeletonProps } from '@mantine/core';
import styles from './Skeleton.module.css';

interface SkeletonProps extends MantineSkeletonProps {
  variant?: 'text' | 'title' | 'image' | 'button' | 'card' | 'circular';
}

export function Skeleton({ variant, className = '', ...props }: SkeletonProps) {
  const variantClass = variant ? styles[variant] : '';
  
  // Default values based on variant
  const defaults: Partial<MantineSkeletonProps> = {};
  
  if (variant === 'title') {
    defaults.height = 40;
    defaults.radius = 'xl';
    defaults.width = '60%';
  } else if (variant === 'text') {
    defaults.height = 16;
    defaults.radius = 'md';
  } else if (variant === 'button') {
    defaults.height = 50;
    defaults.width = 160;
    defaults.radius = 'xl';
  } else if (variant === 'circular') {
    defaults.radius = '100%';
    // Circle should have equal square dimensions by default if not provided
    if (props.width && !props.height) defaults.height = props.width;
    if (props.height && !props.width) defaults.width = props.height;
  } else if (variant === 'image') {
    defaults.radius = '24px';
  }

  return (
    <MantineSkeleton
      animate
      className={`${styles.skeleton} ${variantClass} ${className}`}
      {...defaults}
      {...props}
    />
  );
}
