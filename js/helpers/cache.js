function createCache() {
  const cache = {};

  return {
    get(key) {
      return cache[key] || null;
    },

    set(key, value) {
      cache[key] = value;
    },

    clear(key) {
      delete cache[key];
    },

    clearAll() {
      for (const key in cache) {
        delete cache[key];
      }
    }
  };
}
