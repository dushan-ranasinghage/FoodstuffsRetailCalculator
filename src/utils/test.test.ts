/**
 * @file test.test.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { sum } from "./code";

describe("Test Function Suite", () => {
  it("Test sum", () => {
    const res = sum(2, 3);
    expect(res).toBe(5);
  });
});
