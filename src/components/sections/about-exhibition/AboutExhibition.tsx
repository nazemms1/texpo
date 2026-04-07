"use client";

import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  fadeInUp,
} from "@/src/lib/animations";
import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import { ArrowCircle, ButtonPair } from "@/src/components/ui/Button/AnimatedButton";
import { useParams } from "next/navigation";
import { aboutTranslations, Lang } from "@/src/lib/i18n";
import { Stack } from "@mantine/core";
import { Skeleton } from "@/src/components/ui/Skeleton/Skeleton";
import { getImageUrl } from "@/src/lib/helpers";
import styles from "./AboutExhibition.module.css";

interface AboutExhibitionProps {
  variant?: "home" | "about";
  hideButtons?: boolean;
  title?: string | null;
  description?: string | null;
  image?: any;
  loading?: boolean;
}

export function AboutExhibition({
  variant = "home",
  hideButtons = false,
  title,
  description,
  image,
  loading,
}: AboutExhibitionProps) {
  const { lang } = useParams();
  const currentLang = (lang as Lang) || 'en';
  const t = aboutTranslations[currentLang];

  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Skeleton variant="title" width="60%" height={38} />
            <Stack gap="xs" mt="md">
              <Skeleton variant="text" width="100%" height={14} />
              <Skeleton variant="text" width="95%" height={14} />
              <Skeleton variant="text" width="80%" height={14} />
            </Stack>
            <div className={styles.actions} style={{ marginTop: '2.5rem', display: 'flex', gap: '1.25rem' }}>
              <Skeleton variant="button" width={140} height={46} />
              <Skeleton variant="button" width={140} height={46} />
            </div>
          </div>
          <div className={styles.right}>
            <Skeleton variant="image" height={320} width="100%" radius="24px" />
          </div>
        </div>
      </section>
    );
  }

   if (!title && !description) return null;

  return (
    <section className={styles.section}>
      <div className={styles.waveTop} />

      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeInLeft}>
            <SectionTitle title={title || ""} />
          </motion.div>

          <motion.p className={styles.body} variants={fadeInUp}>
            {description}
          </motion.p>

          {!hideButtons && (
            <motion.div className={styles.actions} variants={fadeInUp}>
              {variant === "about" && <ArrowCircle href="#" variant="dashed" />}
              <ButtonPair pillHref="#" arrowHref="#" variant="primary">
                 {t.viewMap}
              </ButtonPair>
              {variant === "home" && (
                <ButtonPair pillHref="#" arrowHref="#" variant="outline">
                   {t.watch}
                </ButtonPair>
              )}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={styles.right}
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={getImageUrl(image) || "/logos/texpo.svg"}
            alt=""
            className={styles.bgImage}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
