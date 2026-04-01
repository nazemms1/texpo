"use client";

import { useState } from "react";
import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import styles from "./ExhibitorsSectorsSection.module.css";

const SECTORS = [
  {
    title: "Artificial Intelligence\n& Machine Learning",
    image: "/images/sectors/ai.jpg",
  },
  {
    title: "Cybersecurity",
    image: "/images/sectors/cybersecurity.jpg",
  },
  {
    title: "Semiconductors\n& Hardware",
    image: "/images/sectors/semiconductors.jpg",
  },
  {
    title: "Cloud Computing\n& Infrastructure",
    image: "/images/sectors/cloud.jpg",
  },
  {
    title: "Smart Cities\n& IoT",
    image: "/images/sectors/smartcities.jpg",
  },
  {
    title: "Telecom\n& Connectivity",
    image: "/images/sectors/telecom.jpg",
  },
];

const RADIUS = 900;
const CARD_W = 180;
const CARD_H = 220;
const SPREAD = 40;

function getArcStyle(i: number, total: number) {
  const half = (total - 1) / 2;
  const deg = 90 + SPREAD * ((i - half) / half);
  const rad = (deg * Math.PI) / 180;

  const x = RADIUS * Math.cos(rad);
  const y = -(RADIUS * Math.sin(rad));
  const rotateDeg = -(deg - 90);

  return {
    left: `calc(50% + ${x}px - ${CARD_W / 2}px)`,
    top: `calc(100% + ${y}px - ${CARD_H / 2}px)`,
    transform: `rotate(${rotateDeg}deg)`,
  };
}

export function ExhibitorsSectorsSection() {
  const total = SECTORS.length;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const active = SECTORS[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          title="EXHIBITORS AND SECTORS PARTICIPATING IN TEXPO LAND | 2ND EDITION"
          subtitle="The TEXPO Land exhibition features a wide range of companies and institutions from various technological and digital transformation sectors, showcasing advanced solutions, products, and services across a variety of fields, including:"
          align="center"
        />

        <div className={styles.featured}>
          <img
            key={activeIndex}
            src={active.image}
            alt={active.title.replace("\n", " ")}
            className={styles.featuredImg}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <div className={styles.stage}>
          {SECTORS.map((sector, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === activeIndex ? styles.cardActive : ""}`}
              style={getArcStyle(i, total)}
              onClick={() => setActiveIndex(i)}
            >
              <div className={styles.cardInner}>
                <img
                  src={sector.image}
                  alt={sector.title.replace("\n", " ")}
                  className={styles.cardImg}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                <div className={styles.cardOverlay} />
                <p className={styles.cardLabel}>
                  {sector.title.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < sector.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {SECTORS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to sector ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
