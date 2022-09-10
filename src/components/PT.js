import React from "react";
import logo1 from './cognizantlogo.jpg';
import logo2 from './Salesforcelogo.jpg';
import logo3 from './weblogo.jpg';

export default function PT() {
    return (

        <div className="container"><br /><br />
            <center><h1 style={{color: "#A7D129"}}>Profession Training</h1></center> <br />
            <div className="card-group">
                <div className="card">
                    <img src={logo1} className="card-img-top" alt="logo" height='160px' width= '80%' />
                    <div className="card-body" >
                        <h5 className="card-title">Cognizant Internship</h5>
                        <p className="card-text">Duration: 4 months<br></br>Objective: Appointed as a Trainee in the company in 
                        order to get training in the fields of various technologies like frontend, backend, query language, etc.</p>

                    </div>
                </div>
                <div className="card">
                    <img src={logo2} className="card-img-top" alt="logo" height='180px' width= '80%' />
                    <div className="card-body">
                        <h5 className="card-title">Salesforce Developer Catalyst Plus</h5>
                        <p className="card-text">Duration: 6 weeks<br></br>Objective: To understand the salesforce platform 
                        and to get hands on challenges of different modules and gain knowledge of developing the things.</p>

                    </div>
                </div>
                <div className="card">
                    <img src={logo3} className="card-img-top" alt="logo" height='180px' width= '8%'/>
                    <div className="card-body">
                        <h5 className="card-title">Web Development</h5>
                        <p className="card-text">Duration: 6 weeks<br></br>Objective: To gain the basic knowledge of HTML, CSS and
                         JavaScript that is being used in technology field.</p>

                    </div>
                </div>
            </div>
        </div>
    )
};

