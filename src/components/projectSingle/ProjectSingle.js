import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProject } from "../../managers/ProjectManager";

export const ProjectSingle = () => {

    /* when the user clicks on a project, they can get a closer see
       the project in a single view 
        - get a single project by accessing the Id with uesParams
          and passing that id into the getSingleProject method
        - invoke useEffect to ensure that project displays ad soon as the 
          page is rendered
    */

    const navigate = useNavigate()
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
        getSingleProject(projectId)
        .then((projectData) => { setCurrentProject(projectData)})
    }, [projectId])

    return (
        <article className="project">
            <div className="project--name">{currentProject.name}</div>
            <div className="project--toolSize">{currentProject.tool_size}</div>
            <div className="project--directions">{currentProject.directions_link}</div>
            <div className="project--patternType">{currentProject.pattern_type}</div>
        </article>
    )

}