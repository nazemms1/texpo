"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/src/lib/animations";
import {
  IconChartBar,
  IconUsers,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";
import styles from "./WhyTexpoSection.module.css";
import { Skeleton } from "@mantine/core";
import { getImageUrl } from "@/src/lib/helpers";

const cards = [
  {
    Icon: IconChartBar,
    title: "A UNIQUE INVESTMENT OPPORTUNITY",
    body: "The exhibition represents a golden opportunity for investors to access vast and dynamic new markets where the demand for advanced technological solutions is rapidly growing. During this digital transformation phase, Syria is striving for modernization across all sectors, creating an ideal environment for technology investment.",
    image: "",
  },
  {
    Icon: IconUsers,
    title: "AN OPPORTUNITY TO CONNECT WITH DECISION-MAKERS",
    body: "The exhibition provides participants with a direct opportunity to engage with investors, major companies, government entities, and entrepreneurs, facilitating the development of strategic relationships and future partnerships.",
    image: "",
  },
  {
    Icon: IconUsers,
    title: "PROMISING PARTNERSHIP AND INVESTMENT OPPORTUNITIES",
    body: "The exhibition serves as a meeting point for companies, entrepreneurs, and investors, opening up opportunities for building strategic partnerships and exploring real investment projects in the Syrian market, especially in the rapidly growing technology and innovation sector.",
    image: "",
  },
  {
    Icon: IconBuildingSkyscraper,
    title: "LEVERAGING TRADE AND NETWORKING OPPORTUNITIES",
    body: "At TEXPO, exhibitors and visitors benefit from extensive trade connections and networking events that bring together industry leaders, investors, and innovators from across the region, accelerating business growth and innovation.",
    image: "",
  },
];



export function WhyTexpoSection({ 
  title, 
  items, 
  loading 
}: { 
  title?: string; 
  items?: { title: string; description: string; image: any }[];
  loading?: boolean;
}) {
  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <Skeleton bg="gray.3" height={40} width="60%" radius="xl" mx="auto" mb="xl" animate />
          <div className={styles.grid}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={styles.card}>
                <Skeleton bg="gray.3" height={60} width={60} radius="xl" mb="md" animate />
                <Skeleton bg="gray.3" height={25} width="80%" radius="xl" mb="sm" animate />
                <Skeleton bg="gray.3" height={15} radius="xl" mb="xs" animate />
                <Skeleton bg="gray.3" height={15} radius="xl" mb="xs" animate />
                <Skeleton bg="gray.3" height={15} width="60%" radius="xl" animate />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!items || items.length === 0) return null;

  const displayTitle = title || "WHY YOU SHOULD BE PART OF TEXPO LAND | 2ND EDITION?";

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
          viewport={{ once: false, amount: 0.3 }}
        >
          {displayTitle}
        </motion.h2>

        <div className={styles.scrollWrapper}>
          <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {displayCards.map(({ Icon, title, body, image }, i) => (
              <motion.div
                key={`${title}-${i}`}
                className={styles.card}
                variants={fadeInUp}
              >
                <div className={styles.iconWrap}>
                  {image && image.length > 25 ? (
                    <img src={image} alt="" className={styles.cardImg} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  ) : (
                    <Icon size={28} />
                  )}
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardBody}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
