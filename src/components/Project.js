import React from 'react'
import './project.css'
import projects from './data/data.js' 
import Cards from './Cards.js'

function createCard(project) {
    return  <Cards 
         name ={project.name}
        description = {project.description}
        repolink = {project.repolink}
        deploylink = {project.deploylink}
        img = {project.id}
     />
}


export default function Project() {
    return (
        <div>
            <span>
                <h3 style={{textAlign: 'center' }}>Projects</h3>
            </span>
            <div className="flex-container ">
                   {projects.map(createCard)}
            </div>
            <hr/> 
          
        </div>
    )
}
