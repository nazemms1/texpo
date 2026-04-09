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

import { getImageUrl } from "@/src/lib/helpers";
import { useDisclosure } from "@mantine/hooks";
import { MapModal } from "../book-a-stand/MapModal";
import styles from "./AboutExhibition.module.css";

interface AboutExhibitionProps {
  variant?: "home" | "about";
  hideButtons?: boolean;
  title?: string | null;
  description?: string | null;
  image?: any;
  loading?: boolean;
  youtubeUrl?: string | null;
}

export function AboutExhibition({
  variant = "home",
  hideButtons = false,
  title,
  description,
  image,
  loading,
  youtubeUrl,
}: AboutExhibitionProps) {
  const { lang } = useParams();
  const currentLang = (lang as Lang) || 'en';
  const t = aboutTranslations[currentLang];
  const [opened, { open, close }] = useDisclosure(false);

  if (!title && !description && !loading) return null;

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
              {variant === "about" && <ArrowCircle href={youtubeUrl || "#"} variant="dashed" />}
              <ButtonPair onClick={open} variant="primary">
                 {t.viewMap}
              </ButtonPair>
              {variant === "home" && (
                <ButtonPair pillHref={youtubeUrl || "#"} arrowHref={youtubeUrl || "#"} variant="outline">
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

      <MapModal opened={opened} onClose={close} />
    </section>
  );
}
