// state vs props

const App = () => {
  return <div>App</div>;
};

// ques 1: explain state vs props in both class and functional componet ?
// ans: props: read only data from a parent component to a child component or props are imuutable and it is used to comunivcate between componets
// state: states are mutable and represent the internal state of a component and it is controlled or managed within the component itself.

// diff b/w state and props ?
// props are immuatabel data passed down from parent components
// states are mutable and represents the internal state of componets
// in class componnet this.props and this.state are used to access props and state respectively.
// in functiobnal component, props are paased as an argument to the component function and state is managed using hooks like usestate

// ques: 2 what is children prop ?
// ans:

// function Component () {
//   return (
//     <Card>This is card 1</Card>
//   )
// }

// function Card ({ children }) {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }
// to jo <Card> tag ke beech me tha wo {children} me print hoga

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
