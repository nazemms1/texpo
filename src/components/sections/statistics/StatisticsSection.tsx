"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/src/lib/animations";
import { STATS } from "@/src/lib/constants";
import styles from "./StatisticsSection.module.css";

function bezier(t: number) {
  const x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * 550 + t * t * 1100;
  const y = (1 - t) * (1 - t) * 160 + 2 * t * (1 - t) * 0 + t * t * 160;
  return { x, y };
}

const T_VALUES = [0.05, 0.25, 0.5, 0.75, 0.95];

export function StatisticsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.arcWrapper}>
        <svg
          className={styles.arc}
          viewBox="0 0 1100 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160 Q550,0 1100,160"
            stroke="rgba(180,200,230,0.30)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,195 Q550,35 1100,195"
            stroke="rgba(180,200,230,0.30)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,230 Q550,70 1100,230"
            stroke="rgba(180,200,230,0.30)"
            strokeWidth="1"
            fill="none"
          />

           {STATS.map((stat, i) => {
            const { x, y } = bezier(T_VALUES[i]);
            return (
              <g
                key={stat.value + stat.label}
                transform={`translate(${x}, ${y})`}
              >
                 <circle cx="0" cy="0" r="4" fill="#42BEB3" />
                <foreignObject x="-50" y="-80" width="120" height="80">
                  <motion.div
                    // @ts-ignore
                    xmlns="http://www.w3.org/1999/xhtml"
                    className={styles.item}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className={styles.value}>{stat.value}</span>
                    <span className={styles.label}>{stat.label}</span>
                  </motion.div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
