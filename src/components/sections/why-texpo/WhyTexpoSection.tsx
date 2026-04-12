"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import {
  IconChartBar,
  IconUsers,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";
import styles from "./WhyTexpoSection.module.css";
import { getImageUrl } from "@/src/lib/helpers";

export function WhyTexpoSection({
  title,
  items,
  loading
}: {
  title?: string;
  items?: { title: string; description: string; image: any }[];
  loading?: boolean;
}) {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const displayTitle = title || "WHY TEXPO?";

  useEffect(() => {
    if (!embla || isPaused) return;

    const intervalId = setInterval(() => {
      embla.scrollNext();
    }, 1500);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [embla, isPaused]);

  if (!items || items.length === 0) return null;

  const displayCards = items.map((item, idx) => {
    const IconsSequence = [IconChartBar, IconUsers, IconUsers, IconBuildingSkyscraper];
    return {
      title: item.title,
      body: item.description,
      image: getImageUrl(item.image),
      Icon: IconsSequence[idx % IconsSequence.length],
    };
  });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {displayTitle}
        </motion.h2>

        <div 
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            className={styles.carousel}
            slideSize={{ base: "100%", sm: "50%", md: "33.333333%", lg: "459px" }}
            slideGap="xl"


            withControls={false}
            withIndicators={false}
            emblaOptions={{ duration: 20, loop: true }}
            getEmblaApi={setEmbla}
            onSlideChange={setActiveIndex}
          >
            {displayCards.map(({ Icon, title, body, image }, i) => (
              <Carousel.Slide key={`${title}-${i}`}>
                <div className={styles.card}>
                  <div className={styles.iconWrap}>
                    {image && image.length > 25 ? (
                      <img src={image} alt="" className={styles.cardImg} style={{ width: '50%', height: '50%', objectFit: 'contain' }} />
                    ) : (
                      <Icon size={28} />
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <div className={styles.cardBody}>
                    {body.split('.').filter(s => s.trim()).map((segment, index, array) => (
                      <span key={index} style={{ display: 'block', marginBottom: index < array.length - 1 ? '0.5rem' : 0 }}>
                        {segment.trim()}.
                      </span>
                    ))}
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>

        <div className={styles.dots}>
          {displayCards.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
