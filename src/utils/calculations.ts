/**
 * @file calculations.ts
 * @description Calculation utility functions
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { DISCOUNT_LEVELS } from "../constants/constants";

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

export const calculateDiscount = (subtotal: number) => {
  for (const level of DISCOUNT_LEVELS) {
    if (subtotal >= level.threshold) {
      return level.rate;
    }
  }

  return 0;
};
