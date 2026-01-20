/**
 * @file App.tsx
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { useState } from "react";
import { calculateDiscount, calculateSubTotal } from "./utils/calculations";

function App() {
  const [numberOfItems, setNumberOfItems] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [subtotal, setSubtotal] = useState<number | null>(null);

  const onChangeNumberOfItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfItems(e.target.value ? parseInt(e.target.value, 10) : null);
  };

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value ? parseFloat(e.target.value) : null);
  };

  const handleCalculate = () => {
    const total = calculateSubTotal(numberOfItems, price);
    const discount = calculateDiscount(total);
    const discountedTotal = total - total * discount;
    console.log("discount", discount);
    console.log("discountedTotal", discountedTotal);
    setSubtotal(total);
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
          <select id="region" name="region" className="ml-2 border">
            <option value="">Select a region</option>
            <option value="AUK">AUK - Auckland (6.85%)</option>
            <option value="WLG">WLG - Wellington (8.00%)</option>
            <option value="WAI">WAI - Waikato (6.25%)</option>
            <option value="CHC">CHC - Christchurch (4.00%)</option>
            <option value="TAS">TAS - Tasmania (8.25%)</option>
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
        <div>
          <label htmlFor="subTotal">Subtotal:</label>
          <span className="ml-2" id="subTotal">
            {subtotal !== null ? `$${subtotal.toFixed(2)}` : ""}
          </span>
        </div>
      </div>
    </section>
  );
}

export default App;
