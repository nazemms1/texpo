"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/src/lib/animations";
import {
  IconChartBar,
  IconUsers,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";
import styles from "./WhyTexpoSection.module.css";

const cards = [
  {
    Icon: IconChartBar,
    title: "A UNIQUE INVESTMENT OPPORTUNITY",
    body: "The exhibition represents a golden opportunity for investors to access vast and dynamic new markets where the demand for advanced technological solutions is rapidly growing. During this digital transformation phase, Syria is striving for modernization across all sectors, creating an ideal environment for technology investment.",
  },
  {
    Icon: IconUsers,
    title: "AN OPPORTUNITY TO CONNECT WITH DECISION-MAKERS",
    body: "The exhibition provides participants with a direct opportunity to engage with investors, major companies, government entities, and entrepreneurs, facilitating the development of strategic relationships and future partnerships.",
  },
  {
    Icon: IconUsers,
    title: "PROMISING PARTNERSHIP AND INVESTMENT OPPORTUNITIES",
    body: "The exhibition serves as a meeting point for companies, entrepreneurs, and investors, opening up opportunities for building strategic partnerships and exploring real investment projects in the Syrian market, especially in the rapidly growing technology and innovation sector.",
  },
  {
    Icon: IconBuildingSkyscraper,
    title: "LEVERAGING TRADE AND NETWORKING OPPORTUNITIES",
    body: "At TEXPO, exhibitors and visitors benefit from extensive trade connections and networking events that bring together industry leaders, investors, and innovators from across the region, accelerating business growth and innovation.",
  },
];

export function WhyTexpoSection() {
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
          WHY YOU SHOULD BE PART OF TEXPO LAND | 2ND EDITION?
        </motion.h2>

        <div className={styles.scrollWrapper}>
          <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {cards.map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                className={styles.card}
                variants={fadeInUp}
              >
                <div className={styles.iconWrap}>
                  <Icon size={28} />
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
