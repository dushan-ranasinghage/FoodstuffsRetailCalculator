# Foodstuffs Retail Calculator

A simple retail calculator that calculates subtotals, applies tiered discounts, and supports regional tax rates.

## Notes

<img src="https://i.postimg.cc/KYNgyp2X/Retail-Calculator-Implementation-Plan.png" alt="Retail Calculator Implementation Plan" width="600" />

## Thoughts, Direction and Reasoning

**Technology Stack:** React 19, TypeScript, Vite, Tailwind CSS, Jest

**Architecture:**

- Component-based structure with seperation of concern
- Custom hooks and memoization when needed
- Pure utility functions for calculations (easily testable)
- Centralized constants for discount levels and tax rates

**Key Decisions:**

- Not using the modular architecture since the solution is a module itself
- Componentize the solution when it involves decoupled UI pieces.
- Tailwind CSS for styling
- TypeScript for type safety
- Jest for functionality testing 
- `@testing-library/react` for rendering and custom hook testing
- Test files colocated with the relevant file (Inside `__test__` folder)
- Utility functions separated from UI for better testability
- Custom hook pattern for reusable tax rate logic

## Slices

### Slice 1: Project Setup
**Status:** Completed  
**Branch:** `main`

- Project setup (Vite, TypeScript, React, Tailwind)
- Initial project structure and configuration

### Slice 2: Simple Input Form UI
**Status:** Completed  
**Branch:** `feature/simple-form-ui`  
**PR:** #14

- Basic form structure and layout

### Slice 3: Subtotal Calculation
**Status:** Completed  
**Branch:** `feature/subtotal-calc`  
**PR:** #15

- Subtotal calculation (`calculateSubTotal`)
- Some Unit tests for subtotal calculations

### Slice 4: Discount Calculation
**Status:** Completed  
**Branch:** `feature/discount-calc`  
**PR:** #16

- Discount level constants
- `calculateDiscount` function
- Some Unit tests for discount calculations

### Slice 5: Display Discount in UI
**Status:** Completed  
**Branch:** `feature/discount-display`  
**PR:** #17

- Componetized calculator `RetailCalculator` since result section evolved
- Discount display in results in `CalculationResults`
- Integration of discount calculation with UI

### Slice 6: Regional Tax Calculation
**Status:** Completed
**Branch:** `feature/regional-tax-calc`  
**PR:** #18

- Tax rate constants
- `useTaxRate` custom hook
- Add fuctionality Region selector dropdown
- Hook unit tests

### Slice 7: Display Tax in UI
**Status:** Open

- Tax display in calculation results
- Integration of tax calculation with UI components

### Slice 8: Input Validations
**Status:** Open

- Form input validation (quantity, price, region)
- Validation rules for price and quantity inputs
- Show error messages
- Unit tests for validation

### Slice 9: Improve Test Suite
**Status:** Open

- Enhanced test coverage for core logic
- Additional edge case testing

### Slice 10: Mobile Responsive UI
**Status:** Open

- Responsive design implementation

### Slice 11: Improve UI/UX
**Status:** Open

- UI/UX enhancements
- Proper Semantic HTML usage
- Visual polish and refinements

### Slice 12: Documentation
**Status:** Open

- Comprehensive project documentation

## Pull Requests

**Merged Pull Requests:**

- **PR #14**: Slice 2 - Simple Input Form UI (`feature/simple-form-ui`)
- **PR #15**: Slice 3 - Subtotal Calculation (`feature/subtotal-calc`)
- **PR #16**: Slice 4 - Discount Calculation (`feature/discount-calc`)
- **PR #17**: Slice 5 - Display Discount in UI (`feature/discount-display`)
- **PR #18**: Slice 6 - Regional Tax Calculation (`feature/regional-tax-calc`)

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Run tests:

```bash
npm test
```

4. Build for production:

```bash
npm run build
```
