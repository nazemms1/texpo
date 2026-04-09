"use client";

import { motion } from "framer-motion";

import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import { staggerContainer, fadeInUp } from "@/src/lib/animations";
import { Container } from "@/src/components/layout/Container";
import { SponsorCard } from "./SponsorCard";
import type { SponsorApiItem } from "@/src/types/api";
import styles from "./SponsorsMotionSection.module.css";

const SPONSOR_LOGO_SRC = "/sponsors/logosponser.png";

const FALLBACK_SPONSORS: SponsorApiItem[] = [
  { id: "government-1", type: { title: "Government", color: "#1E3A5F" }, image: SPONSOR_LOGO_SRC },
  { id: "advertising",  type: { title: "Advertising", color: "#8B5CF6" }, image: SPONSOR_LOGO_SRC },
  { id: "technical",    type: { title: "Technical",   color: "#0060A8" }, image: SPONSOR_LOGO_SRC },
  { id: "platinum",     type: { title: "Platinum",    color: "#002068" }, image: SPONSOR_LOGO_SRC },
  { id: "gold-1",       type: { title: "Gold",        color: "#2c2a26" }, image: SPONSOR_LOGO_SRC },
];

interface SponsorsMotionSectionProps {
  title?: string | null;
  items?: any[];
  loading?: boolean;
}

export function SponsorsMotionSection({ 
  title, 
  items, 
  loading = false 
}: SponsorsMotionSectionProps) {
  const rawData = items ?? FALLBACK_SPONSORS;
  const sponsorsData = Array.isArray(rawData) ? rawData : [];

  const sponsors: SponsorApiItem[] = sponsorsData.map((s: any, i: number) => {
    if (s.sponsor_type) {
      return {
        id: `dyn-${i}`,
        type: {
          title: s.sponsor_type.name,
          color: s.sponsor_type.color
        },
        image: s.logo?.url || SPONSOR_LOGO_SRC,
        name: s.company_name
      };
    }
    return s;
  });

  return (
    <section className={styles.section}>
      <Container size="full">
        <div className={styles.inner}>
          <header className={styles.header}>
            <SectionTitle title={title || "SPONSORS"} align="center" />
          </header>

          {/* {error && (
            <p style={{ textAlign: "center", color: "#ef4444", marginBottom: "1rem", fontSize: "0.875rem" }}>
              {error}
            </p>
          )} */}

          <div className={styles.scrollWrapper}>
              <motion.div
                className={styles.grid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
              >
                {sponsors.map((s, index) => (
                  <motion.div key={s.id} className={styles.card} variants={fadeInUp}>
                    <SponsorCard
                      badgeText={s.type.title}
                      logoSrc={s.image}
                      themeColor={s.type.color}
                      logoAlt={`${s.type.title} sponsor logo`}
                      logoPriority={index === 0}
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
