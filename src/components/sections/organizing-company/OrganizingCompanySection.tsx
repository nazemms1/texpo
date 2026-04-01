"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";
import { SectionTitle } from "@/src/components/ui/SectionTitle/SectionTitle";
import styles from "./OrganizingCompanySection.module.css";

export function OrganizingCompanySection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeInUp}>
          <SectionTitle
            title={'WHO IS THE ORGANIZING COMPANY "EVENTA"?'}
            align="center"
          />
        </motion.div>

        <motion.p className={styles.body} variants={fadeInUp}>
          The organizing company for the TEXPO exhibition has extensive and long-standing experience in organizing and creating specialized exhibitions and conferences. Since its inception in 2024, the company has operated with a vision to deliver high-level events that combine professionalism, innovation, and quality execution. Throughout its journey, the company has managed and executed a variety of projects, exhibitions, and conferences across different sectors, with a particular focus on technology and entrepreneurial fields, which has enriched its portfolio with valuable experience and successes.

        </motion.p>

        <motion.p className={styles.body} variants={fadeInUp}>
          The company relies on a comprehensive team of specialized talents,
          whose expertise spans over 15 years in event management, strategic
          planning, content creation, and operations, led by an executive team
          with a clear vision and a high ability to make decisions. This ensures
          the highest standards of organization and precision in execution. This
          integration of administrative expertise and the execution team
          translates into comprehensive experiences that reflect a high level of
          professionalism, from design and organization to managing participant
          and visitor experiences.
        </motion.p>

         <motion.div className={styles.logoWrapper} variants={fadeInUp}>
          <img
            src="/logos/texpo.svg"
            alt="TEXPO Yalla Tech"
            className={styles.logo}
          />
        </motion.div>

        <motion.p className={styles.body} variants={fadeInUp}>
          Believing in the role of technology and innovation in driving
          development and building a more integrated future, the company is
          focused on developing platforms that bring together knowledge,
          experience, and effective communication. They design exhibitions and
          gatherings that cater to the needs of various groups, including
          companies, entrepreneurs, innovators, and those interested in digital
          transformation.
        </motion.p>

        <motion.p className={styles.body} variants={fadeInUp}>
          The company stands out with its strategic vision that focuses on
          creating interactive experiences of true value. These experiences not
          only showcase innovations but also build bridges for collaboration,
          empower partnerships, and stimulate the exchange of knowledge. The
          company relies on specialized teams that combine organizational
          experience with a deep understanding of various sectors, which
          reflects positively on content quality, organizational standards, and
          the integrated identity of the events they provide.
        </motion.p>

        <motion.p className={styles.body} variants={fadeInUp}>
          By continuously evolving the TEXPO exhibition with every edition, the
          organizing company seeks to present an updated model of technological
          exhibitions, focused on innovation, sector expansion, and updating
          interaction methods, thereby enhancing the exhibition&apos;s role as
          an annual hub for key players in the tech ecosystem, opening new
          avenues for growth and collaboration.
        </motion.p>
      </motion.div>
    </section>
  );
}
