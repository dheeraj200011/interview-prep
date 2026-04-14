import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [data, setData] = useState([]);
  const [seconds, setSeconds] = useState(0);

  const fetchUser = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();
    setData(result.users);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // claen up function
    return () => {
      clearInterval(interval);
      console.log("interval cleared");
    };
  }, []);

  return (
    <div>
      <h3>UseEffecthook</h3>
      {data.slice(0, 10).map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <h3>
              {item.firstName} {item.lastName}
            </h3>
          </div>
        );
      })}

      <p>{seconds}</p>
    </div>
  );
};

// ques 1: what is useEffect in react ?
// ans: useeffect is a hook used in functional component to perform side effects after rendering, such as data fetching, subscriptions or normal DOM manipulation.

// ques 2: why is dependency array used in useEffect ?
// ans: when dependency is empty it runs only once
// when there is any change in this dependency this useeffect will run
// if there is not any depencency it will runs every rerender

// ques 3: how to perform cleanup in useEffect ? expalin /
//  ans: you can return a cleaup function inside useEffect, which runs befire the effect re runs or when the component unmounts.
// ye return function cleaup ki tarah se work kart ahai

// ques4: explain useLayoutEffect and how it is different from useeffect?
// ans: uselayout effect component se phle chalt ahi whi useeffect last me chalta hai.
// uselayout effect sync hai ye code ko block kart hai whi useEffect code ko block nhi karta

export default UseEffectHook;
