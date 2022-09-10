import React from "react";
import '../App.css'
import mypic from "./mypic.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Info() {
  
  return (
    
    <div className='container-fluid pt-3 '> <br/> <br/>
      
    <div className="container text-center">
  <div className="row">
    <div className="col">
    <div className="c1">
      <TypeAnimation
        sequence={[
          "Hi, my name is Amaan Ansari...",
          () => {
            // e.g. return fetch("https://test.com"), will be awaited
            return new Promise((resolve) => setTimeout(resolve, 3000));
          },
          "Welcome to my Portfolio...",
        ]}
        speed={10}
        wrapper="div"
        repeat={Infinity}
      /></div>
    </div>
    <div className="col">
    <span className="dpcontainer">
        <img src={mypic} className="img-fluid rounded-circle" alt="profile_picture" />
      </span>
    </div>
  </div>
  </div>
  </div>
    
      
      
    
  );
}
