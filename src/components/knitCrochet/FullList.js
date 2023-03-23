import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getProjects } from "../../managers/ProjectManager"
import "./knitCrochet.css"

export const FullList = (props) => {
    const navigate = useNavigate()

    const [ projects, setProjects] = useState([])

    //set the projects array from useState equal to the projects being fetched by the manager
    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])


    return (
        <body className="blue">
        <article className="projects">
            {
                projects.map(project => {
                    return <section key={`project--${project.id}`} className="project">
                        <div className="projectTextContainer">
                            <div className="project--name">name: {project.name}</div>
                            <div className="project--type">Type: {project.project_type}</div>
                            <div className="project--toolSize">tool size: {project.tool_size}</div>
                            <div className="project--directions">directions: {project.directions_link}</div>
                            <div className="project--patternType">pattern: {project.pattern_type}</div>
                        </div>
                        <button className="btn btn-4 btn-sep icon-create"
                            onClick={() => {navigate({ pathname: `/projectsingle/${project.id}`})}}>view
                        </button>
                    </section> 
                })
            
            }
        </article>
        </body>
    
    )

}