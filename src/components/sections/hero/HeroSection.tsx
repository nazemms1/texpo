"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "@/src/lib/animations";
import { AnimatedButton } from "@/src/components/ui/Button/AnimatedButton";
import { SocialIcons } from "@/src/components/ui/SocialIcons/SocialIcons";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Full-screen SVG background */}
      <div className={styles.bg}>
        <img
          src="/images/Container.svg"
          alt=""
          className={styles.bgImage}
          aria-hidden="true"
          
        />
        <ParticleGrid />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.textBlock}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.eyebrow} variants={fadeInUp}>
            Welcome to TEXPO
          </motion.span>

          <motion.h1 className={styles.heading} variants={fadeInLeft}>
            BE PART OF THE
            <br />
            <span className={styles.accent}>FUTURE BEING</span>
            <br />
            MADE NOW!
          </motion.h1>

          <motion.p className={styles.description} variants={fadeInUp}>
            Join the world&apos;s most forward-thinking technology exhibition.
            Discover breakthrough innovations, connect with global leaders, and
            witness the technologies shaping tomorrow — all in one extraordinary
            venue.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeInUp}>
            <AnimatedButton href="/about" variant="primary">
              Discover More
            </AnimatedButton>
            <AnimatedButton href="/contact" variant="outline">
              Become A Sponsor
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Social bar — fixed center-right of viewport */}
      <motion.div
        className={styles.socialBar}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <SocialIcons />
      </motion.div>

      {/* Scroll indicator */}
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

function ParticleGrid() {
  return (
    <div className={styles.particleGrid}>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className={styles.particle}
          style={{
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}
    </div>
  );
}
