import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import quiz1 from './Images/quiz1.png';
import quiz2 from './Images/quiz2.png';
import cipher from './Images/cipher.png';
import textgame1 from './Images/textgame1.png';
import textgame2 from './Images/textgame2.png';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselImg"
                    src={quiz1}
                    alt="First slide"
                />
                <p className="carText">Questions and answers replace the text on a single html page.</p>
                <br />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselImg"
                    src={quiz2}
                    alt="Second slide"
                />

                <p className="carText">Background colour changes based on </p>
                < br/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={cipher}
                    alt="Third slide"
                />
                <p className="carText">A group project from early on in the bootcamp where we had a few hours to create a caesar cipher.
                    If I had to do it again I'd probably make the decoding a toggle and keep it to two input boxes.</p>
                <br />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={textgame1}
                    alt="Fourth slide"
                />
                <p className="carText">A javascript textgame project assignment that was in order to teach us more about OOP (object oriented programming).
                    Players would enter directional commands to traverse a map of connected objects functioning as rooms.</p>

                    
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={textgame2}
                    alt="Fourth slide"
                />
                <p className="carText">I enjoyed creating the pics a little more than I should have.</p>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;