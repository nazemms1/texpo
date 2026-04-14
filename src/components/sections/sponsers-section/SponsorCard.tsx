"use client";

import React from "react";
import Image from "next/image";
import styles from "./SponsorCard.module.css";

export interface SponsorCardProps {
  badgeText: string;
  logoSrc: string;
  themeColor: string;  
  logoAlt?: string;
  logoPriority?: boolean;
companyName?:string;
}

function clampHex(hex: string) {
  const normalized = hex.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(normalized)) return normalized;
  // Best-effort fallback: if input is invalid, return a neutral color.
  return "#60B0FF";
}

function hexToRgb(hex: string) {
  const normalized = clampHex(hex).slice(1);
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return { r, g, b };
}

function rgbaFromHex(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getReadableTextColor(bgHex: string) {
  const { r, g, b } = hexToRgb(bgHex);
  // Relative luminance (sRGB)
  const luminance =
    0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
  return luminance > 0.64 ? "#133854" : "#FFFFFF";
}

export function SponsorCard({
  badgeText,
  logoSrc,
  themeColor,
  logoAlt,
  logoPriority,
  companyName,
}: SponsorCardProps) {
  const accentRgba = rgbaFromHex(themeColor, 0.4);
  const accentShadowRgba = rgbaFromHex(themeColor, 0.08);
  const badgeTextColor = getReadableTextColor(themeColor);
  const resolvedTheme = clampHex(themeColor);

  const styleVars = {
    ["--sponsor-accent" as string]: resolvedTheme,
    ["--sponsor-accent-rgba" as string]: accentRgba,
    ["--sponsor-accent-shadow-rgba" as string]: accentShadowRgba,
    ["--badge-text" as string]: badgeTextColor,
  } as unknown as React.CSSProperties;

  return (
    <article className={styles.card} style={styleVars}>
      <div className={styles.badge} aria-label={`${badgeText} sponsor`}>
        <span className={styles.badgeText}>{badgeText}</span>
      </div>

      <div className={styles.logoWrap}>
        <Image
          className={styles.logo}
          src={logoSrc}
          alt={logoAlt || companyName || badgeText}
          fill
          sizes="(max-width: 768px) 45vw, 250px"
          loading={logoPriority ? "eager" : "lazy"}
          priority={logoPriority}
          unoptimized
        />
      </div>

      {companyName && (
        <div className={styles.info}>
          <h4 className={styles.companyName}>{companyName}</h4>
        </div>
      )}
    </article>
  );
}
