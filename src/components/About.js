import React from "react";
import gif1 from './gif1.gif';

export default function About(){
    return(
        <div className='container'>
            <section className="aboutsection"> <br /><br />
            Hello! I am Amaan and I enjoy creating things that live on the internet.<br></br> 
            I'm a Software Engineer by profession and working in the Multi-National Company.<br></br>
            Actually, I am new to this corporate industry having 4 months of experience.<br></br>
            Here are a few technologies I've been working with recently:
            <ul><li>HTML</li><li>CSS</li><li>JavaScript</li>
            <li>ReactJS</li><li>SQL</li></ul>
            </section>

            <section>
            {/* <div><h1>Academic Qualifications</h1></div> */}
            <img src={gif1} alt="gif" width='40%' height='30%'  />
            <br /><br /><br /><br />
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Qualifications</th>
      <th scope="col">College/School</th>
      <th scope="col">Year of Passing</th>
      <th scope="col">Grade or %</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">B. Tech(CSE)</th>
      <td>Galgotias University</td>
      <td>2022</td>
      <td>82%</td>
    </tr>
    <tr>
      <th scope="row">12th Class</th>
      <td>St. Francis School</td>
      <td>2018</td>
      <td>75%</td>
    </tr>
    <tr>
      <th scope="row">10th Class</th>
      <td >St. Francis School</td>
      <td>2016</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</section>
            

        </div>
    )
};