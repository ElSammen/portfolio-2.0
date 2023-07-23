import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import quiz1 from './Images/quiz1.png';
import quiz2 from './Images/quiz2.png';
import cipher from './Images/cipher.png';
import textgame1 from './Images/textgame1.png';
import textgame2 from './Images/textgame2.png';
import { Container } from 'react-bootstrap';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className="projectIntro">
            <h5>Created using:</h5>
            <div className="imgBox">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
          </div>
          {index === 0 ?
            <Container>
                <img src={quiz1} alt="quiz app first page" className="projectImg" />
                <div className="projectSummary">
                    <p className="carText">Questions and answers replace the text on a single html page.</p>
                </div>
            </Container> : null}
            {index === 1 ?
                <Container>
                    <img src={quiz2} alt="quiz app second page" className="projectImg" />
                    <div className="projectSummary">
                        <p className="carText">Background colour changes based on whether the answer is correct or incorrect.</p>
                    </div>
                </Container> : null}
            {index === 2 ?
                <Container>
                    <img src={cipher} alt="cipher app" className="projectImg" />
                    <div className="projectSummary">
                        <p className="carText">A group project from early on in the bootcamp where we had a few hours to create a cipher app.</p>
                    </div>
                </Container> : null}
            {index === 3 ?
                <Container>
                    <img src={textgame1} alt="text game first page" className="projectImg" />
                    <div className="projectSummary">
                        <p className="carText">A javascript textgame project assignment that was in order to teach us more about OOP (object oriented programming).
                            Players would enter directional commands to traverse a map of connected objects functioning as rooms.</p>
                    </div>
                </Container> : null}
            {index === 4 ?
                <Container>
                    <img src={textgame2} alt="text game second page" className="projectImg" />
                    <div className="projectSummary">
                        <p className="carText"></p>
                    </div>
                </Container> : null}
            
        </Container>
        // <Carousel activeIndex={index} onSelect={handleSelect}>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 carouselImg"
        //             src={quiz1}
        //             alt="First slide"
        //         />
        //         <p className="carText">Questions and answers replace the text on a single html page.</p>
        //         <br />
                
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 carouselImg"
        //             src={quiz2}
        //             alt="Second slide"
        //         />

        //         <p className="carText">Background colour changes based on </p>
        //         < br/>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 "
        //             src={cipher}
        //             alt="Third slide"
        //         />
        //         <p className="carText">A group project from early on in the bootcamp where we had a few hours to create a caesar cipher.
        //             If I had to do it again I'd probably make the decoding a toggle and keep it to two input boxes.</p>
        //         <br />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={textgame1}
        //             alt="Fourth slide"
        //         />
        //         <p className="carText">A javascript textgame project assignment that was in order to teach us more about OOP (object oriented programming).
        //             Players would enter directional commands to traverse a map of connected objects functioning as rooms.</p>

                    
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={textgame2}
        //             alt="Fourth slide"
        //         />
        //         <p className="carText">I enjoyed creating the pics a little more than I should have.</p>
        //     </Carousel.Item>
        // </Carousel>
    );
}

export default ControlledCarousel;