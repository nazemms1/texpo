'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './StandMapCarousel.module.css';

import { Skeleton } from "@/src/components/ui/Skeleton/Skeleton";

interface StandMapCarouselProps {
  images: { src: string; alt: string }[];
  title?: string;
  loading?: boolean;
}

export function StandMapCarousel({
  images = [],
  title = 'Exhibition Stand Maps',
  loading
}: StandMapCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    if (current >= (images?.length || 0)) {
      setCurrent(0);
    }
  }, [images, current]);

  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <Skeleton bg="gray.3" height={40} width="60%" radius="xl" mx="auto" mb="xl" animate />
          <div className={styles.carouselWrapper}>
             <Skeleton bg="gray.3" height={500} width="100%" radius="xl" animate />
          </div>
        </div>
      </section>
    );
  }

  const total = images.length;

  function goTo(index: number, dir: 1 | -1) {
    setDirection(dir);
    setCurrent(index);
  }

  function prev() {
    goTo((current - 1 + total) % total, -1);
  }

  function next() {
    goTo((current + 1) % total, 1);
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    }),
  };

  if (!images || images.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.carouselWrapper}>
          {total > 1 && (
            <button
              className={`${styles.navBtn} ${styles.navBtnLeft}`}
              onClick={prev}
              aria-label="Previous stand map"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          <div className={styles.imageFrame}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={current}
                src={images[current].src}
                alt={images[current].alt}
                className={styles.mapImage}
                custom={direction}
                // variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </div>

          {total > 1 && (
            <button
              className={`${styles.navBtn} ${styles.navBtnRight}`}
              onClick={next}
              aria-label="Next stand map"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {total > 1 && (
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={`Go to map ${i + 1}`}
              />
            ))}
          </div>
        )}

        {total > 1 && (
          <p className={styles.counter}>
            {current + 1} / {total}
          </p>
        )}
      </div>
    </section>
  );
}
