import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const initialValue = {
  count: 0,
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

      <ShoppingCart />
    </div>
  );
};

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "CLEAR CART":
      return {
        ...state,
        cart: [],
      };

    default:
      break;
  }
};

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button
              onClick={() => dispatch({ type: "REMOVE ITEM", payload: item })}
            >
              Remove from cart
            </button>
          </li>
        ))}
      </ul>

      {products.map((prod) => (
        <button
          key={prod.id}
          onClick={() => dispatch({ type: "ADD ITEM", payload: prod })}
        >
          {prod.name}
        </button>
      ))}

      <button onClick={() => dispatch({ type: "CLEAR CART" })}>
        Claer CART
      </button>
    </div>
  );
};

//ques 1: what is useReducer in recat ?
// ans: it is a hook used for managing complex state logic by utilizing a reducer function
// alternative to usesatte and provide a way to update state based on defined actions.

// ques 2: when should you use useReducer instead of useState?
// ans: when complex state transiyions or logic that involves multiple sub-values.

export default UseReducerHook;
