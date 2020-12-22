export const set = (key, value, callback = null) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    if (typeof callback === 'function') callback(err);
    console.error(err);
  }
};

export const get = (key, callback = null) => {
  try {
    const value = localStorage.getItem(key);
    if (!value) return;

    if (typeof callback === 'function') {
      callback(value);
    }
  } catch (err) {
    console.error(err);
  }
};
