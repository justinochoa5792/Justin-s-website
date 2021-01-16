import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdbreact";

class Project extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Projects</h2>
        <MDBRow>
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
                    target="new"
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
              <MDBCardBody
                style={{ backgroundColor: "#204051", color: "white" }}
              >
                <MDBCardTitle style={{ backgroundColor: "#204051" }}>
                  Project 2
                </MDBCardTitle>
                <MDBCardText
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  Lifestyle app that provides various workouts and recipes{" "}
                  <br />
                  <a
                    rel="noopener"
                    href="https://ironworkout.netlify.app/"
                    target="new"
                  >
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
                  <a
                    rel="noopener"
                    href="https://iron-study-guide.netlify.app/"
                    target="new"
                  >
                    Go to App
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid"
                src="../images/Screen Shot 2021-01-16 at 9.51.24 AM.png"
                waves
              />
              <MDBCardBody style={{ backgroundColor: "#204051" }}>
                <MDBCardTitle
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  SpaceX Launch Site
                </MDBCardTitle>
                <MDBCardText
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  React App that allows you to see SpaceX launch stats. <br />
                  <a
                    rel="noopener"
                    href="https://murmuring-refuge-43401.herokuapp.com/"
                    target="new"
                  >
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
                src="../images/Screen Shot 2020-11-06 at 12.39.50 PM.png"
                waves
              />
              <MDBCardBody style={{ backgroundColor: "#204051" }}>
                <MDBCardTitle
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  Relax App
                </MDBCardTitle>
                <MDBCardText
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  An app created to help users relax via breathe control.
                  <br />
                  <a
                    rel="noopener"
                    href="https://justinochoa5792.github.io/Relax-App/"
                    target="new"
                  >
                    Go to Site
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid"
                src="../images/Screen Shot 2020-11-06 at 12.44.30 PM.png"
                waves
              />
              <MDBCardBody style={{ backgroundColor: "#204051" }}>
                <MDBCardTitle
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  Exchange Rate App
                </MDBCardTitle>
                <MDBCardText
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  An app created to help calculate currency exchange rates{" "}
                  <br />
                  <a
                    rel="noopener"
                    href="https://eccalc.netlify.app/"
                    target="new"
                  >
                    Go to Site
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="../images/Screen Shot 2020-08-17 at 2.46.16 PM.png"
              waves
            />
            <MDBCardBody style={{ backgroundColor: "#204051" }}>
              <MDBCardTitle
                style={{ backgroundColor: "#204051", color: "white" }}
              >
                Movie Fight
              </MDBCardTitle>
              <MDBCardText
                style={{ backgroundColor: "#204051", color: "white" }}
              >
                An app created to let you compare movies.
                <br />
                <a
                  rel="noopener"
                  href="https://movie-fite.netlify.app/"
                  target="new"
                >
                  Go to Site
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid"
                src="../images/Screen Shot 2020-11-06 at 12.54.26 PM.png"
                waves
              />
              <MDBCardBody style={{ backgroundColor: "#204051" }}>
                <MDBCardTitle
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  Speech App{" "}
                </MDBCardTitle>
                <MDBCardText
                  style={{ backgroundColor: "#204051", color: "white" }}
                >
                  An App created to help non-verbal people express themselves{" "}
                  <br />
                  <a
                    rel="noopener"
                    href="https://text2talk.netlify.app/"
                    target="new"
                  >
                    Go to Site
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Project;
