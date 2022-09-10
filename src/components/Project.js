import React from "react";
import gif2 from './gif2.gif';

export default function Project() {
  return (
    <div className="container">
      <br /> <br />
      <section className="pro">
        <center><h2 style={{color: "#A7D129"}}>PROJECT</h2></center>
        <br />
        <h3 style={{color: "#C70039"}}>Face Recognition Attendance System</h3><br/><br/>
        <p style={{color: "#FF5733"}}>
          It is a software which recognizes the face of the person and
          automatically  mark down the attendance <br /> with the current date
          and time in an excel sheet. <br />
          It has been built in Python language which uses the concept of 
          OpenCV for facial recognition.
        </p>
      </section>
      <div className="g2">
      <img src={gif2} alt="gif" width='45%' height='45%'/>
      </div>
    </div>
  );
}
