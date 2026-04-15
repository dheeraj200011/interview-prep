import React, { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

const UseMemoHook = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squareValue = () => {
    console.log("calculation", counter2);
    return counter * counter;
  };

  const squareValueMemo = useMemo(squareValue, [counter]); // ye value ko memoize karega
  const squareValueCallback = useCallback(squareValue, [counter]); // ye fuction ko memoize karega

  return (
    <div>
      <h1>squre counter: {squareValueMemo}</h1>
      <h1>square Counter: {squareValueCallback()}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>

      <h1>{counter2}</h1>
      <button onClick={() => setCounter2(counter2 - 2)}>decrement by 2</button>
    </div>
  );
};
// jab hum counter 2 par work kar rhe hai to squrevalue ka function bhi call ho rha hai jiski koi jarurat nhi hai to isse rokne ke liye useMemo ka use hoga
// isme hume jis sate par ye work karana hai use dependency me dena hoga
// usememo value ko cache karta hai isme value rerender nhi hoti

// ques1: what is useMemo in recat?
// ans: it is a hook used to memoize the result of a function and cache it, recalculating it only if the dependencies change.

// ques 2: when should you use useMemo Hook ?
// ans: whwn computing a value is expensive or time consuming.
// whwn you want to prevent unnecessary re-computation of values across re-renders.

// ques 3: what does useMemo differ from useState ?
// ans: usememo memoize a computed valkue and return the cached value without causing re-renders,
// while useState manages state and trifggers re-renders when the sate changes.

// ques 4: what is useCallback in react ?
// ans: it is used to memoize a provided callback function, returning the memoized version of the function.
// usecallback function ko memoize karta hai gunction rerender nhi hota

// ques 5: when should not use usecallback or usememo?
// When computation is cheap, dependencies change frequently, child components are not memoized, or optimization is premature. These hooks themselves add overhead, so they should be used only when performance issues exist.
// isse memory consumption jayda hota hai
// garabage collection

export default UseMemoHook;
