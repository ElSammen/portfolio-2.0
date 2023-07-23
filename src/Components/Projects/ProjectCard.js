import React from 'react'
import { Card } from 'react-bootstrap'
import '../../App.scss'



function ProjectCard({project}) {

  

  return (
    <Card border="dark" className='bg-dark' 
    style={
      {width: '15rem', height: '15.5rem', margin: '1rem'}   
    }
    >
        <Card.Body >
            <Card.Title>
                <span>{project.title}</span>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>
            <Card.Text className="postBody" style={{margintop: '1rem'}}>
                {project.summary}
            </Card.Text>
            {project.imgsrcs ? <div className="logoBox">
            {project.imgsrcs[0]? <Card.Img className="cardLogo" variant="bottom" src={project.imgsrcs[0]} style={{width: '2.5rem', height: '2.5rem', margin: "0.2rem"}}/> : null}
            {project.imgsrcs[1]? <Card.Img className="cardLogo" variant="bottom" src={project.imgsrcs[1]} style={{width: '2.5rem', height: '2.5rem', margin: "0.2rem"}}/> : null}
            {project.imgsrcs[2]? <Card.Img className="cardLogo" variant="bottom" src={project.imgsrcs[2]} style={{width: '2.5rem', height: '2.5rem', margin: "0.2rem"}}/> : null}
            {project.imgsrcs[3]? <Card.Img className="cardLogo" variant="bottom" src={project.imgsrcs[3]} style={{width: '2.5rem', height: '2.5rem', margin: "0.2rem"}}/> : null}
            </div> : null }
            

        </Card.Body>
    </Card>
  )
}

export default ProjectCard