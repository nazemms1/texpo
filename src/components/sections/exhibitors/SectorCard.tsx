"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./SectorCard.module.css";

interface SectorCardProps {
  title: string;
  image: string;
  offset: number;
  isActive: boolean;
  total: number;
}

export function SectorCard({ title, image, offset, isActive, total }: SectorCardProps) {
  const lines = title.split("\n");
  const abs = Math.abs(offset);
  
  // Adjusted Spacing: Bringing them closer as requested (Reduced angleStep)
  const angleStep = 0.58; 
  const angle = offset * angleStep;
  
  // Radius and 3D positioning
  const radius = 580; 
  const translateX = Math.sin(angle) * radius; 
  const translateZ = (Math.cos(angle) - 1) * 350;
  
  // Vertical arc depth
  const archFactor = Math.abs(offset / 2.2);
  const translateY = Math.pow(Math.min(archFactor, 1.5), 1.2) * 100;
  
  const rotateY = -Math.sin(angle) * 35;
  const rotateZ = offset * 4.5;
  const scale = 1 - Math.min(abs * 0.1, 0.35);
  
  // Visibility Logic: Still showing only 5 cards for clarity
  let opacity = 0;
  if (abs <= 2.2) {
    opacity = isActive ? 1 : Math.max(0, 1 - abs * 0.4);
  }
  
  const blur = abs > 1.2 ? `blur(${Math.min(4, (abs - 1.2) * 4)}px)` : "blur(0px)";

  return (
    <motion.article
      className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}
      initial={false}
      animate={{
        x: translateX,
        y: translateY,
        z: translateZ,
        rotateY: rotateY,
        rotateZ: rotateZ,
        scale,
        opacity,
        filter: blur,
        zIndex: Math.round((20 - abs) * 10),
        pointerEvents: abs > 2.2 ? "none" : "auto",
        visibility: abs > 2.8 ? "hidden" : "visible" as any
      }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        zIndex: { duration: 0 }
      }}
      style={{
        position: "absolute",
        left: "50%",
        top: "40%",
        marginLeft: "-150px", 
        marginTop: "-150px",
        width: "300px",
        perspective: "1200px"
      }}
    >
      <div className={styles.cardMedia}>
        <Image
          src={image}
          alt={title.replace("\n", " ")}
          fill
          unoptimized={true}
          sizes="(max-width: 768px) 82vw, 400px"
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
    </motion.article>
  );
}
