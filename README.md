# Pricing Calculator React Native App

This repository contains a minimal React Native project that can be extended with [react-native-windows](https://microsoft.github.io/react-native-windows/) to run on Windows. It serves as a simple starting point for building out the GUI of a pricing calculator.

## Getting Started

The app can be run on Windows using the React Native Windows extension. Below is a step-by-step guide for setting up the project, running it, and executing the automated tests.

### Prerequisites
- [Node.js](https://nodejs.org/) 18 or later
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional, `npm` works too)
- A Windows development machine with Visual Studio 2022 or later for building the Windows project. Ensure `vswhere.exe` is available in your `PATH`.

### Setup
1. **Clone and install dependencies**
   ```bash
   git clone <repo-url>
   cd Pricing-Calculator-Computer-App-
   # Run all following commands from this directory
   npm install
   ```
2. **Generate Windows project files** – this will create a `windows/` directory containing the native solution:
   ```bash
   npx react-native-windows-init --overwrite
   ```
3. **Install Windows dependencies** – run the following script from an *elevated* PowerShell prompt:
   ```powershell
   node_modules/react-native-windows/scripts/rnw-dependencies.ps1
   ```
   Make sure Visual Studio 2022 or later is installed and `vswhere.exe` can be found on your `PATH`.
4. **Start the Metro bundler** – keep this running in its own terminal window:
   ```bash
   npx react-native start
   ```
5. **Build and run the app** in a separate terminal:
   ```bash
   npx react-native run-windows
   ```

After compilation completes, a window should open displaying the "Pricing Calculator" heading.

### Running Tests

Automated tests are written using [Jest](https://jestjs.io/) and `@testing-library/react-native`. Use the following command to execute the test suite:

```bash
npm test
```

The included test verifies that the main screen renders the "Pricing Calculator" title.

## Project Structure
- `app/App.js` – React Native component rendered on screen
- `app/index.js` – entry point that registers the app
- `app/app.json` – application metadata
- `package.json` – project configuration and dependencies

Feel free to modify `App.js` to begin building your UI.
