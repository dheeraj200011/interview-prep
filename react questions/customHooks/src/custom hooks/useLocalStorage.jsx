import { useState } from "react";

const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, initialValue) => {
  if (!key) {
    throw new Error("localStorage key may not be falsy");
  }

  const getStoredValue = () => {
    if (!isBrowser) return initialValue;

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  const [value, setValue] = useState(getStoredValue);

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);

      if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeStoredValue = () => {
    if (isBrowser) {
      localStorage.removeItem(key);
    }

    setValue(initialValue);
  };

  return [value, setStoredValue, removeStoredValue];
};

export default useLocalStorage;
