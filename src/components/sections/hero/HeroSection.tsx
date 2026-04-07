"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "@/src/lib/animations";
import { ButtonPair } from "@/src/components/ui/Button/AnimatedButton";
import { SocialIcons } from "@/src/components/ui/SocialIcons/SocialIcons";
import { getImageUrl } from "@/src/lib/helpers";
import { Skeleton } from "@mantine/core";
import styles from "./HeroSection.module.css";

import { useParams } from "next/navigation";
import { heroTranslations, Lang } from "@/src/lib/i18n";

export function HeroSection({
  title,
  description,
  media,
  loading,
}: {
  title?: string | null;
  description?: string | null;
  media?: any;
  loading?: boolean;
}) {
  const { lang } = useParams();
  const currentLang = (lang as Lang) || 'en';
  const t = heroTranslations[currentLang];

  const isVideo = media?.mime_type?.startsWith("video");
  const mediaUrl = getImageUrl(media);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        {loading ? (
          <Skeleton height="100%" width="100%" animate />
        ) : isVideo ? (
          <video
            src={mediaUrl}
            autoPlay
            muted
            loop
            playsInline
            className={styles.bgVideo}
          />
        ) : (
          <img
            src={mediaUrl || "/images/Container.svg"}
            alt=""
            className={styles.bgImage}
            aria-hidden="true"
          />
        )}
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.textBlock}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {loading ? (
            <>
              <Skeleton height={60} width="80%" mb="xl" radius="xl" bg="gray.3" animate />
              <Skeleton height={20} width="100%" mb="xs" radius="xl" bg="gray.3" animate />
              <Skeleton height={20} width="90%" mb="xl" radius="xl" bg="gray.3" animate />
            </>
          ) : (
            <>
              <motion.h1 className={styles.heading} variants={fadeInLeft}>
                {title ? (
                  <>
                    {title.split('Future Being').map((part, index) => (
                      <React.Fragment key={index}>
                        {part}
                        {index === 0 && <><span className={styles.accent}> </span><br /></>}
                      </React.Fragment>
                    ))}
                  </>
                ) : (
                  <>
                    BE PART OF THE
                    <br />
                    <span className={styles.accent}>FUTURE BEING</span>
                    <br />
                    MADE NOW!
                  </>
                )}
              </motion.h1>

              <motion.p className={styles.description} variants={fadeInUp}>
                {description || "TEXPO LAND brings together global innovators, startups, investors, and industry leaders to explore the next generation of technology and digital transformation."}
              </motion.p>
            </>
          )}

          <motion.div className={styles.actions} variants={fadeInUp}>
            <ButtonPair pillHref="/book-a-stand" arrowHref="/about" variant="primary" size="lg">
              {t.discoverMore}
            </ButtonPair>
            <ButtonPair pillHref="/become-a-sponsor" arrowHref="/become-a-sponsor" variant="outline" size="lg">
              {t.becomeSponsor}
            </ButtonPair>
          </motion.div>
        </motion.div>
      </div>

   
    </section>
  );
}

 
