/**
 * @file calculations.test.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { calculateSubTotal } from "../calculations";

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
});
