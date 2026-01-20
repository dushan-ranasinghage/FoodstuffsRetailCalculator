/**
 * @file CalculationResults.tsx
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2026 - All Rights Reserved.
 */

interface CalculationResultsProps {
  subtotal: number | null;
  discount: number | null;
  total: number | null;
}

const CalculationResults = ({
  subtotal,
  discount,
  total,
}: CalculationResultsProps) => {
  return (
    <div className="space-y-2">
      <div>
        <label htmlFor="subTotal">Subtotal:</label>
        <span className="ml-2" id="subTotal">
          {subtotal !== null ? `$${subtotal.toFixed(2)}` : ""}
        </span>
      </div>
      <div>
        <label htmlFor="discount">Discount:</label>
        <span className="ml-2" id="discount">
          {discount !== null ? `$${discount.toFixed(2)}` : ""}
        </span>
      </div>
      <div>
        <label htmlFor="total">Total:</label>
        <span className="ml-2" id="total">
          {total !== null ? `$${total.toFixed(2)}` : ""}
        </span>
      </div>
    </div>
  );
};

export default CalculationResults;
