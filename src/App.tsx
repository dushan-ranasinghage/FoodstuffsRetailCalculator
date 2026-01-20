/**
 * @file App.tsx
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Retail Calculator</h1>
      <div>
        <label htmlFor="numberOfItems">Number of Items:</label>
        <input type="number" id="numberOfItems" name="numberOfItems" />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" />
      </div>
      <div>
        <label htmlFor="region">Region:</label>
        <select id="region" name="region">
          <option value="">Select a region</option>
          <option value="AUK">AUK - Auckland (6.85%)</option>
          <option value="WLG">WLG - Wellington (8.00%)</option>
          <option value="WAI">WAI - Waikato (6.25%)</option>
          <option value="CHC">CHC - Christchurch (4.00%)</option>
          <option value="TAS">TAS - Tasmania (8.25%)</option>
        </select>
      </div>
      <div>
        <button type="button">Calculate</button>
      </div>
    </section>
  );
}

export default App;
