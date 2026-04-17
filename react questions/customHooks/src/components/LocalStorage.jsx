import React from "react";
import useLocalStorage from "../custom hooks/useLocalStorage";

const LocalStorage = () => {
  const [value, setValue, removeValue] = useLocalStorage("username", "");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter username"
      />

      <button onClick={removeValue}>Remove</button>

      <p>Stored Value: {value}</p>
    </div>
  );
};

export default LocalStorage;
