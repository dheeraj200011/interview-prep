// create a window size custom hook to check window height and width

import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    (window, addEventListener("resize", handleSize));
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return {
    windowSize,
  };
};

export default useWindowSize;
