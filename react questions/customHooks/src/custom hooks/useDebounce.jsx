import { useEffect, useState } from "react";

const useDebounce = (value, delay, callback = () => {}) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
      callback;
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;

// api call example

// import { useEffect, useState } from "react";

// const useDebounce = (value, delay, callback = () => {}) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//       callback(value); // ✅ callback properly called
//     }, delay);

//     return () => clearTimeout(handler);
//   }, [value, delay, callback]);

//   return debouncedValue;
// };

// export default useDebounce;
