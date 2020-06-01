import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import {Link} from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Justin Ochoa's Website</h1>
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="../images/Screen Shot 2020-06-01 at 7.08.29 PM.png"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="../images/Screen Shot 2020-06-01 at 7.09.40 PM.png"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="../images/Screen Shot 2020-06-01 at 7.10.33 PM.png"
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
        <Link to='about'>About</Link>
        <Link to='project'>Project</Link>
      </div>
    );
  }
}

export default Home;
