import React from 'react'
import {gsap, TweenMax, TimelineMax, Power3} from 'gsap';
import {useState, useEffect}  from 'react'
const Animation = () => {
      let tl = new TimelineMax ();

    const div = document.querySelector ('.Animation');

useEffect(()=>{ 
 tl.to ('.Animation', 0.5, {display:'none', ease: Power3.easeOut})

})



    // .from(div,8,{css:{"display":'none'}})

    return (
        <div className="Animation">
            <div className="spinnerCont">
<div class="lds-dual-ring"></div>
            </div>
        </div>
    )
}

export default Animation
