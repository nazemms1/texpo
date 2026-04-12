"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/src/lib/animations";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={`${styles.root} ${styles[align]} ${light ? styles.light : ""}`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && (
        <div className={styles.subtitle}>
          {subtitle.split('.').filter(s => s.trim()).map((segment, index, array) => (
            <span key={index} style={{ display: 'block', marginBottom: index < array.length - 1 ? '0.75rem' : 0 }}>
              {segment.trim()}.
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
