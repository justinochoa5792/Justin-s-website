import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div
        className="navbar"
        style={{ backgroundColor: "#84a9ac", margin: "0" }}
      >
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#84a9ac",
            color: "white",
          }}
        >
          Justin Ochoa
        </h1>
        <div>
          <Link
            to="/"
            style={{
              backgroundColor: "#84a9ac",
              color: "white",
            }}
          >
            {" "}
            Home |
          </Link>
          <Link
            to="/about"
            style={{ backgroundColor: "#84a9ac", color: "white" }}
          >
            {" "}
            About |
          </Link>
          <Link
            to="/project"
            style={{ backgroundColor: "#84a9ac", color: "white" }}
          >
            {" "}
            Projects |
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
