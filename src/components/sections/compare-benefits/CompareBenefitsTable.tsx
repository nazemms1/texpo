import { IconCheck, IconCircleCheck } from '@tabler/icons-react';

import type { AlignedBenefitRow, BenefitCellValue } from './compareBenefitsTypes';
import { TIERS } from './compareBenefitsTypes';

import styles from './CompareBenefitsTable.module.css';

function NotIncludedMark() {
  return (
    <span className={styles.dash} aria-label="Not included">
      —
    </span>
  );
}

function BenefitCellContent({
  value,
  isDiamondTier,
}: {
  value: BenefitCellValue;
  isDiamondTier: boolean;
}) {
  if (value == null || value === false) {
    return <NotIncludedMark />;
  }

  if (value === true) {
    return isDiamondTier ? (
      <IconCircleCheck
        className={styles.checkDiamond}
        size={22}
        stroke={2}
        aria-hidden
      />
    ) : (
      <IconCheck
        className={styles.check}
        size={20}
        stroke={2.25}
        aria-hidden
      />
    );
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed === '') {
      return <NotIncludedMark />;
    }
    return <span>{value}</span>;
  }

  const _exhaustive: never = value;
  return _exhaustive;
}

export interface CompareBenefitsTableProps {
  rows: readonly AlignedBenefitRow[];
}

export function CompareBenefitsTable({ rows }: CompareBenefitsTableProps) {
  const diamondIndex = TIERS.length - 1;

  return (
    <div className={styles.card}>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th scope="col" className={styles.thBenefit}>
                Benefit
              </th>
              {TIERS.map((tier, i) => (
                <th
                  key={tier}
                  scope="col"
                  className={`${styles.thTier} ${
                    i === diamondIndex ? styles.thDiamond : ''
                  }`}
                >
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.benefit} className={styles.row}>
                <th scope="row" className={styles.tdBenefit}>
                  {row.benefit}
                </th>
                {row.cells.map((cell, i) => (
                  <td
                    key={`${row.benefit}-${TIERS[i]}`}
                    className={`${styles.tdTier} ${
                      i === row.cells.length - 1 ? styles.tdDiamond : ''
                    }`}
                  >
                    <BenefitCellContent
                      value={cell}
                      isDiamondTier={i === diamondIndex}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
