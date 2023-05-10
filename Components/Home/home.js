import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Typewriter from 'typewriter-effect';
import placeholder from './Images/placeholder.png'

function home() {
  return (
    <>

      <Container className='homePage'>
      
        <div className="intro">
          <div className="intro1">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Liam Salmon')
                  .callFunction(state => {
                    state.elements.cursor.setAttribute('hidden', 'hidden');
                    typewriter.stop();
                  })
                  .start();
              }}
            />
            <h1>Full Stack Web Developer</h1>
          </div>
          
            <img src={placeholder} alt="Liam Salmon" className="charmer" ></img>
          
        </div>
        <div className="homeBody d-flex">
          <div className="homeBody1">
            <div className="homeBody1TextBox">
              <p className="homeBody1Text">A recent fledgling from <em><a className="devAcadLink" href="https://thedeveloperacademy.com/">The Developer Academy</a></em>'s nest (Full Stack Software Developer bootcamp).
                I'm looking to take my first steps into an exciting new industry and career.</p>
              <p className="homeBody1Text"></p>
              <p className="homeBody1Text">Check me out below or get in touch and lets see how we can help eachother.</p>
            </div>
            <div className="contactBox"></div>
            <a target="_blank" href="https://www.linkedin.com/in/liam-salmon-9053b8265/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin profile" className="homeBodyImg pageLink" width="35px"></img></a>
            <a target="_blank" href="https://github.com/ElSammen"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github link" className="homeBodyImg pageLink" width="35px"></img></a>
            <a target="_blank" href="mailto://liam_salmon@live.co.uk" ><img src="https://cdn-icons-png.flaticon.com/512/546/546394.png" alt="compose new mail link" className="homeBodyImg pageLink" width="35px"></img></a>
          </div>
          <div className="homeBody2">
            <p className="homeBody2Text">Skillset</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="homeBodyImg" width="35px" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
            <img src="https://logos-download.com/wp-content/uploads/2016/09/Sass_logo-700x524.png" alt="Sass" className="homeBodyImg" width="35px" />
          </div>
        </div>
      </Container>

    </>
  )
}

export default home