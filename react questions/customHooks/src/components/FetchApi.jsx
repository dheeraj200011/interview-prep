import React from "react";
import useFetch from "../custom hooks/useFetch";

const FetchApi = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  console.log(data);

  return (
    <div>
      <h1>useFetch hook</h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.slice(0, 10).map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FetchApi;
