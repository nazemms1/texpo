"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { Container } from "@/src/components/layout/Container";
import styles from "./CountdownSection.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownSectionProps {
  targetDate: string;
}

const translations = {
  en: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    eyebrow: "Mark your calendar",
    heading: "Countdown to the",
    headingAccent: "Event",
    timerTitle: "At this time, technology will fill the space.",
  },
  ar: {
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثواني",
    eyebrow: "سجّل الموعد",
    heading: "العد التنازلي نحو",
    headingAccent: "الحدث",
    timerTitle: "في هذه اللحظة، ستملأ التقنية الفضاء.",
  },
};

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 12,
  duration: Math.random() * 14 + 10,
}));

function TimeUnit({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) {
  const glowRef = useRef<HTMLDivElement>(null);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value && glowRef.current) {
      glowRef.current.classList.remove(styles.pulse);
      void glowRef.current.offsetWidth; // reflow
      glowRef.current.classList.add(styles.pulse);
      prevValue.current = value;
    }
  }, [value]);

  return (
    <motion.div
      className={styles.unit}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.digitWrapper}>
        <div ref={glowRef} className={styles.numberGlow} />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            className={styles.number}
            initial={{ y: 28, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -28, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}

export function CountdownSection({ targetDate }: CountdownSectionProps) {
  const { lang } = useParams();
  const currentLang = (lang as "en" | "ar") || "en";
  const t = translations[currentLang];

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calc = (): TimeLeft => {
      const diff = +new Date(targetDate) - +new Date();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  // Format date for display
  const displayDate = new Date(targetDate).toLocaleDateString(
    currentLang === "ar" ? "ar-SA" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <section className={styles.section}>
      {/* Grid background */}
      <div className={styles.grid_bg} />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className={styles.particle}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: "-10px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Decorative arc */}
      <svg className={styles.arcSvg} viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path
          d="M0,140 Q360,60 720,100 Q1080,140 1440,80"
          stroke="#0060A8"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M0,160 Q360,90 720,120 Q1080,150 1440,110"
          stroke="#133854"
          strokeWidth="0.6"
          fill="none"
        />
        {[0.12, 0.35, 0.5, 0.65, 0.88].map((t, i) => {
          const x = t * 1440;
          const y = 100 + Math.sin(t * Math.PI) * -40 + 40;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={4}
              fill="#0060A8"
              fillOpacity="0.7"
              style={{ filter: "drop-shadow(0 0 6px #0060A8)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.6 }}
            />
          );
        })}
      </svg>

      <Container>
        <div className={styles.inner}>
          {/* Title */}
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t.timerTitle}
          </motion.h2>

          {/* Countdown units */}
          <div className={styles.countRow}>
            {units.map((u, i) => (
              <TimeUnit key={u.label} value={u.value} label={u.label} index={i} />
            ))}
          </div>

          {/* Date badge */}
          <motion.div
            className={styles.dateBadge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {displayDate}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
