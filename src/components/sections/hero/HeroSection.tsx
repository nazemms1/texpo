"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "@/src/lib/animations";
import { ButtonPair } from "@/src/components/ui/Button/AnimatedButton";
 import { getImageUrl } from "@/src/lib/helpers";
 import styles from "./HeroSection.module.css";

import { useParams } from "next/navigation";
import { heroTranslations, Lang } from "@/src/lib/i18n";
import { Loader, Center } from "@mantine/core";

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

  const videoRef = useRef<HTMLVideoElement>(null);
  const loadedSrcRef = useRef<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo || !mediaUrl) return;
 
    if (loadedSrcRef.current !== mediaUrl) {
      loadedSrcRef.current = mediaUrl;
      video.src = mediaUrl;
      video.load();
    }
  }, [isVideo, mediaUrl]);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        {loading ? (
          <Center h="100vh" w="100%" style={{ background: '#fff' }}>
            <div className={styles.premiumSpecs}>
              <motion.div
                className={styles.sleekSpinner}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
               <motion.div
                className={styles.spinnerPulse}
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </Center>
        ) : (
          <>
            {isVideo ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
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
                  {title.split(/(Future Being)/i).map((part, index, array) => (
                    <React.Fragment key={index}>
                      {/  Being/i.test(part) ? (
                        <>
                          <span className={styles.accent}>{part}</span>
                          <br />
                        </>
                      ) : (
                        part
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
                  pillHref="/become-a-sponsor"
                  arrowHref="/become-a-sponsor"
                  variant="primary"
                  size="lg"
                >
                  {t.discoverMore}
                </ButtonPair>

               
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
