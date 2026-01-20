/**
 * @file useTaxRate.tsx
 * @description Custom hook to get tax rate based on region
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { useMemo } from "react";
import { TAX_RATES } from "../constants/constants";

export const useTaxRate = (region: string) => {
  const taxRate = useMemo(() => {
    return region ? TAX_RATES[region as keyof typeof TAX_RATES] : 0;
  }, [region]);

  return taxRate;
};
