import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

const UseContextHook = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <div
      style={{
        backgroundColor: `${theme === "light" ? "white" : "black"}`,
        color: `${theme === "light" ? "black" : "white"}`,
        width: "100vw",
        height: "100vh",
      }}
    >
      UseContextHook
      <button onClick={handleTheme}>change Theme</button>
    </div>
  );
};

export default UseContextHook;
