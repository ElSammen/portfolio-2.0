import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ponker from './Images/ponker.png';
import ponker2 from './Images/ponker2.png';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ponker}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <p className="carText">App allows users to enter in the details of the cards out on the board and their own to calculate the pot odds (whether its profitable to call a bet) and their chance of making their hand.</p>
        <br />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ponker2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <p className="carText">Two input boxes at the top allow the user to input the pot size and the bet required to call in order to receive pot odds</p>
        <br />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel;