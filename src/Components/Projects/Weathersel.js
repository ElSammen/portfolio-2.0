import {Container} from 'react-bootstrap';
import weatherapp1 from './Images/weatherapp1.png';
import weatherapp2 from './Images/weatherapp2.png';
import weatherapp3 from './Images/weatherapp3.png';
import weatherapp4 from './Images/weatherapp4.png';

function ControlledCarousel(props) {
  
  const index = props.index;

  return (
<Container className="projectIntro">
      <h5>Created using:</h5>
      <div className="imgBox">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
      </div>
      {index === 0 ? 
      <Container>
      <img src={weatherapp1} alt="weather app page one" className="projectImg" />
      <div className="projectSummary">
        <p className="carText">A group project React application showcasing weather data returned from OpenWeather API, features a location search for localized information and a more detailed 24 hour overview upon clicking on of the display cards.</p>
      </div>
      </Container> : null}
      {index === 1 ? <Container>
      <img src={weatherapp2} alt="herd profile page" className="projectImg" />
      <div className="projectSummary">
        <p className='carText'>Showcasing the location search feature as well as hovering on a card showing the more detailed information.</p>
      </div>
      </Container> : null}
      {index === 2 ? <Container>
      <img src={weatherapp3} alt="herd login" className="projectImg" />
      <div className="projectSummary">
        <p className='carText'>
        Once a card is clicked you're taken to a 24 hour timeline of the day.
        </p>
      </div>
      </Container> : null}
      {index === 3 ? <Container>
        <img src={weatherapp4} alt="herd search page" className="projectImg" />
        <div className="projectSummary">
          <p className='carText'>
          Displaying the chart we used.
          </p>
        </div>
      </Container> : null}
    </Container>
  );
}

export default ControlledCarousel;