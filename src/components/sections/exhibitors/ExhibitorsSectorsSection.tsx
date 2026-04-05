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

export function ExhibitorsSectorsSection() {
  const total = SECTORS.length;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [offsets, setOffsets] = useState<number[]>(
    SECTORS.map((_, i) => (i === 0 ? 0 : i)),
  );

  const visualActiveIndex = offsets.reduce((bestIdx, value, idx, arr) => {
    return Math.abs(value) < Math.abs(arr[bestIdx] ?? Infinity) ? idx : bestIdx;
  }, 0);

  useEffect(() => {
    if (!embla) return;

    const updateArc = () => {
      const scrollProgress = embla.scrollProgress();
 
      const current = ((scrollProgress * total) % total + total) % total;

      setOffsets(
        SECTORS.map((_, i) => getLoopDistance(i, current, total)),
      );
      setActiveIndex(embla.selectedScrollSnap());
    };

    updateArc();
    embla.on("scroll", updateArc);
    embla.on("select", updateArc);
    embla.on("reInit", updateArc);
    embla.on("settle", updateArc);

    return () => {
      embla.off("scroll", updateArc);
      embla.off("select", updateArc);
      embla.off("reInit", updateArc);
      embla.off("settle", updateArc);
    };
  }, [embla, total]);

  return (
    <section className={styles.section}>
      <Container size="full">
        <div className={styles.inner}>
          <header className={styles.header}>
            <SectionTitle
              title="EXHIBITORS AND SECTORS PARTICIPATING IN TEXPO LAND | 2ND EDITION"
              align="center"
            />
            <p className={styles.subtitle}>
              The TEXPO Land exhibition features a wide range of companies and
              institutions from various technological and digital transformation
              sectors, showcasing advanced solutions, products, and services
              across a variety of fields, including:
            </p>
          </header>

          <div className={styles.carouselContainer}>
             <div className={styles.stage3D}>
              {SECTORS.map((sector, index) => (
                <SectorCard
                  key={sector.title}
                  title={sector.title}
                  image={sector.image}
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
                  duration: 15,
                }}
                getEmblaApi={setEmbla}
                onSlideChange={setActiveIndex}
              >
                {SECTORS.map((sector) => (
                  <Carousel.Slide key={sector.title}>
                    <div className={styles.invisibleSlide} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
          </div>

          <div className={styles.dots}>
            {SECTORS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                onClick={() => {
                  setActiveIndex(i);
                  setOffsets(SECTORS.map((_, idx) => getLoopDistance(idx, i, total)));
                  embla?.scrollTo(i, true);
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
