import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import weatherapp1 from './Images/weatherapp1.png';
import weatherapp2 from './Images/weatherapp2.png';
import weatherapp3 from './Images/weatherapp3.png';
import weatherapp4 from './Images/weatherapp4.png';

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
          src={weatherapp1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <p>Initial page you're presented with the various cards.</p>
        <br />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={weatherapp2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <p>Showcasing the location search feature as well as hovering on a card showing the more detailed information.</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={weatherapp3}
          alt="Third slide"
        />
        <p>Once a card is clicked you're taken to a 24 hour timeline of that day with a little more information.</p>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={weatherapp4}
          alt="Fourth slide"
        />
        <p>Displaying the charts we used.</p>
{/* 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;