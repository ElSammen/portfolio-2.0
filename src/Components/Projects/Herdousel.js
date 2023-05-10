import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import herdpic1 from './Images/herdpic1.png';
import herdpic2 from './Images/herdpic2.png';
import herdpic3 from './Images/herdpic3.png';
import herdlogin from './Images/herdlogin.png';

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
          src={herdlogin}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <p className="carText">Our login / registration page. We used MongoDB to store user login details and then node and express to query that data and pass it to the frontend for user validation.</p>
        <br />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={herdpic1}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <p className="carText">The profile page allows users to set their profile picture, username, and select genre tags for later searching the Spotify API.
           We used the official genre seeds used by Spotify when providing music suggestions.
           The searchbox incorporated an autocomplete feature preloaded with those genre seeds and would allow us to send over multiple different options to the backend server.</p>
      <br/></Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={herdpic2}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={herdpic3}
          alt="Fourth slide"
        />
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