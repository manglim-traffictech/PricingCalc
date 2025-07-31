# Pricing Calculator React Native App

This repository contains a minimal React Native project that can be extended with [react-native-windows](https://microsoft.github.io/react-native-windows/) to run on Windows. It serves as a simple starting point for building out the GUI of a pricing calculator.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18 or later
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional, `npm` works too)
- A Windows development machine with Visual Studio 2022 or later for building the Windows project

### Setup
1. Clone this repository and install JavaScript dependencies:
   ```bash
   git clone <repo-url>
   cd Pricing-Calculator-Computer-App-
   npm install
   ```
2. Add Windows support (this generates the `windows/` folder):
   ```bash
   npx react-native-windows-init --overwrite
   ```
3. Start the Metro bundler:
   ```bash
   npx react-native start
   ```
4. In another terminal, build and run the Windows app:
   ```bash
   npx react-native run-windows
   ```

You should see a window open with a simple screen containing the text "Pricing Calculator".

## Project Structure
- `app/App.js` – React Native component rendered on screen
- `app/index.js` – entry point that registers the app
- `app/app.json` – application metadata
- `package.json` – project configuration and dependencies

Feel free to modify `App.js` to begin building your UI.
