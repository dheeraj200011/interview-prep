import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options) => {
  const [intersectionObserver, setIntersectionObserver] = useState(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const handler = (entries) => {
        setIntersectionObserver(entries[0]);
      };
      const observer = new IntersectionObserver(handler, options);

      observer.observe(ref.current);

      return () => {
        setIntersectionObserver(null);
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return intersectionObserver;
};

export default useIntersectionObserver;
