const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return React.createElement(
    "div",
    null,
    React.createElement("p", null, count),
    React.createElement("button", { onClick: increment }, "increment"),
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
