import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProject, addYarn  } from "../../managers/ProjectManager";
import { getYarns, createYarn} from "../../managers/YarnManager";

export const ProjectForm = () => {
    const navigate = useNavigate()

    const [currentProject, setCurrentProject] = useState({
        project_type: "",
        name: "",
        tool_size: 0,
        critter: 0,
        photo: "",
        directions_link: "",
        pattern_type: ""
    })

    const changeProjectState = (event) => {
        const copy = {...currentProject}
        copy[event.target.name] = event.target.value
        setCurrentProject(copy)
    }

    // const [existingYarns, setExistingYarns] = useState([])
    // useEffect(() => {
    //     getYarns().then((existingYarnsArr) => {setExistingYarns(existingYarnsArr)})
    // }, [])

    // const [yarnsArr, setYarnsArr] = useState([])

    // const changeYarnsArrState = (yarn) => {
    //     const copy = [...yarnsArr]
    //     copy.push(yarn)
    //     setYarnsArr(copy)
    // }

    return (
        <form className="projectForm">
            <h2 className="projectForm__title">Create A New Project</h2>

            <fieldset>
                {/*PROJECT TYPE*/}
                <div className="form-group">
                    <label htmlFor="project_type">Project Type: </label>
                    <div>
                        <input type="radio" name="project_type" id="knit" className="form-control"
                            required autoFocus
                            value={currentProject.project_type}
                            onChange={changeProjectState}
                        />knit
                    </div>
                    <div>
                        <input type="radio" name="project_type" id="crochet" className="form-control"
                            required autoFocus
                            value={currentProject.project_type}
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
                {/*PHOTO*/}
                <div className="form-group">
                    <label htmlFor="photo">Photo: </label>
                    <input 
                        type="image" id="image" alt="img not found" name="photo" className="form-control"
                        required autoFocus
                        value={currentProject.photo}
                        onChange={changeProjectState}
                    />
                </div>
            </fieldset>

            <fieldset>
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

            <fieldset>
                {/* YARNS LIST */}

                {/*YARNS SELECT*/}
                {/*existingYarns.map(yarn => {
                            return <>
                                <div>
                                    <input type="radio" name="yarn" value={yarn.id} key={`yarn--${yarn.id}`}
                                        onChange={changeYarnsArrState(yarn)}
                                    /> {yarn.color}
                                </div>
                            </>
                        })}*/}



            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const project = {
                        project_type: currentProject.gamer,
                        name: currentProject.name,
                        tool_size: parseInt(currentProject.description),
                        photo: currentProject.photo,
                        directions_link: currentProject.directions_link,
                        pattern_type: currentProject.pattern_type
                    }

                    // Send POST request to your API
                    createProject(project)
                        .then(() => navigate("/home"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}