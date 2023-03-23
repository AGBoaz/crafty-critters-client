import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProject } from "../../managers/ProjectManager";

/*  
    when the user clicks on a project, they can
    see the project in a single view 
*/

export const ProjectSingle = () => {

    const navigate = useNavigate()
    //get a single project by accessing the Id with uesParams...
    const { projectId } = useParams()

    const [currentProject, setCurrentProject] = useState({
        project_type: "",
        name: "",
        tool_size: 0,
        critter: 0,
        photo: "",
        directions_link: "",
        pattern_type: ""
    })

    useEffect(() => {
        //...and passing that id into the getSingleProject method
        getSingleProject(projectId)
        .then((projectData) => { setCurrentProject(projectData)})
    }, [projectId])

    return (
        <article className="projects project">
            <div className="projectTextContainer">
                <div className="project--name">Name: {currentProject.name}</div>
                <div className="project--toolSize">Tool Size: {currentProject.tool_size}</div>
                <div className="project--directions">Directions: {currentProject.directions_link}</div>
                <div className="project--patternType">Pattern: {currentProject.pattern_type}</div>
            </div>
        </article>
    )

}