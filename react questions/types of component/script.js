// types of compoents

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Component />
    </div>
  );
};

// ques 1: what are smart / stateful/ container components ?
// ans: manage state, write logic, passes data througn props are smart component.

// ques 3: what are dumb / stateless/ presentational components ?
// ans: it only renders ui trhough the props it reciueves and also it doen;t have its own state and lifecycle methods.

// ques 4: what is high order compaonents?
// ans: function that takes a compoent and return a new enhanced component.
// used for code reuse, logic sharing and adding additional functionalities to componets

// ex:
// function withMessage(Component) {
//   return function EnhancedComponent() {
//     return (
//       <div>
//         <h2>Hello from Hoc</h2>
//         <Component />
//       </div>
//     );
//   };
// }

// function MyComponent() {
//   return <p>This is original component</p>;
// }

// let NewComponent = withMessage(MyComponent);

// ques 5: what are pure component ?
// ans: ye basically re-render ko prevent karta hai jab tak props same rhae jaise him prop cjhange hoga tabhi re-render hoga

// ex:
// class based example

// class Component extends React.PureComponent {
//   render() {
//     console.log("class compoent rendered");
//     return <div>pure class componet</div>;
//   }
// }

// FUNCTION COMPOENT

// const MyComponent = React.memo(({ name }) => {
//   console.log("Rendered");
//   return <h2>{name}</h2>;
// });
// ye tabhi work karega jab name prop ki value change hogi

// ques 6: what is controlled component ?
// ans: value of the input field is conmtrolled by React through state isme koi bhi value usestate ke through change hogi.

// ques 7: what is uncontrolled component ?
// ans: isme hum usref ka use karte hai isme hum dom ki value ko access karte hai bina re-render kare.
// useref humare DOM se interact karne ke liye use hota hai.

// via useref

// const Component = () => {
//   const refs = React.useRef(null);

//   function handleClick() {
//     console.log(refs.current.value);
//   }
//   return (
//     <>
//       <input type="text" ref={refs} />
//       <button onClick={handleClick}>get value </button>
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
