import React, { useRef } from "react";

const UseRefHook = () => {
  const ref = useRef(0);
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = "hello";
  };

  return (
    <div>
      <h3>UseRefHook</h3>
      <p>count: {ref.current}</p>
      <button onClick={() => (ref.current = ref.current + 1)}>increamet</button>

      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>set Focus</button>
    </div>
  );
};

// refki value ko dekhne ke liye hume comopent ko re render karna hoag
// ref me hum caching ka use kar sakte hai jisme hum data ko staore kara sakte hai jab rerender hoga tab data show hoag

// ques 1: what is useref in react ?
// ans: useref is a hook usd to create a mutable refernce that persist across renders.
// it return a mutable object with a .current property

// ques 2: when would you use useRef?
//  ans: accessing DOM elemnents or managing focus
// storing mutable values that persist without causing re-renders.
// caching values to avoid re-initialisation on re-renders.

export default UseRefHook;
