import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", padding: "10px", textDecorationLine:'underline' }}>Background</h1>
        <h2 style={{ textAlign: "center" }}>
          Attended Ironhack Miami Coding Bootcamp <br />
          from March 2020 to June 2020.
        </h2>
        <h1 style={{textAlign:'center', padding:'10px',textDecorationLine:'underline'}}>Profiles</h1>
        <h2 style={{textAlign: "center", padding: "10px", textDecorationLine:'underline' }}><a rel="noopener" href="https://www.linkedin.com/in/justinochoa5792/">Linkedin</a></h2>
        <h2 style={{textAlign: "center", padding: "10px", textDecorationLine:'underline' }}><a rel="noopener" href="https://github.com/justinochoa5792/">GitHub</a></h2>
     <h1 style={{ textAlign: "center", padding: "10px", textDecorationLine:'underline' }}>Skills</h1>
        <h2 style={{ textAlign:'center'}}>
          <li> <img src='../images/download.png' alt="js" style={{height:'40px', margin:'10px'}}/>JavaScript</li>
          <li> <img src='../images/download.jpg' alt='html'style={{height:'30px', margin:'10px'}}/>HTML</li>
          <li><img src='../images/download-1.jpg' alt='css'style={{height:'30px', margin:'10px'}}/>CSS</li>
          <li> <img src='../images/download-1.png' alt='react' style={{height:'30px', margin:'10px'}}/>ReactJS </li>
          <li> <img  src='../images/download-2.jpg' alt='mongo' style={{height: '30px', margin:'10px'}}/> MongoDB</li>
          <li> <img src='../images/images.png' alt='express' style={{height:'20px', margin:'10px'}}/>ExpressJs</li>
        </h2>
        </div>
    );
  }
}

export default About;
