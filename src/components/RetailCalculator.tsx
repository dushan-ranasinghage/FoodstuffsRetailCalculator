/**
 * @file RetailCalculator.tsx
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { useState, useMemo } from "react";

import { calculateDiscount, calculateSubTotal } from "../utils/calculations";
import CalculationResults from "./CalculationResults/CalculationResults";
import { TAX_RATES } from "../constants/constants";

const RetailCalculator = () => {
  const [numberOfItems, setNumberOfItems] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [region, setRegion] = useState<string>("");
  const [discount, setDiscount] = useState<number | null>(null);
  const [subtotal, setSubtotal] = useState<number | null>(null);

  const taxRate = useMemo(() => {
    return region ? TAX_RATES[region as keyof typeof TAX_RATES] : 0;
  }, [region]);

  console.log("taxRate", taxRate);
  
  const onChangeNumberOfItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfItems(e.target.value ? parseInt(e.target.value, 10) : null);
  };

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value ? parseFloat(e.target.value) : null);
  };

  const onChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  const handleCalculate = () => {
    const total = calculateSubTotal(numberOfItems, price);
    const discount = calculateDiscount(total);

    setSubtotal(total);
    setDiscount(total * discount);
  };

  const displayTotal = () => {
    if (subtotal !== null && discount !== null) {
      return subtotal - discount;
    }

    return null;
  };

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-4">Retail Calculator</h1>
      <div className="space-y-3">
        <div>
          <label htmlFor="numberOfItems">Number of Items:</label>
          <input
            type="number"
            id="numberOfItems"
            name="numberOfItems"
            className="ml-2 border"
            value={numberOfItems ?? ""}
            onChange={onChangeNumberOfItems}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="ml-2 border"
            value={price ?? ""}
            onChange={onChangePrice}
          />
        </div>
        <div>
          <label htmlFor="region">Region:</label>
          <select
            id="region"
            name="region"
            className="ml-2 border"
            value={region}
            onChange={onChangeRegion}
          >
            <option value="">Select a region</option>
            {Object.keys(TAX_RATES).map((key) => (
              <option key={key} value={key}>
                {key} - {TAX_RATES[key as keyof typeof TAX_RATES] * 100}%
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="button"
            className="px-4 py-1 border bg-gray-100"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
        <CalculationResults
          subtotal={subtotal}
          discount={discount}
          total={displayTotal()}
        />
      </div>
    </section>
  );
};

export default RetailCalculator;
