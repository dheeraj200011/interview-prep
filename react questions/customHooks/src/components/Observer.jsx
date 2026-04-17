import React, { useMemo, useRef } from "react";
import useIntersectionObserver from "../custom hooks/useInsertionObserver";

const Observer = () => {
  const ref = useRef(null);

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }),
    [],
  );

  const intersectionentry = useIntersectionObserver(ref, options);

  console.log(intersectionentry?.isIntersecting);

  return (
    <div
      style={{
        height: "200vh",
      }}
    >
      <div
        ref={ref}
        style={{
          height: "50vh",
          backgroundColor: "lightblue",
        }}
      >
        <h2>Dheeraj</h2>
      </div>
    </div>
  );
};

export default Observer;
