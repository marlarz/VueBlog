const storage = {
  get(key, parsed = false) {
    if (parsed) {
      return JSON.parse(localStorage.getItem(key));
    }
    return localStorage.getItem(key);
  },
  set(key, value, stringify = false) {
    if (stringify) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },
  delete(key) {
    localStorage.removeItem(key);
  },
};

export default storage;
