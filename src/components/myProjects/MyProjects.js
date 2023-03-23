import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteProject, getCritterProjects, getProjects } from "../../managers/ProjectManager"

export const MyProjects = (props) => {
    const navigate = useNavigate()

    const [ projects, setProjects] = useState([])

    useEffect(() => {
        getCritterProjects().then(data => setProjects(data))
    }, [])

    const handleDelete = (projectId) => {
        deleteProject(projectId).then(getProjects().then(data => setProjects(data)))
    }

    return (
        <article className="projects">
            {
                projects.map(project => {
                    return <section key={`project--${project.id}`} className="project">
                        <div className="projectTextContainer">
                            <div className="project--name">Name: {project.name}</div>
                            <div className="project--type">Type: {project.project_type}</div>
                            <div className="project--toolSize">Tool: {project.tool_size}</div>
                            <div className="project--photo">{project.photo}</div>
                            <div className="project--directions">Directions: {project.directions_link}</div>
                            <div className="project--patternType">Pattern: {project.pattern_type}</div>
                        </div>

                        <button className="btn btn-4 btn-sep icon-create"
                            onClick={() => {navigate({ pathname: `/projectedit/${project.id}`})}}>Edit
                        </button>

                        <button className="btn btn-3 btn-sep icon-create"
                            onClick={() => {handleDelete(project.id)}}>Delete
                        </button>
                    </section> 
                })
            }
            <div className="newBtnContainer">
                <button className="btn btn-1 btn-sep icon-create"
                    onClick={() => {navigate({ pathname: `/projectform`})}}>New
                </button>
            </div>
        </article>
    
    )

}