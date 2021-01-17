import React from "react";
import { axiosWithAuth } from "../Components/axiosWithAuth";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useReducer, withRouter } from "react";

const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState();

  let history = useHistory();
  const token = window.localStorage.getItem("token");
  if (token !== "") {
    return <Redirect to="/" />;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
 axiosWithAuth()
      .post("/login", state)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch(err=>{
         console.log(err)
      })
    }
    catch{
      console.log('err')
    }
   
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
    <div className='login-cont'>
        <div className="auth-cont">
         
          {/* <h4> Welcome login!</h4> */}

            <form className="Login" onSubmit={handleSubmit}>
              <h4> Welcome Login To Team Finder</h4>
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
                <a className = 'authSubmit'  onClick={handleSubmit}>
                Login
              </a>

                <Link className = 'authLinks' to = '/signup'> dont have an account signup</Link>
            </form>

            
          </div>
          
        </div>
  );
};

export default Login;