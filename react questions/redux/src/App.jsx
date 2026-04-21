import React from "react";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// ques 1: what is Redux ?
// ans: REDUX is a state management library often used with react. it helps in managing the application state in a predicatbel way by centralizing the state in a single store, enabling easy debugging and testing.

// ques 2: How does the redux state management works ?
// ans: first hum action ko target karenge like action or payload , second reducer se state change hoti hai, phir usko store me bhejte hai, or phir useSelector hi help se data bheja jata hai

// ques3: How do you define an action in Redux?
// ans: action ke andar type or payload hota hai.

// ques 4: What is a reducer in redux ? Show an example?
// ans:

// ques 5: How do you create a Redux store ?
// ans:

export default App;
