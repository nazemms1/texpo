import styles from './BecomeSponsorIntroSection.module.css';

interface BecomeSponsorIntroSectionProps {
  id?: string;
}

export function BecomeSponsorIntroSection({
  id,
}: BecomeSponsorIntroSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          YOUR SPACE TO MAKE YOUR BRAND&apos;S MARK
        </h2>
        <p className={styles.subtitle}>
          Join the sponsors at the most prominent exhibition for technology and
          innovation, and elevate your brand&apos;s presence in front of
          investors, decision-makers, and entrepreneurs.
        </p>
      </div>

      <div className={styles.pattern} aria-hidden="true" />
    </section>
  );
}

