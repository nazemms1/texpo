'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '@/src/lib/animations';
import styles from './WhySyriaSection.module.css';

const points = [
  {
    icon: '/Icons/Icon-one.svg',
    title: 'AN INVESTMENT-FRIENDLY ENVIRONMENT:',
    body: 'Syria is an emerging market in technology and digital transformation, providing investors with great opportunities in areas such as artificial intelligence, software, telecommunications, and renewable energy.',
  },
  {
    icon: '/Icons/Icon-two.svg',
    title: 'ACCESS TO MULTIPLE MARKETS:',
    body: "Syria's strategic location at the heart of the Middle East offers opportunities to access neighboring markets in countries like Lebanon, Jordan, Iraq, and Turkey, as well as Gulf countries and Europe.",
  },
  {
    icon: '/Icons/Icon-three.svg',
    title: 'GOVERNMENT SUPPORT AND ECONOMIC INITIATIVES:',
    body: 'The Syrian government is actively encouraging investment by offering incentives and facilities for investors in the fields of technology and innovation, in addition to implementing large-scale projects in digital and technological infrastructure.',
  },
  {
    icon: '/Icons/Icon-four.svg',
    title: 'GROWING DEMAND FOR DIGITAL MODERNIZATION:',
    body: 'With the increasing demand for digital solutions across sectors such as education, healthcare, industry, trade, and financial services, Syria presents an ideal opportunity for investors to meet these needs.',
  },
  {
    icon: '/Icons/Icon-five.svg',
    title: 'ENHANCING REGIONAL ECONOMIC RELATIONS:',
    body: 'Through trade agreements and partnerships with neighboring countries, Syria has become a key connector between Middle Eastern markets, facilitating trade and investment flows within the region.',
  },
];

export function WhySyriaSection({ title, description, image, items }: { title?: string; description?: string; image?: string; items?: { title: string; description: string; image: string }[] }) {
  const displayTitle = title || "WHY SYRIA?";
  const displayIntro = description || "Syria today represents a strategic turning point in the region, witnessing unprecedented economic openness and digital transformation, making it an attractive destination for investors. With the rising demand for technology across all sectors, the Syrian market is filled with promising opportunities for growth and investment in various technological fields.";
  const displayImage = image || "/images/syria.svg";

  const displayPoints = items?.map((item, idx) => {
    const fallbackIcons = ['/Icons/Icon-one.svg', '/Icons/Icon-two.svg', '/Icons/Icon-three.svg', '/Icons/Icon-four.svg', '/Icons/Icon-five.svg'];
    return {
      title: item.title,
      body: item.description,
      icon: item.image && item.image.length > 25 ? item.image : fallbackIcons[idx % fallbackIcons.length],
    };
  }) || points;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.mapCol}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={displayImage}
            alt="Map of Syria"
            className={styles.mapImage}
          />
        </motion.div>

        <motion.div
          className={styles.contentCol}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <motion.h2 className={styles.title} variants={fadeInRight}>
            {displayTitle}
          </motion.h2>

          <motion.p className={styles.intro} variants={fadeInUp}>
            {displayIntro}
          </motion.p>

          <div className={styles.points}>
            {displayPoints.map(({ icon, title, body }, idx) => (
              <motion.div key={`${title}-${idx}`} className={styles.point} variants={fadeInUp}>
                <img src={icon} alt="" />

                <div>
                  <h3 className={styles.pointTitle}>{title}</h3>
                  <p className={styles.pointBody}>{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
