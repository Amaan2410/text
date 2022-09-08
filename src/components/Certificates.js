import React from "react";
import c1 from './c1.jpg';
import c2 from './c2.jpg';
import c3 from './c3.png';
import Navbar from "./Navbar";
import c4 from './c4.png';
import c5 from './c5.png';
import Footer from './Footer';


export default function Certificates(){

    return(
      <>
      <Navbar/>
      <h1><center> Certifications</center></h1>
    
      <div className="c" width='10%'>
     
      
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src={c1} className="d-block w-100 " alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={c2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={c3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={c4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={c5} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="container container-fluid">
      <section>
        There are many certifications which I have achieved in various other technical domains.
        Some of them are of LinkedIn certificates and some from Udemy as well in the field of - 
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>SQL</li>
          <li>Interpersonal Communication</li>
          <li>Project Management</li>
          <li>Responsive Web Design</li>
          <li>Python</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>Cloud Computing</li>
          <li>etc</li>
          

        </ul>
      </section>
</div>
<Footer/>

</>
    )
};