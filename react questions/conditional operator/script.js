const App = () => {
  return <div></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// && : Ye compare nahi karta, balki check karta hai ki dono conditions true hain ya nahi , dono conditions true honi chahiye
// || : ye tab tak chlalege jab tak condition true na ho jaye, Agar ek bhi condition true ho, result true hota hai

// ques 2: diff between .? vs ?? ?
// ans: console.log(user.address?.city); ye optional chaining hai
// ?? ye Nullish Coalescing Operator bolte hain. Ye JavaScript me default value assign karne ke liye use hota hai — jab value null ya undefined ho.
// ex: const value = null
// console.log(value ?? 10)
// gar value null hai hum 10 ko use karenge
