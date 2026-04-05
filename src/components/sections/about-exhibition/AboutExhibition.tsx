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
import { IconMapPin, IconPlayerPlay } from "@tabler/icons-react";
import styles from "./AboutExhibition.module.css";

interface AboutExhibitionProps {
  variant?: "home" | "about";
  hideButtons?: boolean;
}

export function AboutExhibition({ variant = "home", hideButtons = false }: AboutExhibitionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.waveTop} />

      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeInLeft}>
            <SectionTitle title="ABOUT THE EXHIBITION" />
          </motion.div>

          <motion.p className={styles.body} variants={fadeInUp}>
            TEXPO Exhibition is a specialized platform for technology, modern
            innovations, and cutting-edge solutions. It brings together a select
            group of companies, entrepreneurs, and experts to showcase the
            latest digital and technological solutions in the fields of
            telecommunications, software, artificial intelligence, and
            automation. The exhibition aims to support Syria&apos;s digital
            transformation journey by fostering knowledge exchange, building
            strategic partnerships, and connecting the public and private
            sectors with technologies that enhance service development and
            business efficiency. The exhibition also highlights promising
            investment opportunities in the
          </motion.p>

          <motion.p className={styles.body} variants={fadeInUp}>
            Syrian market, particularly in tech startups, digital
            infrastructure, and innovative solutions that meet the needs of the
            rebuilding and development phase. This makes it a genuine
            opportunity for investors to participate in building a sustainable
            digital economy.
          </motion.p>

          <motion.p className={styles.body} variants={fadeInUp}>
            Following the great success of the first edition of TEXPO, and the
            wide positive impression it left on participants and visitors, the
            second edition is launching to continue the creative journey and
            open broader horizons for pioneering ideas and advanced innovative
            technical solutions. This edition will serve as an interactive
            platform that gathers innovators, entrepreneurs, and tech companies
            under one roof, with the goal of sharing experiences, showcasing the
            latest technologies, and creating real opportunities that contribute
            to shaping a smarter, more innovative future.
          </motion.p>

          {!hideButtons && (
            <motion.div className={styles.actions} variants={fadeInUp}>
              {variant === "about" && <ArrowCircle href="#" variant="dashed" />}
              <ButtonPair pillHref="#" arrowHref="#" variant="primary">
                <IconMapPin size={16} />
                View in Map
              </ButtonPair>
              {variant === "home" && (
                <ButtonPair pillHref="#" arrowHref="#" variant="outline">
                  <IconPlayerPlay size={16} />
                  Watch
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
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/logos/texpo.svg"
            alt=""
            className={styles.bgImage}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
