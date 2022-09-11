import React from "react";
import gif1 from "./gif1.gif";

export default function About() {
  return (
    <div className="container">
      <section className="aboutsection">
        {" "}
        <br />
        <br />
        Hello! I am Amaan and I enjoy creating things that live on the internet.
        <br></br>
        I'm a Software Engineer by profession and working in the Multi-National
        Company.<br></br>
        Actually, I am new to this corporate industry having 4 months of
        experience.<br></br>
        Here are a few technologies I've been working with recently:
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>SQL</li>
        </ul>
      </section>

      <section>
        <img src={gif1} alt="gif" width="350vw" height="45%" />
        <br />
        <br />
        <br />
        <br />
        <div className="container-fluid">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Qualifications</th>
                <th scope="col">College/School</th>
                <th scope="col">Year of Passing</th>
                {/* <th scope="col">Grade or %</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B. Tech(CSE)</td>
                <td>Galgotias University</td>
                <td>2022</td>
                {/* <td>82%</td> */}
              </tr>
              <tr>
                <td>12th Class</td>
                <td>St. Francis School</td>
                <td>2018</td>
                {/* <td>75%</td> */}
              </tr>
              <tr>
                <td>10th Class</td>
                <td>St. Francis School</td>
                <td>2016</td>
                {/* <td>10.0</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
