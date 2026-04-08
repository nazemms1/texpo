'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';
import { CompareBenefitsTable } from './CompareBenefitsTable';
import {
  compareBenefitsDatasetToAlignedRows,
  type CompareBenefitsDataset,
} from './compareBenefitsTypes';

import styles from './CompareBenefitsSection.module.css';

export type {
  AlignedBenefitRow,
  BenefitCellValue,
  CompareBenefitsDataset,
  SponsorBenefitComparisonRow,
  TierId,
} from './compareBenefitsTypes';

export {
  TIERS,
  alignCellsToTiers,
  compareBenefitsDatasetToAlignedRows,
  mapApiRowsToTableRows,
} from './compareBenefitsTypes';

export {
  BENEFIT_PROPERTY_LABELS,
  BENEFIT_PROPERTY_ORDER,
  compareBenefitsByTier,
  compareBenefitsDefaultDataset,
  mapApiBenefitsToDataset,
} from './compareBenefitsData';

export type { BenefitPropertyId } from './compareBenefitsData';

export interface CompareBenefitsSectionProps {
  id?: string;
  /**
   * بيانات منظمة حسب المستوى (Silver / Gold / …)، مع ترتيب وعناوين الخصائص.
   * مرّر كائناً مشابهاً لـ `compareBenefitsDefaultDataset` عند جلب البيانات من API.
   */
  dataset?: CompareBenefitsDataset;
}

export function CompareBenefitsSection({
  id,
  dataset,
}: CompareBenefitsSectionProps) {
  if (!dataset) return null;

  const tableRows = compareBenefitsDatasetToAlignedRows(dataset);

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h2 className={styles.title} variants={fadeInUp}>
            Compare benefits
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeInUp}>
            Detailed breakdown of sponsorship inclusions across all levels.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <CompareBenefitsTable rows={tableRows} />
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.pattern} aria-hidden="true" />
    </section>
  );
}
