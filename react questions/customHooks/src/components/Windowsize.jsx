import React from "react";
import useWindowSize from "../custom hooks/useWindowSize";

const Windowsize = () => {
  const { windowSize } = useWindowSize();
  return (
    <div>
      <h1>Window Size</h1>
      <p>width: {windowSize.width}</p>
      <p>height: {windowSize.height}</p>
    </div>
  );
};

export default Windowsize;
