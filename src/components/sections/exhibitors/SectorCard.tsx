"use client";

import Image from "next/image";
import styles from "./SectorCard.module.css";

interface SectorCardProps {
  title: string;
  image: string;
  offset: number;
  isActive: boolean;
}

export function SectorCard({ title, image, offset, isActive }: SectorCardProps) {
  const lines = title.split("\n");
  const abs = Math.abs(offset);
  const near = Math.min(abs, 1);
  const far = Math.min(Math.max(abs - 1, 0), 1);

  // Matched from Figma positions: center y=0, near y~68, far y~251
  const translateY = 68 * near + 183 * far;
  const translateX = -Math.sign(offset) * 18 * far;
  const rotateZ = offset === 0 ? 0 : Math.sign(offset) * (13 + 2 * far);
  const scale = 1 - 0.1 * near - 0.016 * far;
  const opacity = isActive ? 1 : abs < 1.5 ? 0.6 : 0.4;
  const transform = isActive
    ? "perspective(1300px) translateY(0px) rotateZ(0deg) scale(1)"
    : `perspective(1300px) translateX(${translateX}px) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`;

  return (
    <article
      className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}
      style={{
        transform,
        opacity,
      }}
    >
      <div className={styles.cardMedia}>
        <Image
          src={image}
          alt={title.replace("\n", " ")}
          fill
          sizes="(max-width: 768px) 82vw, 450px"
          className={styles.cardImage}
          priority={isActive}
        />
        <div className={styles.activeLayer} />
        <div className={styles.cardOverlay} />
      </div>

      <p className={styles.cardLabel}>
        {lines.map((line, idx) => (
          <span key={line + idx}>
            {line}
            {idx < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </article>
  );
}
