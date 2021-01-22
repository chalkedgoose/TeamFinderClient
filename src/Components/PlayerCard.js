import React from "react";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Search from "./Search";
import { connect } from "react-redux";
import search from '../images/search.png';
import Animation from './Animation';
import { getId } from "../actions/postActions";
const PlayerCard = (props) => {
  useEffect(() => {
    props.getId();
  }, []);

  const [playerInfo, setPlayerInfo] = useState([]);
  const [player, setPlayer] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchQuery2, setSearchQuery2] = useState([]);
  const [searchQuery3, setSearchQuery3] = useState([]);
  const [searchQuery4, setSearchQuery4] = useState([]);
  const [searchQuery5, setSearchQuery5] = useState([]);

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







  
  const Change = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const Change2 = (e) => {
    setSearchQuery2(e.target.value.toLowerCase());
  };
  const Change3 = (e) => {
    setSearchQuery3(e.target.value.toLowerCase());
  };
    const Change4 = (e) => {
    setSearchQuery4(e.target.value.toLowerCase());
  };

      const Change5 = (e) => {
    setSearchQuery5(e.target.value.toLowerCase());
  };
  const j = playerInfo.filter((item) =>
item.Archetype.toLowerCase().includes(searchQuery)&&
item.Overall.toLowerCase().includes(searchQuery2)&&
item.Rep.toLowerCase().includes(searchQuery3)&&
item.Position.toLowerCase().includes(searchQuery4)&&
item.Winpercentage.toLowerCase().includes(searchQuery5)
)

  let s = j.sort((a, b) => {return a.Status.length - b.Status.length;})

  return (
    <div>
      <Animation/>
      <h1 className="welcome"> Find the perfect teammate </h1>
     
      <div className="searchCont">

        <input className="search" placeholder ='Archetype' onChange = {Change} value = {searchQuery}/>
        <svg xmlns="http://www.w3.org/3000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="rgb(0, 255, 179)" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>  
        <input className="search" placeholder ='Overall' onChange = {Change2} value = {searchQuery2}/>
        <svg xmlns="http://www.w3.org/3000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="rgb(0, 255, 179)" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>  
        <input className="search" placeholder ='Rep' onChange = {Change3} value = {searchQuery3}/>
        <svg xmlns="http://www.w3.org/3000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="rgb(0, 255, 179)" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>  
        <input className="search" placeholder ='Position' onChange = {Change4} value = {searchQuery4}/>
        <svg xmlns="http://www.w3.org/3000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="rgb(0, 255, 179)" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>  
        <input className="search" placeholder ='WP%' onChange = {Change5} value = {searchQuery5}/>
<svg xmlns="http://www.w3.org/3000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="rgb(0, 255, 179)" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>  
      </div>

      {/* <Search/> */}
      <div className="cont">

        {j.map((info) => {
          return (
            <div key = {info.id}className={`infoCont`}>
              <div className={info.System}>
                <p className="system"> {info.System} </p>
              </div>

              <div className="repCont">
              <div id = 'repImage' className={info.Rep}></div>
              </div>
              <p className = 'Gamertag'> {info.Gamertag}</p>
            <div className="Win">
            <input  className="range" type="range" value ={info.Overall}   min = '0' max = '100'/> {info.Overall}
           </div>
           <div className="Win">
            <input  className="range" type="range" value ={info.Winpercentage}   min = '0' max = '100'/> {info.Winpercentage}
           </div>
              <p className = 'Archetype'> Archetype {info.Archetype}</p>
              <p className = 'Position'> Position {info.Position}</p>
              <p className = 'PlayStyle'> PlayStyle {info.Type}</p>
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
