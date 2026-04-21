import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice.js";
import cartReducer from "./slices/cartSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // sliceName: slicefile name
    filter: filterReducer,
  },
});

// reducer ke andar slices rakhenge
// ab hum dispatch se action s ko chalyenge
// or useSELECTOR se data ko get karenge
// or jha apim call karna hoga wah thunk wala function call kar denge with useEffect
