"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Skeleton } from "@/src/components/ui/Skeleton/Skeleton";
import { fadeInUp } from "@/src/lib/animations";
import { STATS } from "@/src/lib/constants";
import { useApi } from "@/src/hooks/useApi";
import { homeService } from "@/src/lib/api";
import type { StatApiItem } from "@/src/types/api";
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

function bezier(t: number, pathIdx: number = 0) {
  const baseY = 160 + pathIdx * 55;
  const peakY = pathIdx * 55;
  const x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * 550 + t * t * 1100;
  const y = (1 - t) * (1 - t) * baseY + 2 * t * (1 - t) * peakY + t * t * baseY;
  return { x, y: y + 100 }; // Shifted down by 100 to avoid top clipping
}

const T_VALUES_ROWS = [
  [0.05, 0.25, 0.5, 0.75, 0.95],
  [0.15, 0.35, 0.55, 0.75, 0.90], 
  [0.05, 0.25, 0.5, 0.75, 0.95],
];

function mobileBezier(t: number, baseY: number) {
  const x = 360 * t;
  const y = baseY - 160 * t + 160 * t * t;
  return { x, y };
}

const MOBILE_DISTRIBUTION = [
  { baseY: 160, t: 0.15 },
  { baseY: 160, t: 0.50 },
  { baseY: 160, t: 0.85 },
  { baseY: 300, t: 0.15 },
  { baseY: 300, t: 0.50 },
  { baseY: 300, t: 0.85 },
  { baseY: 440, t: 0.15 },
  { baseY: 440, t: 0.50 },
  { baseY: 440, t: 0.85 },
];

export function StatisticsSection({
  items,
  loading: parentLoading
}: {
  items?: { key: string; value: string }[];
  loading?: boolean;
}) {
  const { data: apiData, loading: apiLoading } = useApi(() => {
    if (items) return Promise.resolve({ data: items } as any);
    return homeService.getHomeData().then(res => ({
      ...res,
      data: res.data?.find(s => s.key === 'statistics')?.['meta-data'] || []
    }));
  });

  const loading = parentLoading ?? apiLoading;
  const statsList = items ?? (apiData as any) ?? STATS;
  const stats: StatApiItem[] = Array.isArray(statsList) ? statsList.map((s: any) => ({
    value: s.value,
    label: s.key || s.label
  })) : [];

  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.mobileGrid}>
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} variant="card" height={80} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.mobileGrid}>
        {stats.map((stat, i) => (
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

      <div className={styles.mobileArcWrapper}>
        <svg
          className={styles.mobileArc}
          viewBox="0 0 360 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,160 Q180,80 360,160" stroke="#133854" strokeWidth="1" fill="none" />
          <path d="M0,300 Q180,220 360,300" stroke="#133854" strokeWidth="1" fill="none" />
          <path d="M0,440 Q180,360 360,440" stroke="#133854" strokeWidth="1" fill="none" />

          {stats.map((stat, i) => {
            if (i >= MOBILE_DISTRIBUTION.length) return null;
            const { baseY, t } = MOBILE_DISTRIBUTION[i];
            const { x, y } = mobileBezier(t, baseY);
            return (
              <g key={`mobile-arc-${stat.value}-${i}`} transform={`translate(${x}, ${y})`}>
                <motion.circle
                  cx={0} cy={0} r={5}
                  fill="#0060A8"
                  fillOpacity="0.8"
                  style={{ filter: 'drop-shadow(0px 0px 6px #0060A8)', transformBox: 'fill-box', transformOrigin: 'center' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                />
                <foreignObject x="-70" y="-75" width="140" height="75">
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

      <div className={styles.arcWrapper}>
        <svg
          className={styles.arc}
          viewBox="0 0 1100 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,260 Q550,100 1100,260"
            stroke="#133854"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,315 Q550,155 1100,315"
            stroke="#133854"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,370 Q550,210 1100,370"
            stroke="#133854"
            strokeWidth="0.5"
            fill="none"
          />

          {stats.map((stat, i) => {
            const pathIdx = Math.floor(i / 5);
            const itemIdx = i % 5;
            if (pathIdx > 2) return null;

            const { x, y } = bezier(T_VALUES_ROWS[pathIdx][itemIdx], pathIdx);
            return (
              <g
                key={`${stat.value}-${stat.label}-${i}`}
                transform={`translate(${x}, ${y})`}
              >
                <motion.circle
                  cx={0}
                  cy={0}
                  r={6}
                  fill="#0060A8"
                  fillOpacity="0.8"
                  style={{ filter: 'drop-shadow(0px 0px 6px #0060A8)', transformBox: 'fill-box', transformOrigin: 'center' }}

                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                />
                <foreignObject x="-100" y="-80" width="200" height="80">
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
