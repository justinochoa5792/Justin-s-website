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
     <h1 style={{ textAlign: "center", padding: "10px", textDecorationLine:'underline' }}>Skills</h1>
        <h2 style={{ textAlign:'center'}}>
          <li> JavaScript</li>
          <li> HTML</li>
          <li>CSS</li>
          <li> ReactJS </li>
          <li> MongoDB</li>
          <li> NodeJs</li>
          <li> ExpressJs</li>
        </h2>
        </div>
    );
  }
}

export default About;
