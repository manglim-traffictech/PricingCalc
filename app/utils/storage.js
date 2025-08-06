let AsyncStorage;
try {
  const pkg = '@react-native-async-storage/async-storage';
  // Dynamically require so bundlers don't error when dependency is missing
  AsyncStorage = require(pkg).default;
} catch (e) {
  // Fallback to a simple in-memory store for environments without AsyncStorage
  const memory = new Map();
  AsyncStorage = {
    async getItem(key) {
      return memory.has(key) ? memory.get(key) : null;
    },
    async setItem(key, value) {
      memory.set(key, value);
    },
    async removeItem(key) {
      memory.delete(key);
    },
  };
}
export default AsyncStorage;
