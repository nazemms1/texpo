"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "@/src/lib/animations";
import { ButtonPair } from "@/src/components/ui/Button/AnimatedButton";
 import { getImageUrl } from "@/src/lib/helpers";
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
  const currentLang = (lang as Lang) || "en";
  const t = heroTranslations[currentLang];

  const isVideo = media?.mime_type?.startsWith("video");
  const mediaUrl = getImageUrl(media);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        {!loading && (
          <>
            {isVideo ? (
              <video
                src={mediaUrl}
                autoPlay
                muted
                loop
                playsInline
                className={styles.bgVideo}
              />
            ) : mediaUrl ? (
              <img
                src={mediaUrl}
                alt=""
                className={styles.bgImage}
                aria-hidden="true"
              />
            ) : null}
            <img
              src="/images/background-hero.svg"
              alt=""
              className={styles.bgSvgOverlay}
              aria-hidden="true"
            />
          </>
        )}
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.textBlock}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {!loading && (
            <>
              {title && (
                <motion.h1 className={styles.heading} variants={fadeInLeft}>
                  {title.split("Future Being").map((part, index) => (
                    <React.Fragment key={index}>
                      {part}
                      {index === 0 && (
                        <>
                          <span className={styles.accent}> </span>
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </motion.h1>
              )}

              {description && (
                <motion.p className={styles.description} variants={fadeInUp}>
                  {description}
                </motion.p>
              )}

              <motion.div className={styles.actions} variants={fadeInUp}>
                <ButtonPair
                  pillHref="/book-a-stand"
                  arrowHref="/about"
                  variant="primary"
                  size="lg"
                >
                  {t.discoverMore}
                </ButtonPair>

                <ButtonPair
                  pillHref="/become-a-sponsor"
                  arrowHref="/become-a-sponsor"
                  variant="outline"
                  size="lg"
                >
                  {t.becomeSponsor}
                </ButtonPair>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
