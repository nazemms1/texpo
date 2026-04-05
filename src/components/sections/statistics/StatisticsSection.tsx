"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/src/lib/animations";
import { STATS } from "@/src/lib/constants";
import styles from "./StatisticsSection.module.css";

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) return { num: parseInt(match[1], 10), suffix: match[2] };
  return { num: 0, suffix: value };
}

function CountUpValue({ value }: { value: string }) {
  const { num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView || num === 0) return;
    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(progress * num));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1500 / totalFrames);
    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <span ref={ref} className={styles.value}>
      {count}{suffix}
    </span>
  );
}

function bezier(t: number) {
  const x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * 550 + t * t * 1100;
  const y = (1 - t) * (1 - t) * 160 + 2 * t * (1 - t) * 0 + t * t * 160;
  return { x, y };
}

const T_VALUES = [0.05, 0.25, 0.5, 0.75, 0.95];

export function StatisticsSection() {
  return (
    <section className={styles.section}>
      {/* Mobile grid layout */}
      <div className={styles.mobileGrid}>
        {STATS.map((stat, i) => (
          <motion.div
            key={`mobile-${stat.value}-${i}`}
            className={styles.mobileItem}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ delay: i * 0.1 }}
          >
            <CountUpValue value={stat.value} />
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Desktop arc layout */}
      <div className={styles.arcWrapper}>
        <svg
          className={styles.arc}
          viewBox="0 0 1100 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160 Q550,0 1100,160"
            stroke="#133854"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,195 Q550,35 1100,195"
            stroke="#133854"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,230 Q550,70 1100,230"
            stroke="#133854"
            strokeWidth="0.5"
            fill="none"
          />

          {STATS.map((stat, i) => {
            const { x, y } = bezier(T_VALUES[i]);
            return (
              <g
                key={`${stat.value}-${stat.label}-${i}`}
                transform={`translate(${x}, ${y})`}
              >
                <motion.circle
                  cx={0}
                  cy={0}
                  r={6}
                  fill="#42BEB3"
                  fillOpacity="0.8"
                  style={{
                    filter: 'drop-shadow(0px 0px 6px #42BEB3)',
                    transformBox: 'fill-box',
                    transformOrigin: 'center',
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                />
                <foreignObject x="-50" y="-80" width="120" height="80">
                  <motion.div
                    // @ts-expect-error foreignObject requires XHTML namespace on this node
                    xmlns="http://www.w3.org/1999/xhtml"
                    className={styles.item}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  >
                    <CountUpValue value={stat.value} />
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
