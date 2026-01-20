/**
 * @file calculations.test.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { calculateDiscount, calculateSubTotal } from "../calculations";

describe("Calculations test suite", () => {
  describe("Test calculateSubTotal function", () => {
    it("should return the correct subtotal for valid inputs", () => {
      expect(calculateSubTotal(5, 10)).toBe(50);
    });

    it("should return 0 if numberOfItems is null", () => {
      expect(calculateSubTotal(null, 10)).toBe(0);
    });

    it("should return 0 if price is null", () => {
      expect(calculateSubTotal(5, null)).toBe(0);
    });

    it("should return 0 if numberOfItems is less than or equal to 0", () => {
      expect(calculateSubTotal(0, 10)).toBe(0);
      expect(calculateSubTotal(-3, 10)).toBe(0);
    });
  });

  describe("Test calculateDiscount function", () => {
    it("should return the correct discount rate based on subtotal", () => {
      expect(calculateDiscount(50500)).toBe(0.15);
      expect(calculateDiscount(10500)).toBe(0.1);
      expect(calculateDiscount(7500)).toBe(0.07);
      expect(calculateDiscount(5500)).toBe(0.05);
      expect(calculateDiscount(1500)).toBe(0.03);
      expect(calculateDiscount(100)).toBe(0);
    });

    it("should return the discount rate 0 for minus values", () => {
      expect(calculateDiscount(-100)).toBe(0);
    });
  });
});
