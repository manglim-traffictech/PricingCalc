const path = require('path');
const fs = require('fs');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Location of the debugger UI bundled with the React Native CLI
const debuggerUIRoot = path.join(
  __dirname,
  'node_modules',
  '@react-native-community',
  'cli-server-api',
  'node_modules',
  '@react-native-community',
  'cli-debugger-ui',
  'build',
  'ui',
);

module.exports = mergeConfig(defaultConfig, {
  server: {
    enhanceMiddleware: middleware => {
      return (req, res, next) => {
        if (req.url.startsWith('/debugger-ui/')) {
          const relativePath = req.url.replace('/debugger-ui/', '');
          const filePath = path.join(debuggerUIRoot, relativePath);
          if (fs.existsSync(filePath)) {
            res.statusCode = 200;
            if (filePath.endsWith('.js')) {
              res.setHeader('Content-Type', 'application/javascript');
            } else if (filePath.endsWith('.html')) {
              res.setHeader('Content-Type', 'text/html');
            } else if (filePath.endsWith('.css')) {
              res.setHeader('Content-Type', 'text/css');
            }
            return res.end(fs.readFileSync(filePath));
          }
        }
        return middleware(req, res, next);
      };
    },
  },
});

