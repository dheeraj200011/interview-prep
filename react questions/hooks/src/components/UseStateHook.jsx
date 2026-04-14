import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleIncremnetby3 = () => {
    setCount((prev) => prev + 3);
  };
  const handleSubmit = () => {
    console.log(input);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <h1>usesatatehook</h1>
      <h2>{count}</h2>
      <button onClick={handleIncremnetby3}>increament</button>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={data.firstname}
          name="firstname"
          onChange={(e) =>
            setData((prev) => ({ ...prev, firstname: e.target.value }))
          }
          placeholder="firstName"
        />
        <input
          type="text"
          value={data.lastname}
          name="lastname"
          onChange={(e) =>
            setData((prev) => ({ ...prev, lastname: e.target.value }))
          }
          placeholder="lastname"
        />
        <input
          type="text"
          value={data.email}
          name="email"
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="email"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

// ques 1: what is useState ?
// ans: useState ius a hook in react that allows functional components to managae state by declaring state varibales and providing a function to update them

// ques 2: whta is two way data binding and how can you achieve it in react ?
// ans: it is a concept that allows the synchronization of data between the model (or state) and the view in both directions.
// you can achieve it by combining state management with controlled components
// ye input me work karta hai like input value or onchange

// ques 4: build a form of multiple states firstname, lastname and email

export default UseStateHook;
