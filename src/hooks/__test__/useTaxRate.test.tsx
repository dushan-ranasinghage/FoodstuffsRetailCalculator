/**
 * @file useTaxRate.test.tsx
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { renderHook } from "@testing-library/react";

import { useTaxRate } from "../useTaxRate";

describe("useTaxRate hook", () => {
    it("should return the correct tax rate for AUK region", () => {
        const { result } = renderHook(() => useTaxRate("AUK"));
        expect(result.current).toBe(0.0685);
    });

    it("should return 0 for empty region", () => {
        const { result } = renderHook(() => useTaxRate(""));
        expect(result.current).toBe(0);
    });
});
