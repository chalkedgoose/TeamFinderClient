import React from "react";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Search from "./Search";
import { connect } from "react-redux";

import { getId } from "../actions/postActions";
const PlayerCard = (props) => {
  useEffect(() => {
    props.getId();
  }, []);

  const [playerInfo, setPlayerInfo] = useState([]);
  const [player, setPlayer] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchQuery2, setSearchQuery2] = useState([]);

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://jobs-xmmtw.ondigitalocean.app/player", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setPlayerInfo(res.data);
      });
  }, []);




const j = playerInfo.filter((item) =>item.Archetype.toLowerCase().includes(searchQuery)&&item.Overall.toLowerCase().includes(searchQuery2))
    // console.log(j)  
  
  const Change = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const Change2 = (e) => {
    setSearchQuery2(e.target.value.toLowerCase());
  };
  let s = j.sort((a, b) => {return a.Status.length - b.Status.length;})
console.log(s)

  return (
    <div>
      <div className="searchCont">
        <input className="search" placeholder ='Archetyper' onChange = {Change} value = {searchQuery}/>
        <input className="search" placeholder ='Overall' onChange = {Change2} value = {searchQuery2}/>
        <input className="search" placeholder ='Overall' onChange = {Change2} value = {searchQuery2}/>
        <input className="search" placeholder ='Overall' onChange = {Change2} value = {searchQuery2}/>
        <input className="search" placeholder ='Overall' onChange = {Change2} value = {searchQuery2}/>
      </div>

      {/* <Search/> */}
      <div className="cont">

        {j.map((info) => {
          return (
            <div className="infoCont">
              <div className={info.System}>
                <p className="system"> {info.System} </p>
              </div>
              <div className={info.Status}></div>
              <div className={info.Rep}></div>
              <p> {props.One.name}</p>
              <p> Archetype {info.Archetype}</p>
              <p>OVR{info.Overall}</p>
              <p> Position {info.Position}</p>
              <p> Win percentage {info.Winpercentage}</p>
              <p> Play Style {info.Type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  One: state.getId.UserId,
});

export default connect(mapStateToProps, { getId })(PlayerCard);
