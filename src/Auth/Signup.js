import React from "react";
import { axiosWithAuth } from "../Components/axiosWithAuth";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useReducer, withRouter } from "react";

const Signup = (props) => {
  const [state, setState] = useState({
    name:"",
    email: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState();

  let history = useHistory();
  const token = window.localStorage.getItem("token");
  if (token !== "") {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/signup", state)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.location.reload();
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((state) => ({
      ...state,
      [id]: value,
    }));
  };
  console.log(state);

  return (
    <div>

          <div className="LoginPage">
                        <h1> Welcome Signup!</h1>

            <form className="Login" onSubmit={handleSubmit}>

                <input
                id="name"
                placeholder="Gamer Tag"
                value={state.name}
                onChange={handleChange}
              />

              <input
                id="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
              />
              <input
                type="password"
                value={state.password}
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </form>

            <div className="auth">
              <button className="login" onClick={handleSubmit}>
                Login
              </button>

              <button className="signup-button">
                <Link to = '/login'>Login</Link>
              </button>
            </div>
          </div>
        </div>
   
  );
};

export default Signup;