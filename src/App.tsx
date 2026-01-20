/**
 * @file App.tsx
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

function App() {
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
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="ml-2 border"
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
          <button type="button" className="px-4 py-1 border bg-gray-100">
            Calculate
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
