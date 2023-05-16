import herdpic1 from './Images/herdpic1.png';
import herdpic2 from './Images/herdpic2.png';
import herdpic3 from './Images/herdpic3.png';
import herdlogin from './Images/herdlogin.png';
import { Container } from 'react-bootstrap';

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
      <img src={herdpic3} alt="herd main page" className="projectImg" />
      <div className="projectSummary">
        <p className="carText">Herd was our final project on the bootcamp, a month long project where we designed and created a MERN (MongoDB, Express, React, Node) full stack web application. A music recommendation site, powered by the official Spotify API.</p>
      </div>
      </Container> : null}
      {index === 1 ? <Container>
      <img src={herdpic1} alt="herd profile page" className="projectImg" />
      <div className="projectSummary">
        <p className='carText'>The profile page allows users to set their profile picture, username, and select genre tags for later searching the Spotify API.
            We used the official genre seeds used by Spotify when providing music suggestions.
            The searchbox incorporated an autocomplete feature preloaded with those genre seeds and would allow us to send over multiple different options to the backend server.</p>
      </div>
      </Container> : null}
      {index === 2 ? <Container>
      <img src={herdlogin} alt="herd login" className="projectImg" />
      <div className="projectSummary">
        <p className='carText'>
        Here is what the initial page would look like for any user not logged in / visiting for the first time. We used JWT (JSON Web Tokens) to authenticate users and store their login details in local storage and then keep them logged in for an hour. We also incorporated the bcrypt library to hash and salt passwords before storing them in the database.
        </p>
      </div>
      </Container> : null}
      {index === 3 ? <Container>
        <img src={herdpic2} alt="herd search page" className="projectImg" />
        <div className="projectSummary">
          <p className='carText'>
          The search page allows users to search for songs based on the genre tags they selected on their profile page. The search results are then displayed in a list, with the option to save them to a playlist. The playlist is then displayed on the profile page, and the user can click on the song to begin playing it in the custom player at the bottom of the screen.
          </p>
        </div>
      </Container> : null}
    </Container>
  );
}

export default ControlledCarousel;