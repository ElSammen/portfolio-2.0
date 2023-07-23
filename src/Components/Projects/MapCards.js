import React from 'react'
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectInfo from './ProjectInfo'


function MapCards() {
    const [project, setProject] = useState('initial');

    const expandCard = (project) => {
        setProject(project);
    }

    return ProjectInfo.map((project) => (
      <ProjectCard key={project.id} project={project} onClick={expandCard} />
    ));
  }

export default MapCards