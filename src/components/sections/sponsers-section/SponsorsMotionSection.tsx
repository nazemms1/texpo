"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";

import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import { staggerContainer, fadeInUp } from "@/src/lib/animations";
import { Container } from "@/src/components/layout/Container";
import { SponsorCard } from "./SponsorCard";
import type { SponsorApiItem } from "@/src/types/api";
import { sponsorsTranslations, type Lang } from "@/src/lib/i18n";
import styles from "./SponsorsMotionSection.module.css";
import { Key } from "react";

const SPONSOR_LOGO_SRC = "/sponsors/logosponser.png";

const FALLBACK_SPONSORS: SponsorApiItem[] = [
  { id: "government-1", type: { title: "Government", color: "#1E3A5F" }, image: SPONSOR_LOGO_SRC, name: "Sample Company" },
  { id: "advertising",  type: { title: "Advertising", color: "#8B5CF6" }, image: SPONSOR_LOGO_SRC, name: "Sample Company" },
  { id: "technical",    type: { title: "Technical",   color: "#0060A8" }, image: SPONSOR_LOGO_SRC, name: "Sample Company" },
  { id: "platinum",     type: { title: "Platinum",    color: "#002068" }, image: SPONSOR_LOGO_SRC, name: "Sample Company" },
  { id: "gold-1",       type: { title: "Gold",        color: "#2c2a26" }, image: SPONSOR_LOGO_SRC, name: "Sample Company" },
];

interface SponsorsMotionSectionProps {
  title?: string | null;
  items?: any;
  loading?: boolean;
}

export function SponsorsMotionSection({ 
  title, 
  items, 
  loading = false 
}: SponsorsMotionSectionProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || 'en';
  const t = sponsorsTranslations[lang];

   const mapToSponsor = (s: any, i: number): SponsorApiItem => {
    if (s.sponsor_type) {
      return {
        id: `dyn-${i}`,
        type: {
          title: s.sponsor_type.name,
          color: s.sponsor_type.color,
          icon: s.sponsor_type.icon?.url
        },
        image: s.logo?.url || SPONSOR_LOGO_SRC,
        name: s.company_name
      };
    }
    return s;
  };

  // If items is an object, we render sections for each type
  if (items && typeof items === "object" && !Array.isArray(items)) {
    // We explicitly look for the two categories mentioned
    const categories = [
      { key: "strategic_partners", data: items.strategic_partners },
      { key: "normal_sponsors", data: items.normal_sponsors }
    ].filter(cat => Array.isArray(cat.data) && cat.data.length > 0);

    if (categories.length > 0) {
      return (
        <section className={styles.section}>
          <Container size="full">
            <div className={styles.inner}>
              {categories.map((cat, sectionIdx) => {
                const sponsors = cat.data.map(mapToSponsor);
                const groupTitle = t[cat.key as keyof typeof t] || cat.key.replace(/_/g, " ").toUpperCase();

                return (
                  <div key={cat.key} className={styles.categorySection}>
                    <header className={styles.header}>
                      <SectionTitle title={groupTitle} align="center" />
                    </header>
                    <div className={styles.scrollWrapper}>
                      <motion.div
                        className={styles.grid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                      >
                        {sponsors.map((s: { id: Key | null | undefined; type: { title: string; color: string; }; image: string; name: string | undefined; }, index: number) => (
                          <motion.div key={s.id} className={styles.card} variants={fadeInUp}>
                            <SponsorCard
                              badgeText={s.type.title}
                              badgeIcon={s.type.icon}
                              logoSrc={s.image}
                              themeColor={s.type.color}
                              logoAlt={`${s.type.title} sponsor logo`}
                              logoPriority={sectionIdx === 0 && index === 0}
                              companyName={s.name}
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      );
    }
  }

  // Fallback / Array behavior (single section)
  const sponsorsData = Array.isArray(items) && items.length > 0 ? items : FALLBACK_SPONSORS;
  const sponsors = sponsorsData.map(mapToSponsor);

  return (
    <section className={styles.section}>
      <Container size="full">
        <div className={styles.inner}>
          <header className={styles.header}>
            <SectionTitle title={title || "SPONSORS"} align="center" />
          </header>

          <div className={styles.scrollWrapper}>
            <motion.div
              className={styles.grid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
            >
              {sponsors.map((s, index: number) => (
                <motion.div key={s.id} className={styles.card} variants={fadeInUp}>
                  <SponsorCard
                    badgeText={s.type.title}
                    badgeIcon={s.type.icon}
                    logoSrc={s.image}
                    themeColor={s.type.color}
                    logoAlt={`${s.type.title} sponsor logo`}
                    logoPriority={index === 0}
                    companyName={s.name}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
