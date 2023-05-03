import React, { useState } from 'react'
import { Container, div } from 'react-bootstrap'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import CV from './CV.pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


function MeCV() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container className="cvPage">
      {(onDocumentLoadSuccess ? <div> <a download={CV} className="downloadButton">Care to download a copy?</a></div> : null)}
      {(pageNumber != 1 ? <div className="prevButton" onClick={() => setPageNumber(pageNumber - 1)}>⇦ Previous</div> : null)}
      <Document file={CV} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} />
      </ Document>
      {(pageNumber !== 3 ? <div className="nextButton" onClick={() => setPageNumber(pageNumber + 1)}>Next ⇨</div> : <div className="returnButton "onClick={() => setPageNumber(1)}>Return ⟲</div>)}

    </Container>

  )
}

export default MeCV