import { IconCircleCheck, IconRosetteDiscountCheck } from '@tabler/icons-react';
import Image from 'next/image';

import type { SponsorTierDefinition } from './sponsorshipTiersData';

import styles from './SponsorTierCard.module.css';

export interface SponsorTierCardProps {
  tier: SponsorTierDefinition;
  ctaHref: string;
}

export function SponsorTierCard({ tier, ctaHref }: SponsorTierCardProps) {
  const { variant, title, subtitle, features, ctaLabel, badge, iconSrc } =
    tier;

  return (
    <article
      className={`${styles.card} ${styles[variant]}`}
      aria-label={`${title} sponsorship tier`}
    >
      {badge ? (
        <span className={styles.badge} aria-hidden="true">
          {badge}
        </span>
      ) : null}

      <div className={styles.iconWrap}>
        <Image
          className={styles.tierIcon}
          src={iconSrc}
          alt=""
          width={32}
          height={32}
          unoptimized
        />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>

      <ul className={styles.features}>
        {features.map((text) => (
          <li key={text} className={styles.feature}>
            {variant === 'diamond' ? (
              <IconRosetteDiscountCheck
                className={`${styles.check} ${styles.checkSeal}`}
                size={22}
                stroke={1.85}
                aria-hidden
              />
            ) : (
              <IconCircleCheck
                className={styles.check}
                size={20}
                stroke={1.85}
                aria-hidden
              />
            )}
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <a href={ctaHref} className={styles.cta}>
        {ctaLabel}
      </a>
    </article>
  );
}
