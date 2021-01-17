import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { axiosWithAuth } from "./axiosWithAuth";
import { getId } from "../actions/postActions";
import Animation from './Animation'
import {Link} from 'react-router-dom'

const MyPlayer = (props) => {
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
    Gamertag:""
  });

    const [overallRange, setOverallRange] = useState();
    const [wpRange, setWpRange] = useState();
    const [alert, setAlert] = useState("");
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
    axiosWithAuth().post("/player", state)
      .then((res) => {
        console.log(res);
      setAlert(res.data._message)
      setAlert(res.data._message)
      });
      console.log('clicked')
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
                <div className="cont my">
<Animation/>
        <div className="infoCont my">
                   <div className={myPlayer.System}>
                <p className="system"> {myPlayer.System} </p>
              </div>

              <div className={myPlayer.Status}></div>
              <div className="repCont">
              <div id = 'repImage' className={myPlayer.Rep}></div>
              </div>
              <p className = 'Gamertag'> {myPlayer.Gamertag}</p>
            <div className="Win">
            <input  className="range" type="range" value ={myPlayer.Overall}   min = '0' max = '100'/> {myPlayer.Overall}
           </div>
   <div className="Win">
            <input  className="range" type="range" value ={myPlayer.Winpercentage}   min = '0' max = '100'/> {myPlayer.Winpercentage}
           </div>
              <p className = 'Archetype'> Archetype {myPlayer.Archetype}</p>
              <p className = 'Position'> Position {myPlayer.Position}</p>
              <p className = 'PlayStyle'> PlayStyle {myPlayer.Type}</p>    
                      <Link to = {`/edit/${props.One._id}`}>Edit</Link>

        </div>
        </div>
      );
    } else {
        const overallRanges = (e) => {
   setOverallRange(e.target.value)
   setState((state) => ({
     ...state,
     Overall:e.target.value
   }))
  }

    const wpRanges = (e) => {
   setWpRange(e.target.value)
      setState((state) => ({
     ...state,
     Winpercentage:e.target.value
   }))
  }
      return (   
        <div className = 'EditContainer'>        
        <form className = 'createPlayerCard' onSubmit={handleSubmit}>
        
          <Animation/>

                <div className={alert}>
            <p> {alert}</p>
          </div>
          <select name="Rep" onChange={SelectChange}>
            <option selected> Whats your rep?</option>
            <option> Pro </option>
            <option> Allstar </option>
            <option> Superstar </option>
            <option> Elite </option>
            <option> Legend </option>
          </select>
          <select name="Type" onChange={SelectChange}>
            <option selected> What kind of player are you? </option>
            <option> Casual </option>
            <option> Competetive </option>
          </select>
          <select name="System" onChange={SelectChange}>
            <option > What console are you on? </option>
            <option> Playstation </option>
            <option> XBOX </option>
          </select>
          <select name="Position" onChange={SelectChange}>
            <option> What position do you play?</option>
            <option> Point Gaurd </option>
            <option> Shooting Gaurd </option>
            <option> Small Forward </option>
            <option> Power Forward </option>
            <option> Center </option>
          </select>
               <input
            value={state.Gamertag}
            name="Gamertag"
            onChange={onChange2}
            placeholder="Gamertag"
          />
          <input
            value={state.Archetype}
            name="Archetype"
            onChange={onChange2}
            placeholder="Archetype"
          />
          <div>
       <input  className="range" type="range" onChange={overallRanges}  min = '60' max = '99'/> {overallRange} OVR
          </div>

       <div >
          <input  className="range" type="range" onChange={wpRanges}   min = '0' max = '99'/> {wpRange} WP%
          </div>

          <button onClick={handleSubmit}>Submit </button>
        </form>
               </div>  

      );
    }
  };

  return Form();
};
const mapStateToProps = (state) => ({
  One: state.getId.UserId,
});

export default connect(mapStateToProps, { getId })(MyPlayer);