import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Initialize with defaultValue and don't try to access localStorage yet
  const [localStorageValue, setLocalStorageValue] = useState(defaultValue);

  // Once component mounts, try to get the value from localStorage
  useEffect(() => {
    try {
      // Check if window is defined (client-side)
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        if (item) {
          setLocalStorageValue(JSON.parse(item));
        } else {
          window.localStorage.setItem(key, JSON.stringify(defaultValue));
        }
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
  }, [key, defaultValue]);

  const setLocalStorageStateValue = (valueOrFn) => {
    try {
      if (typeof window === "undefined") return;

      let newValue;
      if (typeof valueOrFn === "function") {
        newValue = valueOrFn(localStorageValue);
      } else {
        newValue = valueOrFn;
      }

      window.localStorage.setItem(key, JSON.stringify(newValue));
      setLocalStorageValue(newValue);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
