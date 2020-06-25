import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

class Project extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Projects</h2>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="../images/Screen Shot 2020-06-01 at 7.08.29 PM.png"
              waves
            />
            <MDBCardBody style={{ backgroundColor: "#204051" }}>
              <MDBCardTitle
                style={{ backgroundColor: "#204051", color: "white" }}
              >
                Project 1
              </MDBCardTitle>
              <MDBCardText
                style={{ backgroundColor: "#204051", color: "white" }}
              >
                My Take on the classic arcade game Space Invaders <br />
                <a
                  rel="noopener"
                  href="https://justinochoa5792.github.io/Space-Invaders/"
                >
                  Go to Game
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="../images/Screen Shot 2020-06-01 at 7.09.40 PM.png"
              waves
            />
            <MDBCardBody style={{ backgroundColor: "#204051", color: "white" }}>
              <MDBCardTitle style={{ backgroundColor: "#204051" }}>
                Project 2
              </MDBCardTitle>
              <MDBCardText
                style={{ backgroundColor: "#204051", color: "white" }}
              >
                Lifestyle app that provides various workouts and recipes <br />
                <a rel="noopener" href="https://ironworkout.netlify.app/">
                  Go to App
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="../images/Screen Shot 2020-06-01 at 7.10.33 PM.png"
              waves
            />
            <MDBCardBody style={{ backgroundColor: "#204051" }}>
              <MDBCardTitle
                style={{ backgroundColor: "#204051", color: "white" }}
              >
                Project 3
              </MDBCardTitle>
              <MDBCardText
                style={{ backgroundColor: "#204051", color: "white" }}
              >
                Quizlet style app that tests user web development knowledge.{" "}
                <br />
                <a rel="noopener" href="https://iron-study-guide.netlify.app/">
                  Go to App
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}

export default Project;
