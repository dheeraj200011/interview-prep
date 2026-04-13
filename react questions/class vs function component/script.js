// ye functional compoinet hai

// const App = () => {
//   return <div></div>;
// };

// ques 1: what is class based component ?
// ans: ways to carete component using es6  classes.
// older way to write components
// class based compoennt have access of lifecycle methods and state.

class Counter extends React.Component {
  constructor(props) {
    super(props); // ye parent props ko access kar sakta hai
    this.state = {
      count: 0,
    };
  }

  // ye compont ke start me chal hai
  componentDidMount() {
    console.log("component mounted");
  }

  // ye jab koi componrnt me chage hota hai to update hota hai
  componentDidUpdate(prevState, prevProps) {
    if (prevState.count !== this.state.count) {
      console.log("Count updated:", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increament
        </button>
      </div>
    );
  }
}

// ques2: explain constructor and super keywords here
// ans: constructor me hum state ko initialize karte hai
// constructur me hum func ko bind karte hai

// super constructor
// ye basically parent class ke constructor ko call karne me kaam aata hai.

// ques 3: explain component lifecycle methods by adding them to this counter app
// ans: componentwillmount, componentdidupdate, componentwillunmount

// ques 4: explain function based component and what are hooks Exapain any 2?
// ans: morfern react me function based componet use hota hai,hooks rae functions that allow functional compoent to useState, lifecycle metyhods and other react features do hooks honge useState, useeffect

// ques 5: convert this class based component to function based componrent and explain it ?
// ans: 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
