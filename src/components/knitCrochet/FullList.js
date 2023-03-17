import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getProjects, getSingleProject } from "../../managers/ProjectManager"

export const FullList = (props) => {
    const navigate = useNavigate()

    const [ projects, setProjects] = useState([])

    //set the projects array from useState equal to the projects being fetched by the manager
    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])


    return (
        <article className="projects">
            {
                projects.map(project => {
                    return <section key={`project--${project.id}`} className="project">
                        <div className="project--name">{project.name}</div>
                        <div className="project--toolSize">{project.tool_size}</div>
                        <div className="project--directions">{project.directions_link}</div>
                        <div className="project--patternType">{project.pattern_type}</div>
                    </section> 
                })
            
            }
            <section>hello?</section>
        </article>
    
    )

}