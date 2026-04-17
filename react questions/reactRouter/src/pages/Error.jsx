import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      Something went wrong
      <p>{error.data}</p>
      <Link to={-1}>Go Back</Link>
    </div>
  );
};

export default Error;
