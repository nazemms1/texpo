"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@mantine/core";
import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import { staggerContainer, fadeInUp } from "@/src/lib/animations";
import { Container } from "@/src/components/layout/Container";
import { SponsorCard } from "./SponsorCard";
import { useApi } from "@/src/hooks/useApi";
import { sponsorsService } from "@/src/lib/api";
import type { SponsorApiItem } from "@/src/types/api";
import styles from "./SponsorsMotionSection.module.css";

const SPONSOR_LOGO_SRC = "/sponsors/logosponser.png";

const FALLBACK_SPONSORS: SponsorApiItem[] = [
  { id: "government-1", type: { title: "Government", color: "#1E3A5F" }, image: SPONSOR_LOGO_SRC },
  { id: "advertising",  type: { title: "Advertising", color: "#8B5CF6" }, image: SPONSOR_LOGO_SRC },
  { id: "technical",    type: { title: "Technical",   color: "#2EC4B6" }, image: SPONSOR_LOGO_SRC },
  { id: "platinum",     type: { title: "Platinum",    color: "#E5E7EB" }, image: SPONSOR_LOGO_SRC },
  { id: "gold-1",       type: { title: "Gold",        color: "#F59E0B" }, image: SPONSOR_LOGO_SRC },
  { id: "gold-2",       type: { title: "Gold",        color: "#F59E0B" }, image: SPONSOR_LOGO_SRC },
  { id: "silver-1",     type: { title: "Silver",      color: "#9CA3AF" }, image: SPONSOR_LOGO_SRC },
  { id: "silver-2",     type: { title: "Silver",      color: "#9CA3AF" }, image: SPONSOR_LOGO_SRC },
  { id: "government-2", type: { title: "Government",  color: "#1E3A5F" }, image: SPONSOR_LOGO_SRC },
];

export function SponsorsMotionSection() {
  const { data, loading, error } = useApi(() => sponsorsService.getSponsors());

  const sponsors: SponsorApiItem[] = data ?? FALLBACK_SPONSORS;

  return (
    <section className={styles.section}>
      <Container size="full">
        <div className={styles.inner}>
          <header className={styles.header}>
            <SectionTitle title="SPONSORS" align="center" />
        
          </header>

          {/* {error && (
            <p style={{ textAlign: "center", color: "#ef4444", marginBottom: "1rem", fontSize: "0.875rem" }}>
              {error}
            </p>
          )} */}

          <div className={styles.scrollWrapper}>
            {loading ? (
              <div className={styles.grid}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} height={160} radius="md" />
                ))}
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
