import React, { useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import '../../App.scss'
import Herdousel from './Herdousel'
import Weathersel from './Weathersel'
import R8sel from './R8sel'
import Ponkercel from './Ponkercel'
import Sparesel from './Sparesel'
import MapCards from './MapCards'


function Projects() {

  const [project, setProject] = useState('initial');
  const [index, setIndex] = useState(0);


  // const projectClick = (project) => {
  //   setProject(project);
  //   setIndex(0);
  // }










  return (
    <Container className="projectBody">
      <Container className="projectViews">
        {/* <Container className="projectbuttons">
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('herd')}> Herd Music App </div>
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('weather')}> Weather App </div>
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('r8')}> R8 Music App </div>
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('ponker')}> Pot Odds Calculator </div>
          <div className="projectbutton" rel="noopener noreferrer" onClick={() => projectClick('sample')}> Sample smaller projects </div>
        </Container> */}



        {
          project === 'initial' ? (
            <>
            <div className="projectIntro">
              <br />

              <p className="carText">Here are some of my projects, please click one to learn more!</p>
            
            </div>
            <Container className="projectCards">

            <MapCards />
    
            </Container>
            </>

          ) : null
        }
        {project === "herd" ? (
          <>
            <h4>Herd </h4>
            <h5>A full stack Spotify API powered music recommendation web app</h5>
            <div className="hostLinks"><a href="https://herd-frontend.onrender.com/login" target="_blank" className="hostLink">Live Site</a><a href="https://github.com/ElSammen/Herd" target="_blank" className="hostLink">Github Repo</a></div>
            <Herdousel index={index} />
            <div className="buttonBox">
              {(index > 0) && (index < 4) ? <div className='prevButton projectBtn' onClick={() => setIndex(index - 1)}>Previous</div> : null}
              {(index === 0) || (index < 3) ? <div className='nextButton projectBtn' onClick={() => setIndex(index + 1)}>Next</div> : null}
            </div>

          </>

        ) : null}

        {project === "weather" ? (
          <>
            <h4>A React weather app using the OpenWeather API</h4>
            <div className='hostLinks'>
              <a href="https://elsammen.github.io/weather-api/#/days" target="_blank" className="hostLink">Live Site</a><a href="https://github.com/ElSammen/weather-api" target="_blank" className="hostLink">Github Repo</a>
            </div>
            <Weathersel index={index} />
            <div className="buttonBox">
              {(index > 0) && (index < 4) ? <div className='prevButton projectBtn' onClick={() => setIndex(index - 1)}>Previous</div> : null}
              {(index === 0) || (index < 3) ? <div className='nextButton projectBtn' onClick={() => setIndex(index + 1)}>Next</div> : null}
            </div>
          </>
        ) : null}

        {project === "r8" ? (
          <>
            <h4>A React dummy social media site allowing rating of posts</h4>
            <div className='hostLinks'>
              <a href="https://jamesmdesign.github.io/rate-my/" target="_blank" className="hostLink">Live Site</a><a href="https://github.com/JamesMDesign/rate-my" target="_blank" className="hostLink">Github Repo</a>
            </div>
            <R8sel index={index} />
            <div className="buttonBox">
              {(index > 0) && (index < 3) ? <div className='prevButton projectBtn' onClick={() => setIndex(index - 1)}>Previous</div> : null}
              {(index === 0) || (index < 2) ? <div className='nextButton projectBtn' onClick={() => setIndex(index + 1)}>Next</div> : null}
            </div>
          </>
        ) : null}

        {project === "ponker" ? (
          <>
            <h4>Poker Pot Odds & Win percentage React App</h4>
            <div className='hostLinks'>
              <p className="hostLink">Not currently live</p><a href="https://github.com/ElSammen/pot-odds" target="_blank" className="hostLink">Github Repo</a>
            </div>
            <Ponkercel index={index} />
            <div className="buttonBox">
              {(index > 0) && (index < 2) ? <div className='prevButton projectBtn' onClick={() => setIndex(index - 1)}>Previous</div> : null}
              {(index === 0) || (index < 1) ? <div className='nextButton projectBtn' onClick={() => setIndex(index + 1)}>Next</div> : null}
            </div>
          </>
        ) : null}

        {project === "sample" ? (
          <>
            <h4>Projects that didn't make the cut</h4>

            <Sparesel />
          </>
        ) : null}
      </Container>




    </Container>
  )
}

export default Projects