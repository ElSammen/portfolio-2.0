import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ponker from './Images/ponker.png';
import ponker2 from './Images/ponker2.png';
import { Container } from 'react-bootstrap';

function ControlledCarousel(props) {
  
  const index = props.index;

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={ponker}
    //       alt="First slide"
    //     />
    //     {/* <Carousel.Caption>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption> */}
    //     <p className="carText">App allows users to enter in the details of the cards out on the board and their own to calculate the pot odds (whether its profitable to call a bet) and their chance of making their hand.</p>
    //     <br />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={ponker2}
    //       alt="Second slide"
    //     />
    //     {/* <Carousel.Caption>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption> */}
    //     <p className="carText">Two input boxes at the top allow the user to input the pot size and the bet required to call in order to receive pot odds</p>
    //     <br />
    //   </Carousel.Item>
      
    // </Carousel>
    <Container className='projectIntro'>
      <h5>Created using:</h5>
      <div className="imgBox">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
      </div>
    {index === 0 ? 
      <Container>
      <img src={ponker} alt="pot odds calculator app first page" className="projectImg" />
      <div className="projectSummary">
        <p className="carText">A React Poker Pot Odds calculator web app. Not 100% finished yet, the intent is to try port this to mobile via React Native after completion.</p>
      </div>
      </Container> : null}
      {index === 1 ? <Container>
      <img src={ponker2} alt="pot odds calculator app second page" className="projectImg" />
      <div className="projectSummary">
        <p className='carText'>App allows users to enter in the details of the cards out on the board and their own to calculate the pot odds (whether its profitable to call a bet) and their chance of making their hand.</p>
      </div>
      </Container> : null}
    </Container>
  );
}

export default ControlledCarousel;