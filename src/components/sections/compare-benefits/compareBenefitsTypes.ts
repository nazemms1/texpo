export const TIERS = ["Silver", "Gold", "Platinum", "Diamond"] as const;

export type TierId = (typeof TIERS)[number];

export type BenefitCellValue = string | boolean | null | undefined;

export type SponsorBenefitComparisonRow = {
  benefit: string;
  cells: readonly BenefitCellValue[];
};

export type AlignedBenefitRow = {
  benefit: string;
  cells: readonly BenefitCellValue[];
};

export type CompareBenefitsDataset<T extends string = string> = {
  /** Display order of rows in the table (property ids). */
  propertyOrder: readonly T[];
  /** Human-readable label per property id. */
  labels: Record<T, string>;
  /** For each tier, map property id → cell value (omit or null = not included). */
  byTier: Record<TierId, Partial<Record<T, BenefitCellValue>>>;
};

export function alignCellsToTiers(
  cells: readonly BenefitCellValue[],
): readonly BenefitCellValue[] {
  return TIERS.map((_, index) => cells[index] ?? null);
}

export function mapApiRowsToTableRows(
  rows: readonly SponsorBenefitComparisonRow[],
): AlignedBenefitRow[] {
  return rows.map((row) => ({
    benefit: row.benefit,
    cells: alignCellsToTiers(row.cells),
  }));
}

/**
 * Converts tier-centric data into table rows (benefit × tiers matrix).
 */
export function compareBenefitsDatasetToAlignedRows<T extends string>(
  dataset: CompareBenefitsDataset<T>,
): AlignedBenefitRow[] {
  const { propertyOrder, labels, byTier } = dataset;
  return propertyOrder.map((propId) => ({
    benefit: labels[propId],
    cells: TIERS.map((tier) => byTier[tier]?.[propId] ?? null),
  }));
}
