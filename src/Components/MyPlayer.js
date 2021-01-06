import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { axiosWithAuth } from "./axiosWithAuth";
import { getId } from "../actions/postActions";
import { Redirect } from "react-router";
const MyPlayer = (props) => {
  let id = props.match.params.id;
  const token = window.localStorage.getItem("token");
  const [myPlayer, setMyPlayer] = useState([]);
  const [state, setState] = useState({
    Archetype: "",
    Overall: "",
    Position: "",
    Rep: "",
    System: "",
    Type: "",
    Winpercentage: "",
  });
  //   "http://https://jobs-xmmtw.ondigitalocean.app//player/{ _id: 5fd9811cc0cd184690c65f07, __v: 0 }"
  useEffect(() => {
    props.getId();
  },[]);
  useEffect(() => {
    axios
      .get(
        `https://jobs-xmmtw.ondigitalocean.app/player/{ _id: ${props.match.params.id}, __v: 0 }`,
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        setMyPlayer(res.data);
      })
      .catch((err) => {});
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/player", state)
      .then((res) => {
        console.log(res);
        window.location.reload()
      });
  };

  const onChange = (e) => {
    let name = e.target.value;
    if (name.length < 3) {
      setState((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    }
    console.log(state);
  };
  const onChange2 = (e) => {
    let name = e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    console.log(state);
  };

  const SelectChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target[e.target.selectedIndex].value,
    }));

    console.log(state);
  };

  const Form = () => {
    if (myPlayer !== null) {
      return (
        <div className="infoCont my">
            <div className={myPlayer.System}> 
              <p className="system"> {myPlayer.System} </p>
            </div>
            <div className={myPlayer.Status}></div>
            <div  id = 'my' className={myPlayer.Rep}></div>
            <p> Username</p>
            <p> Archetype {myPlayer.Archetpye}</p>
            <p>OVR{myPlayer.Overall}</p>
            <p> Position {myPlayer.Position}</p>
            <p> Win percentage {myPlayer.Winpercentage}</p>
            <p> Play Style {myPlayer.Type}</p>
        </div>
      );
    } else {
      return (
        <form onSubmit={handleSubmit}>
                    <button onClick={handleSubmit}>Submit </button>

          <select name="Rep" onChange={SelectChange}>
            <option> Pro </option>
            <option> Allstar </option>
            <option> Superstar </option>
            <option> Elite </option>
            <option> Legend </option>
          </select>
          <select name="Type" onChange={SelectChange}>
            <option> Casual </option>
            <option> Competetive </option>
          </select>
          <select name="System" onChange={SelectChange}>
            <option> Playstation </option>
            <option> XBOX </option>
          </select>
          <select name="Position" onChange={SelectChange}>
            <option> Point Gaurd </option>
            <option> Shooting Gaurd </option>
            <option> Small Forward </option>
            <option> Power Forward </option>
            <option> Center </option>
          </select>
          <input
            value={state.Archetype}
            name="Archetype"
            onChange={onChange2}
            placeholder="Archetype"
          />
          <input
            value={state.Overall}
            name="Overall"
            onChange={onChange}
            placeholder="Overall"
          />
          <input
            value={state.Winpercentage}
            name="Winpercentage"
            onChange={onChange}
            placeholder="Winpercentage"
          />
        </form>
        
      );
    }
  };

  return Form();
};
const mapStateToProps = (state) => ({
  One: state.getId.UserId,
});

export default connect(mapStateToProps, { getId })(MyPlayer);