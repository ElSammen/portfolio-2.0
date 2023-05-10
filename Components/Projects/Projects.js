import React, { useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import '../../App.scss'
import Herdousel from './Herdousel'
import Weathersel from './Weathersel'
import R8sel from './R8sel'
import Ponkercel from './Ponkercel'
import Static from './Images/static.gif'
import Sparesel from './Sparesel'

function Projects() {



  const [project, setProject] = useState('initial');

  const projectClick = (project) => {
    setProject(project);
  }


  return (
    <Container className="projectBody">
      <Container className="projectViews">
        <Container className="projectbuttons">
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('herd')}> Herd Music App </div>
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('weather')}> Weather App </div>
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('r8')}> R8 Music App </div>
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('ponker')}> Pot Odds Calculator </div>
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('sample')}> Sample smaller projects </div>
        </Container>
        {
          project === 'initial' ? (
            <div className="projectIntro">
              <br />

              <p className="carText">Here are some of my projects, please click one to learn more!</p>

            </div>
          ) : null
        }
        {project === "herd" ? (
          <>
            <h4>A full stack Spotify API powered music recommendation web app</h4>
            <Herdousel />
          </>

        ) : null}

        {project === "weather" ? (
          <>
            <h4>A React weather app using the OpenWeather API</h4>
            <Weathersel />
          </>
        ) : null}

        {project === "r8" ? (
          <>
          <h4>A React dummy social media site allowing rating of posts</h4>
          <R8sel /></>
        ) : null}

        {project === "ponker" ? (
          <>
          <h4>Poker Pot Odds & Win percentage React App</h4>
          <Ponkercel />
          </>
        ) : null}

        {project === "sample" ? (
          <>
            <h4>Projects that didn't make the cut</h4>
          <Sparesel />
          </>
        ) : null}

      </Container>

      {project === "herd" || project === "weather" || project === "r8" || project === "ponker" ? (<div className="imgBox">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
      </div>) : null
      }

      {project === "sample"
        ? (
          <div className="imgBox">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
          </div>
        ) : null}



    </Container>
  )
}

export default Projects