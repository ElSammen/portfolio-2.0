import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import rating from './Images/rating.png';
import rating2 from './Images/rating2.png';
import rating3 from './Images/rating3.png';


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
          src={rating}
          alt="First slide"
        />
        <p>Initial page on app / website opening.</p>
        <br />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rating2}
          alt="Second slide"
        />

        <p>Dummy data entered for display purposes, accepts any link in image url but we primarily used unsplash royalty free images.</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rating3}
          alt="Third slide"
        />
        <p>Once a post is made a toastr notification pops up in the top right corner and the post is automatically added to the top of the feed below.</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;