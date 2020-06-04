import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';


class Project extends Component {
    render() {
        return (
            <div className="cards">
                Projects
                <MDBCol>
        
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="../images/Screen Shot 2020-06-01 at 7.08.29 PM.png" waves />
        <MDBCardBody>
          <MDBCardTitle>Project 1</MDBCardTitle>
          <MDBCardText>
           My Take on the classic arcade game Space Invaders <br/>
           <a rel="noopener" href="https://justinochoa5792.github.io/Space-Invaders/">Go to Game</a>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardBody>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="../images/Screen Shot 2020-06-01 at 7.09.40 PM.png" waves />
        <MDBCardBody>
          <MDBCardTitle>Project 2</MDBCardTitle>
          <MDBCardText>
           Lifestyle app that provides various workouts and recipes <br/>
           <a rel="noopener" href="https://ironworkout.netlify.app/">Go to App</a>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardBody>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="../images/Screen Shot 2020-06-01 at 7.10.33 PM.png" waves />
        <MDBCardBody>
          <MDBCardTitle>Project 3</MDBCardTitle>
          <MDBCardText>
         Quizlet style app that tests user web development knowledge. <br/>
         <a rel="noopener" href="https://iron-study-guide.netlify.app/">Go to App</a>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardBody>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
            </div>
        );
    }
}

export default Project;