// targeted discount percentage buying 10 items
const DISCOUNT_TARGET_AT_10 = 0.25;

export default function getDiscountPercentage(quantity: number): number {
  return Math.round(Math.log10(quantity) * DISCOUNT_TARGET_AT_10 * 1000) / 1000;
}
