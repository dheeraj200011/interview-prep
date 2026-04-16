import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleHook = () => {
  const childRef = useRef(null);

  return (
    <div>
      <button onClick={() => childRef.current.focusInput()}>Focus Input</button>

      <ChildComponent ref={childRef} />
    </div>
  );
};

// ques1: how do you call a function of child component from parent component ?

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focusInput,
    };
  });

  return <input type="text" ref={inputRef} />;
});

export default UseImperativeHandleHook;

// useImperativeHandle ka use child component ke data ko praent me bhejne ke liye use karte hai
