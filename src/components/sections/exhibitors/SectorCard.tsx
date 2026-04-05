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
  
   const angle = (offset / total) * Math.PI; 
  
  const translateX = Math.sin(angle) * 520; 
  const translateZ = (Math.cos(angle) - 1) * 350;
  const archFactor = Math.abs(offset / (total/2));
  const translateY = Math.pow(archFactor, 1.3) * 180;
  
  const rotateY = -Math.sin(angle) * 35;
  const rotateZ = (offset / total) * 35;
  const scale = 1 - abs * 0.12;
  
   const opacity = isActive ? 1 : Math.max(0.4, 1 - abs * 0.25);
  
   const blur = abs > 1.2 ? `blur(${Math.min(5, (abs - 1.2) * 6)}px)` : "blur(0px)";

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
        zIndex: Math.round((5 - abs) * 10),
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 0.61, 0.36, 1],
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
