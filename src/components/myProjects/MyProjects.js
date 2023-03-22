import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteProject, getCritterProjects, getProjects } from "../../managers/ProjectManager"

export const MyProjects = (props) => {
    const navigate = useNavigate()

    const [ projects, setProjects] = useState([])

    //set the projects array from useState equal to the projects being fetched by the manager
    //What is the easiest way to get the Id of the current user?
    useEffect(() => {
        getCritterProjects(1).then(data => setProjects(data))
    }, [])

    const handleDelete = (projectId) => {
        deleteProject(projectId).then(getProjects().then(data => setProjects(data)))
    }

    return (
        <article className="projects">
            {
                projects.map(project => {
                    return <section key={`project--${project.id}`} className="project">
                        <div className="project--name">name: {project.name}</div>
                        <div className="project--toolSize">hook: {project.tool_size}</div>
                        <div className="project--photo">{project.photo}</div>
                        <div className="project--directions">directions: {project.directions_link}</div>
                        <div className="project--patternType">pattern: {project.pattern_type}</div>

                        <button className="btn btn-1 btn-sep icon-create"
                            onClick={() => {navigate({ pathname: `/projectedit/${project.id}`})}}>Edit
                        </button>

                        <button className="btn btn-3 btn-sep icon-create"
                            onClick={() => {handleDelete(project.id)}}>Delete
                        </button>
                    </section> 
                })
            
            }
        </article>
    
    )

}