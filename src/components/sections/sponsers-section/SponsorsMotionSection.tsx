"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/src/components/ui/Skeleton/Skeleton";
import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import { staggerContainer, fadeInUp } from "@/src/lib/animations";
import { Container } from "@/src/components/layout/Container";
import { SponsorCard } from "./SponsorCard";
import { useApi } from "@/src/hooks/useApi";
import { sponsorsService } from "@/src/lib/api";
import type { SponsorApiItem } from "@/src/types/api";
import styles from "./SponsorsMotionSection.module.css";

import { getImageUrl } from "@/src/lib/helpers";

const SPONSOR_LOGO_SRC = "/sponsors/logosponser.png";

const FALLBACK_SPONSORS: SponsorApiItem[] = [
  { id: "government-1", type: { title: "Government", color: "#1E3A5F" }, image: SPONSOR_LOGO_SRC },
  { id: "advertising",  type: { title: "Advertising", color: "#8B5CF6" }, image: SPONSOR_LOGO_SRC },
  { id: "technical",    type: { title: "Technical",   color: "#0060A8" }, image: SPONSOR_LOGO_SRC },
  { id: "platinum",     type: { title: "Platinum",    color: "#002068" }, image: SPONSOR_LOGO_SRC },
  { id: "gold-1",       type: { title: "Gold",        color: "#2c2a26" }, image: SPONSOR_LOGO_SRC },
];

function getSponsorColor(type: string): string {
  const t = type.toLowerCase();
  if (t.includes('advertising')) return '#8B5CF6';
  if (t.includes('technical')) return '#0060A8';
  if (t.includes('platinum')) return '#E5E7EB';
  if (t.includes('gold')) return '#F59E0B';
  if (t.includes('silver')) return '#9CA3AF';
  if (t.includes('bronze')) return '#CD7F32';
  if (t.includes('government')) return '#1E3A5F';
  return '#42BEB3'; // default
}

interface SponsorsMotionSectionProps {
  title?: string | null;
  items?: any[];
  loading?: boolean;
}

export function SponsorsMotionSection({ 
  title, 
  items, 
  loading: parentLoading 
}: SponsorsMotionSectionProps) {
  const { data, loading: apiLoading } = useApi(() => {
    if (items) return Promise.resolve({ data: items } as any);
    return sponsorsService.getSponsors();
  });

  const loading = parentLoading ?? apiLoading;
  const rawData = items ?? (data as any) ?? FALLBACK_SPONSORS;
  const sponsorsData = Array.isArray(rawData) ? rawData : [];

  const sponsors: SponsorApiItem[] = sponsorsData.map((s: any, i: number) => {
    if (s.sponser_type) {
      return {
        id: `dyn-${i}`,
        type: {
          title: s.sponser_type.charAt(0).toUpperCase() + s.sponser_type.slice(1),
          color: getSponsorColor(s.sponser_type)
        },
        image: getImageUrl(s.media)
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
            {loading ? (
              <div className={styles.grid}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} variant="card" height={140} />
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
