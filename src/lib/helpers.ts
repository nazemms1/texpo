export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat().format(n);
}
