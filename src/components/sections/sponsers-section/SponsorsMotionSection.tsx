"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import { staggerContainer, fadeInUp } from "@/src/lib/animations";
import { Container } from "@/src/components/layout/Container";
import { SponsorCard } from "./SponsorCard";
import styles from "./SponsorsMotionSection.module.css";

const SPONSOR_LOGO_SRC = "/sponsors/logosponser.png";

type BackendSponsorItem = {
  id: string;
  type: { title: string; color: string };
  image: string;
};

const DEFAULT_SPONSORS: BackendSponsorItem[] = [
  {
    id: "government-1",
    type: { title: "Government", color: "#1E3A5F" },
    image: SPONSOR_LOGO_SRC,
  },
  {
    id: "advertising",
    type: { title: "Advertising", color: "#8B5CF6" },
    image: SPONSOR_LOGO_SRC,
  },
  {
    id: "technical",
    type: { title: "Technical", color: "#2EC4B6" },
    image: SPONSOR_LOGO_SRC,
  },
  {
    id: "platinum",
    type: { title: "Platinum", color: "#E5E7EB" },
    image: SPONSOR_LOGO_SRC,
  },
  {
    id: "gold-1",
    type: { title: "Gold", color: "#F59E0B" },
    image: SPONSOR_LOGO_SRC,
  },
  {
    id: "gold-2",
    type: { title: "Gold", color: "#F59E0B" },
    image: SPONSOR_LOGO_SRC,
  },
  {
    id: "silver-1",
    type: { title: "Silver", color: "#9CA3AF" },
    image: SPONSOR_LOGO_SRC,
  },
  {
    id: "silver-2",
    type: { title: "Silver", color: "#9CA3AF" },
    image: SPONSOR_LOGO_SRC,
  },
  {
    id: "government-2",
    type: { title: "Government", color: "#1E3A5F" },
    image: SPONSOR_LOGO_SRC,
  },
];

export function SponsorsMotionSection() {
  return (
    <section className={styles.section}>
      <Container size="full">
        <div className={styles.inner}>
          <header className={styles.header}>
            <SectionTitle title="SPONSORS" align="center" />
         
          </header>

          <div className={styles.scrollWrapper}>
            <motion.div
              className={styles.grid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
            >
              {DEFAULT_SPONSORS.map((s, index) => (
                <motion.div
                  key={s.id}
                  className={styles.card}
                  variants={fadeInUp}
                >
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
