import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [searchParams, setSearchparams] = useSearchParams();

  const handleParams = (newParams) => {
    const paramsObject = Object.fromEntries(searchParams.entries());
    const mergeParams = { ...paramsObject, ...newParams };
    setSearchparams(mergeParams);
  };

  return (
    <div>
      <h4>Colrs</h4>
      <button onClick={() => handleParams({ color: "white" })}>White</button>
      <button onClick={() => handleParams({ color: "red" })}>Red</button>
      <button onClick={() => handleParams({ color: "blue" })}>Blue</button>

      <h4>Size</h4>
      <button onClick={() => handleParams({ size: "6" })}>6</button>
      <button onClick={() => handleParams({ size: "7" })}>7</button>
      <button onClick={() => handleParams({ size: "8" })}>8</button>
    </div>
  );
};

export default Product;
