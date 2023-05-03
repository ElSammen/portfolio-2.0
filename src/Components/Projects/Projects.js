import React, { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import '../../App.scss'
import Herdousel from './Herdousel'
import Weathersel from './Weathersel'
import R8sel from './R8sel'

function Projects() {

  const [expansionClass, setExpansionClass] = useState('hidden');

  const [expandedState, setExpandedState] = useState({
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    p5: false,
  });

  const expandCard = (projectId) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId],
    }));

    // Hide all other cards when one is expanded
    for (let key in expandedState) {
      if (key !== projectId) {
        setExpandedState((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }
    }
  };

  useEffect(() => {
    // Check if none of the cards are expanded
    const allCardsCollapsed = Object.values(expandedState).every((state) => !state);

    if (allCardsCollapsed) {
      // Show all cards if none are expanded
      setExpansionClass('visible');
    } else {
     if (expandedState.p1 || expandedState.p2 || expandedState.p3 || expandedState.p4 || expandedState.p5) {
       return;
     }
      setExpansionClass('hidden');
    }
  }, [expandedState]);
  
  return (
    <Container className="projectBody">
      <Card className={`projectCard ${expandedState.p1 ? 'furtherInfo' : ''} ${expansionClass}`}>
        <Card.Body>
          <Card.Title><span>Herd</span><Button onClick={() => expandCard('p1')} className='cardButton'>Click me!</Button></Card.Title>
          <Card.Text className="cardText">
            Herd is a full-stack web application that allows users to create and share music playlists with their friends. The application leverages MongoDB for authentication and storage, and utilizes the popular MERN stack, which includes Express for the backend, React for the frontend, and Node for the server.
            <br />
            <div className={`${expandedState.p1 ? 'furtherInfo' : 'furtherIntro'}`}>
              <Herdousel className="herdousel" />
              <span></span>
              <div className="imgBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={`projectCard ${expandedState.p2 ? 'furtherInfo' : ''} ${expansionClass}`}>
        <Card.Body>
          <Card.Title>Poker Pot-Odds Calculator <Button onClick={() => expandCard('p2')} className='cardButton'>Click me!</Button></Card.Title>
          <Card.Text className="cardText">
            A poker pot odd calculator that allows users to input their hand and the board to calculate their odds of winning.
            <br />
            <div className={`${expandedState.p2 ? 'furtherInfo' : 'furtherIntro'}`}>
              <div className="imgBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={`projectCard ${expandedState.p3 ? 'furtherInfo' : ''} ${expansionClass}`}>
        <Card.Body>
          <Card.Title>R8.it <Button onClick={() => expandCard('p3')} className='cardButton'>Click me!</Button></Card.Title>
          <Card.Text className="cardText">
            <span>A group project from when we first moved onto React. The idea was to get a handle on React by creating a social media website that allowed users to create posts and rate them.</span>
            <br />
            <div className={`${expandedState.p3 ? 'furtherInfo' : 'furtherIntro'}`}>
              <R8sel />
              <div className="imgBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={`projectCard ${expandedState.p4 ? 'furtherInfo' : ''} ${expansionClass}`}>
        <Card.Body>
          <Card.Title>Unnamed Weather App<Button onClick={() => expandCard('p4')} className='cardButton'>Click me!</Button></Card.Title>
          <Card.Text className="cardText">
            <p> A group project using RapidAPI's weather API to create a weather app that allows users to search for a city and get the current weather and a 5-day forecast. Features a more detailed view when a card is clicked as well as charts displaying windspeed, temperature and humidity.</p>
            <br />
            <div className={`${expandedState.p4 ? 'furtherInfo' : 'furtherIntro'}`}>
              <Weathersel />
              <br />
              <div className="imgBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={`projectCard ${expandedState.p5 ? 'furtherInfo' : ''} ${expansionClass}`}>
        <Card.Body>
          <Card.Title>Project 5 <Button onClick={() => expandCard('p5')} className='cardButton'>Click me!</Button></Card.Title>
          <Card.Text className="cardText">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            <br />
            <div className={`${expandedState.p5 ? 'furtherInfo' : 'furtherIntro'}`}>
              <div className="imgBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Projects