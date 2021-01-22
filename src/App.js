import './App.css';
import {BrowserRouter,Route,withRouter,Link,useHistory,Switch} from 'react-router-dom';
import PlayerCard from './Components/PlayerCard'
import {browserHistory} from "react-router"
import logo from './images/Logo.png'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import {useState,useEffect}from 'react'
import MyPlayer from './Components/MyPlayer'
import axios from 'axios'
import { axiosWithAuth } from './Components/axiosWithAuth';
import Home from './Components/Home'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {connect} from 'react-redux'
import PrivateRoute from './PrivateRoute'
import {getId} from './actions/postActions'
import Nav from './Nav'
import Animation from './Components/Animation'
import Edit from './Edit'
import NotFound from './NotFound'

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const App = (props)=> {
  const token = window.localStorage.getItem('token')
   const [user,setUser]=useState([])
   useEffect(()=>{

    props.getId();
  // console.log(props.One)
   },[])


   const Cred = {
    Status:"online"
   } 

   window.localStorage.removeItem('token')
     useEffect(()=>{

   if(token!== null){
  axiosWithAuth().patch(`/player/{ _id: ${props.One._id}, __v: 0 }`,Cred)
  .then(res=>{
  }) 
}
     })


 
  let history = useHistory();



  return (
<div className="App">
<BrowserRouter>

<Nav/>
<Switch>
  {/* <PrivateRoute path = '/find'  exact component = {PlayerCard} /> */}
  <Route exact path = '/' exact component = {Home} />
  {/* <Route path = '/Login' exact component = {Login} /> */}
  <Route exact path = '/Signup' exact component = {Signup} />
  {/* <PrivateRoute path = '/myPlayer/:id' exact component = {MyPlayer} />
  <PrivateRoute path = '/edit/:id' exact component = {Edit} /> */}

      <Route component={NotFound} />
</Switch>

</BrowserRouter>

    </div>

  );
}

const mapStateToProps =  state=>({
    One:state.getId.UserId
})

export default connect(mapStateToProps,{getId})(App)
