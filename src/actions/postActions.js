import {POST_ID,GET_ID} from './types'
import axios from 'axios'
import {useEffect} from 'react'
 const token = window.localStorage.getItem("token");
export const getId = () => dispatch =>{

  if(token!== null){
        axios.get("https://jobs-xmmtw.ondigitalocean.app/login", {
            headers: {
              authorization: token,
            },
          })
          .then(UserId=> {
            dispatch({type:GET_ID,
            payload:UserId.data
            })
          

          })

          
        }


    }
