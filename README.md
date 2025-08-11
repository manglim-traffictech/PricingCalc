# Pricing Calculator

This is a minimal React application that calculates billing and profit information.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18 or later

### Install dependencies
```bash
npm install
```

### Run the app in your browser
```bash
npm start
```
The start script uses [`serve`](https://www.npmjs.com/package/serve) to host the project. After the command runs, open [http://localhost:3000](http://localhost:3000) in a web browser to view the Pricing Calculator.

### Running tests
```bash
npm test
```

## Project Structure
- `index.html` – HTML entry point
- `index.js` – imports and runs `app/index.js`
- `app/App.js` – main React component
- `app/index.js` – creates the React root and renders `App`
- `package.json` – project configuration

## Billing and Profit Display

Enter an amount using the keypad and press **Enter** to calculate billing ranges. The screen will show:

- **Profit Amount**
- **Profit Margin**
- **High Billing Range**
- **Low Billing Range**

These values are always visible. Before entering data they show **0.00** as a placeholder and update each time you submit a new pay amount.
