import { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProject, editProject } from "../../managers/ProjectManager";

export const ProjectEdit = () => {
    const navigate = useNavigate()
    const { projectId } = useParams()

    const [currentProject, setCurrentProject] = useState({
        project_type: "",
        name: "",
        tool_size: 0,
        critter: 0,
        directions_link: "",
        pattern_type: ""
    })

    useEffect(() => {
        getSingleProject(projectId)
        .then((projectData) => { setCurrentProject(projectData)})
    }, [projectId])

    const changeProjectState = (event) => {
        const copy = {...currentProject}
        copy[event.target.name] = event.target.value
        setCurrentProject(copy)
    }

    return (
        <form className="projectForm">
            <h2 className="projectForm__title">Edit A Project</h2>

            <fieldset>
                {/*PROJECT TYPE*/}
                <div className="form-group">
                    <label htmlFor="project_type">Project Type: </label>
                    <div>
                        <input type="radio" name="project_type" id="knit" className="form-control"
                            required autoFocus
                            value={"knit"}
                            onChange={changeProjectState}
                        />knit
                    </div>
                    <div>
                        <input type="radio" name="project_type" id="crochet" className="form-control"
                            required autoFocus
                            value={"crochet"}
                            onChange={changeProjectState}
                        />crochet
                    </div>
                </div>
            </fieldset>

            <fieldset>
                {/*NAME*/}
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" name="name" className="form-control"
                        required autoFocus
                        value={currentProject.name}
                        onChange={changeProjectState}
                    />
                </div>
            </fieldset>

            <fieldset>
                {/*TOOL SIZE*/}
                <div className="form-group">
                    <label htmlFor="tool_size">Tool Size: </label>
                    <input type="number" step="0.01" name="tool_size" required className="form-control"
                        value={currentProject.tool_size}
                        onChange={changeProjectState}
                    />
                </div>
            </fieldset>

            <fieldset>
                {/*DIRECTIONS LINK*/}
                <div className="form-group">
                    <label htmlFor="directions_link">Link to Directions: </label>
                    <input 
                        type="text" name="directions_link" className="form-control"
                        required autoFocus
                        value={currentProject.directions_link}
                        onChange={changeProjectState}
                    />
                </div>
            </fieldset>

            <fieldset>
                {/*PATTERN TYPE*/}
                <div className="form-group">
                    <label htmlFor="pattern_type">Pattern Type: </label>
                    <input 
                        type="text" name="pattern_type" className="form-control"
                        required autoFocus
                        value={currentProject.pattern_type}
                        onChange={changeProjectState}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const project = {
                        project_type: currentProject.project_type,
                        name: currentProject.name,
                        tool_size: parseInt(currentProject.description),
                        directions_link: currentProject.directions_link,
                        pattern_type: currentProject.pattern_type
                    }

                    // Send POST request to your API
                    editProject(project, projectId)
                        .then(() => navigate("/home"))
                }}
                className="btn btn-1 btn-sep icon-create">Done</button>
        </form>
    )

}

