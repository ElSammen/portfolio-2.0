import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CV from './CV.pdf';
import cv1 from './Images/cv1.png';
import cv2 from './Images/cv2.png';
import cv3 from './Images/cv3.png'; 

function MeCV() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);



  return (
    <Container className="cvPage">
      <div> <a href={require('./CV.pdf')} download={CV} className="downloadButton">Care to download a copy?</a></div>
      {(pageNumber != 1 ? <div className="prevButton" onClick={() => setPageNumber(pageNumber - 1)}>⇦ Previous</div> : null)}
      {(pageNumber === 1 ? <img src={cv1} className="cvImage" /> : null)}
      {(pageNumber === 2 ? <img src={cv2} className="cvImage" /> : null)}
      {(pageNumber === 3 ? <img src={cv3} className="cvImage" /> : null)}
      {(pageNumber !== 3 ? <div className="nextButton" onClick={() => setPageNumber(pageNumber + 1)}>Next ⇨</div> : <div className="returnButton "onClick={() => setPageNumber(1)}>Return ⟲</div>)}
    </Container>

  )
}

export default MeCV