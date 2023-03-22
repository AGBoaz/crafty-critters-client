import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getKnitProjects } from "../../managers/ProjectManager"

export const KnitList = (props) => {
    const navigate = useNavigate()

    const [ projects, setProjects] = useState([])

    //set the projects array from useState equal to the projects being fetched by the manager
    useEffect(() => {
        getKnitProjects().then(data => setProjects(data))
    }, [])


    return (
        <article className="projects">
            {
                projects.map(project => {
                    return <section key={`project--${project.id}`} className="project">
                        <div className="project--name">name: {project.name}</div>
                        <div className="project--toolSize">needles: {project.tool_size}</div>
                        <div className="project--photo">{project.photo}</div>
                        <div className="project--directions">directions: {project.directions_link}</div>
                        <div className="project--patternType">pattern: {project.pattern_type}</div>

                        <button className="btn btn-1 btn-sep icon-create"
                            onClick={() => {navigate({ pathname: `/projectsingle/${project.id}`})}}>view
                        </button>
                    </section> 
                })
            
            }
        </article>
    
    )

}