import React from "react";
import {
  BrowserRouter,
  Route,
  withRouter,
  Link,
  useHistory,
} from "react-router-dom";
import logo from "./images/Logo.png";
import { axiosWithAuth } from "./Components/axiosWithAuth";
import { getId } from "./actions/postActions";
import { connect } from "react-redux";

const Nav = (props) => {
  const Logout = () => {
    axiosWithAuth()
      .patch(`/player/{ _id: ${props.One._id}, __v: 0 }`, CredOff)
      .then(window.localStorage.setItem("token", ""));
  };

  const CredOff = {
    Status: "offline",
  };

  return (
    <div>
      <BrowserRouter>
        <nav>
          <div className="navCont">
            <div className="logo-cont">
              <img src={logo} className="logo" /> <h1> Team Finder</h1>
            </div>
            <a href="/"> Home </a>
            {/* <Link to = {( `/myPlayer/${props.One._id}`)}>My Player</Link> */}
            <a href={`/myPlayer/${props.One._id}`}> My Player</a>
            <a href="/find"> Explore </a>
            <a href="/login" onClick={Logout}>
              {" "}
              Logout{" "}
            </a>
          </div>
        </nav>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  One: state.getId.UserId,
});

export default connect(mapStateToProps, { getId })(Nav);