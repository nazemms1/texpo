"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "@/src/lib/animations";
import { PillButton, ArrowCircle } from "@/src/components/ui/Button/AnimatedButton";
import { SocialIcons } from "@/src/components/ui/SocialIcons/SocialIcons";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <img
          src="/images/Container.svg"
          alt=""
          className={styles.bgImage}
          aria-hidden="true"

        />
       </div>

  
      <div className={styles.content}>
        <motion.div
          className={styles.textBlock}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.heading} variants={fadeInLeft}>
            BE PART OF THE
            <br />
            <span className={styles.accent}>FUTURE BEING</span>
            <br />
            MADE NOW!
          </motion.h1>

          <motion.p className={styles.description} variants={fadeInUp}>
            TEXPO LAND brings together global innovators, startups, investors, and industry leaders to explore the next generation of technology and digital transformation.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeInUp}>
            <PillButton href="/about" variant="primary">Discover More</PillButton>
            <ArrowCircle href="/about" variant="primary" />
            <PillButton href="/become-a-sponsor" variant="outline">Become A Sponsor</PillButton>
            <ArrowCircle href="/become-a-sponsor" variant="outline" />
          </motion.div>
        </motion.div>
      </div>

       <motion.div
        className={styles.socialBar}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <SocialIcons />
      </motion.div>
 
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}

 
