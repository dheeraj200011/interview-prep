import React, { useState } from "react";
import useDebounce from "../custom hooks/useDebounce";

const Debounce = () => {
  const [inputText, setInputText] = useState("");

  const handleinputChange = (event) => {
    setInputText(event.target.value);
  };

  const debounceSearch = useDebounce(inputText, 1000, () => {
    // make api call haere
  });

  return (
    <div>
      <input type="text" value={inputText} onChange={handleinputChange} />
      <p>{debounceSearch}</p>
    </div>
  );
};

export default Debounce;

// api call ka edzampale hai

// import React, { useState } from "react";
// import useDebounce from "./useDebounce";

// const App = () => {
//   const [inputText, setInputText] = useState("");
//   const [results, setResults] = useState([]);

//   const debouncedValue = useDebounce(inputText, 1000, async (value) => {
//     if (!value) return;

//     try {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/users?name_like=${value}`
//       );

//       const data = await res.json();
//       setResults(data);

//       console.log("API Called with:", value);
//     } catch (err) {
//       console.error("API Error:", err);
//     }
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search user..."
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />

//       <ul>
//         {results.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
