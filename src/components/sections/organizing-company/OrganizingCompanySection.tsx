"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";
import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import styles from "./OrganizingCompanySection.module.css";
import { getImageUrl } from "@/src/lib/helpers";
import { Stack } from "@mantine/core";
import { Skeleton } from "@/src/components/ui/Skeleton/Skeleton";

interface OrganizingCompanySectionProps {
  title?: string | null;
  description?: string | null;
  companyName?: string | null;
  logo?: any;
  loading?: boolean;
}

export function OrganizingCompanySection({ 
  title, 
  description, 
  companyName, 
  logo, 
  loading 
}: OrganizingCompanySectionProps) {
  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <Skeleton variant="title" width="40%" mx="auto" mb="xl" />
          <Stack gap="xs">
            <Skeleton variant="text" width="100%" height={12} />
            <Skeleton variant="text" width="95%" height={12} />
            <Skeleton variant="text" width="80%" height={12} mb="xl" />
          </Stack>
          <Skeleton variant="image" height={120} width={200} mx="auto" my="xl" />
          <Stack gap="xs">
            <Skeleton variant="text" width="100%" height={12} />
            <Skeleton variant="text" width="90%" height={12} />
          </Stack>
        </div>
      </section>
    );
  }

  const paragraphs = description 
    ? description.split('\n\n').filter(p => p.trim()) 
    : [];

  const finalTitle = title 
    ? `${title.trim()} "${companyName || 'EVENTA'}"?` 
    : `WHO IS THE ORGANIZING COMPANY "${companyName || 'EVENTA'}"?`;

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <motion.div variants={fadeInUp}>
          <SectionTitle
            title={finalTitle}
            align="center"
          />
        </motion.div>

        {paragraphs.length > 0 ? (
          <>
            {/* Top paragraphs (first 2) */}
            {paragraphs.slice(0, 2).map((p, i) => (
              <motion.p key={`top-${i}`} className={styles.body} variants={fadeInUp}>
                {p}
              </motion.p>
            ))}

            {/* Logo in the middle */}
            <motion.div className={styles.logoWrapper} variants={fadeInUp}>
              <img
                src={getImageUrl(logo) || "/logos/texpo.svg"}
                alt={companyName || "TEXPO"}
                className={styles.logo}
              />
            </motion.div>

            {/* Bottom paragraphs (remaining) */}
            {paragraphs.slice(2).map((p, i) => (
              <motion.p key={`bottom-${i}`} className={styles.body} variants={fadeInUp}>
                {p}
              </motion.p>
            ))}
          </>
        ) : (
          <>
            <motion.p className={styles.body} variants={fadeInUp}>
              The organizing company for the TEXPO exhibition has extensive and long-standing experience in organizing and creating specialized exhibitions and conferences. Since its inception in 2024, the company has operated with a vision to deliver high-level events that combine professionalism, innovation, and quality execution. Throughout its journey, the company has managed and executed a variety of projects, exhibitions, and conferences across different sectors, with a particular focus on technology and entrepreneurial fields, which has enriched its portfolio with valuable experience and successes.
            </motion.p>
            <motion.p className={styles.body} variants={fadeInUp}>
              The company relies on a comprehensive team of specialized talents,
              whose expertise spans over 15 years in event management, strategic
              planning, content creation, and operations, led by an executive team
              with a clear vision and a high ability to make decisions.
            </motion.p>

            <motion.div className={styles.logoWrapper} variants={fadeInUp}>
              <img
                src="/logos/texpo.svg"
                alt="TEXPO Yalla Tech"
                className={styles.logo}
              />
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
}
