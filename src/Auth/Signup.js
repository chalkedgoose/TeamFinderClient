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
  const[reserved,setReserved] = useState(



    
  )
  const[classe,setClasse] = useState('')

  const [submitted, setSubmitted] = useState();

  let history = useHistory();
  const token = window.localStorage.getItem("token");
  if ( token !== null && token!== '') {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/signup", state)
      .then((res) => {
        // window.localStorage.setItem("token", res.data.token);
        // window.location.reload();
        // console.log(res)
        setClasse('none')
        setReserved(
          <div className="Reserved">
            <h1> Reserved </h1>
            <p> Thanks for reserving your Team Finder Account</p>
            <p className="p2">Well send you an email when Team Finder is live</p>
          </div>

        )
        
      })
      .catch((err)=>{
      //  console.log(err)
      })
  };


  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((state) => ({
      ...state,
      [id]: value,
    }));
  };
  // console.log(state);

  return (
    <div> 
    <div className = 'center'>
      <div className = 'reservee'>
{reserved}

      </div>
    </div>

    <div className = {classe}>
      <div className = 'cont2'> 
  <div className='login-cont'>
          

        <div className="auth-cont">
          
                     <form className="Login" onSubmit={handleSubmit}>
                   {/* <h4> Welcome Welcome Create A Team Finder Account</h4> */}
              
                   <h4> Welcome Reserve your Team Finder Account</h4>

                  <input
                id="name"
                placeholder="name"
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
                <a className = 'authSubmit' onClick={handleSubmit}>
                Signup
              </a>

                {/* <Link className = 'authLinks' to = '/login'> Have an account login</Link> */}
            </form>
          </div>
        </div>
            </div>
    </div>
    </div>
  );
};

export default Signup;