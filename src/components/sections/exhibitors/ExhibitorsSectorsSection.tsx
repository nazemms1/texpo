"use client";

import { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Container } from "@/src/components/layout/Container";
import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import { SectorCard } from "./SectorCard";
import styles from "./ExhibitorsSectorsSection.module.css";
import { getImageUrl } from "@/src/lib/helpers";


const SECTORS = [
  {
    title: "Artificial Intelligence\n& Machine Learning",
    image: "/images/sectors/sector-ai-ml.png",
  },
  {
    title: "Cybersecurity",
    image: "/images/sectors/sector-right-near.png",
  },
  {
    title: "Semiconductors\n& Hardware",
    image: "/images/sectors/sector-left-near.png",
  },
  {
    title: "Cloud Computing\n& Infrastructure",
    image: "/images/sectors/sector-right-far.png",
  },
  {
    title: "Smart Cities\n& IoT",
    image: "/images/sectors/sector-left-far.png",
  },
];

function getLoopDistance(index: number, current: number, total: number) {
  const raw = index - current;
  return ((((raw + total / 2) % total) + total) % total) - total / 2;
}

interface ExhibitorSectorItem {
  title?: string;
  media?: any;
  image?: any;
}

interface ExhibitorsSectorsSectionProps {
  title?: string | null;
  description?: string | null;
  items?: ExhibitorSectorItem[];
  loading?: boolean;
}

export function ExhibitorsSectorsSection({
  title,
  description,
  items,
  loading
}: ExhibitorsSectorsSectionProps) {
  const displayItems = (items && items.length > 0) ? items : SECTORS;
  const total = displayItems.length;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [offsets, setOffsets] = useState<number[]>(
    displayItems.map((_, i) => (i === 0 ? 0 : i)),
  );

  const visualActiveIndex = offsets.reduce((bestIdx, value, idx, arr) => {
    return Math.abs(value) < Math.abs(arr[bestIdx] ?? Infinity) ? idx : bestIdx;
  }, 0);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!embla || isPaused) return;

    const interval = setInterval(() => {
      embla.scrollNext();
    }, 1000);

    const updateArc = () => {
      const scrollProgress = embla.scrollProgress();
      const current = ((scrollProgress * total) % total + total) % total;

      setOffsets(
        displayItems.map((_, i) => getLoopDistance(i, current, total)),
      );
      setActiveIndex(embla.selectedScrollSnap());
    };

    updateArc();
    embla.on("scroll", updateArc);
    embla.on("select", updateArc);
    embla.on("reInit", updateArc);
    embla.on("settle", updateArc);

    return () => {
      if (interval) clearInterval(interval);
      embla.off("scroll", updateArc);
      embla.off("select", updateArc);
      embla.off("reInit", updateArc);
      embla.off("settle", updateArc);
    };
  }, [embla, total, displayItems, isPaused]);

  if (loading && !items) return null;

  const cleanDescription = description
    ? description.split('including:')[0] + 'including:'
    : "The TEXPO Land exhibition features a wide range of companies and institutions from various technological and digital transformation sectors, showcasing advanced solutions, products, and services across a variety of fields, including:";

  return (
    <section className={styles.section}>
      <Container size="full">
        <div className={styles.inner}>
          <header className={styles.header}>
            <SectionTitle
              title={title || "EXHIBITORS AND SECTORS PARTICIPATING IN TEXPO LAND | 2ND EDITION"}
              align="center"
            />
            <p className={styles.subtitle}>
              {cleanDescription}
            </p>
          </header>

          <p className={styles.fillText}>At this time, technology will fill the space.</p>

          <div
            className={styles.carouselContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={styles.stage3D}>
              {displayItems.map((sector: any, index) => (
                <SectorCard
                  key={index}
                  title={sector.title || ""}
                  image={getImageUrl(sector.media || sector.image) || ""}
                  offset={offsets[index] ?? 0}
                  isActive={index === visualActiveIndex}
                  total={total}
                />
              ))}
            </div>

            <div className={styles.interactionLayer}>
              <Carousel
                className={styles.carousel}
                slideSize="100%"
                withControls={false}
                withIndicators={false}
                emblaOptions={{
                  align: "center",
                  loop: true,
                  skipSnaps: false,
                  duration: 25,
                  watchDrag: false,
                }}
                getEmblaApi={setEmbla}
                onSlideChange={setActiveIndex}
              >
                {displayItems.map((sector, index) => (
                  <Carousel.Slide key={index}>
                    <div className={styles.invisibleSlide} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
          </div>

          <div className={styles.dots}>
            {displayItems.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                onClick={() => {
                  setActiveIndex(i);
                  embla?.scrollTo(i);
                }}
                aria-label={`Go to sector ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
