/**
 * @file calculations.ts
 * @description Calculation utility functions
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

export const calculateSubTotal = (
  numberOfItems: number | null,
  price: number | null,
): number => {
  if (
    numberOfItems === null ||
    price === null ||
    numberOfItems <= 0 ||
    price <= 0
  ) {
    return 0;
  }
  const total = numberOfItems * price;
  return total;
};
