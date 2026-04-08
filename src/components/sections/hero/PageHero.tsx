"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";
import styles from "./PageHero.module.css";
import Icon from "../../../assets/Icons/Icon_arrwo.svg";
interface PageHeroProps {
  title?: string | null;
  titleAccent?: string | null;
}

export function PageHero({ title, titleAccent }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <img
        src="/images/Hero-section-page.svg"
        alt=""
        className={styles.bgImage}
        aria-hidden="true"
      />
      <img
        src="/images/Overlay.svg"
        alt=""
        className={styles.overlay}
        aria-hidden="true"
      />

      <motion.div
        className={styles.content}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.title} variants={fadeInUp}>
          <span className={styles.titlePrimary}>{title}</span>

          {titleAccent && (
            <span className={styles.titleAccent}> {titleAccent}</span>
          )}
        </motion.h1>
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 11.1L0 2.1L2.1 0L9 6.9L15.9 0L18 2.1L9 11.1Z"
            fill="#0058BD"
          />
        </svg>
      </motion.div>
    </section>
  );
}
