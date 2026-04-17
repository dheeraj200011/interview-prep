import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem("loggedIn", true);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleInput}
          placeholder="username"
        />
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handleInput}
          placeholder="password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
