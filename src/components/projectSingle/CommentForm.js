import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProject } from "../../managers/ProjectManager";
import { createComment } from "../../managers/CommentManager";
/*  
    when the user clicks on a project, they can
    see the project in a single view.
    stretch: They can also leave comments on the project
*/

export const ProjectSingle = () => {

    const navigate = useNavigate()
    //get a single project. Access the needed Id with uesParams
    const { projectId } = useParams()
    const project = getSingleProject(projectId)

    const[newComment, setNewComment] = useState({
        body: "",
        project: parseInt(projectId)
    })

    const handleCommentInput = (event) => {
        const tempComment = {...newComment}
        tempComment[event.target.name] = event.target.value
        setNewComment(tempComment)
    }

    const saveComment = () => {createComment(newComment)}

    return (
        <body>
            <article className="formContainer">
                <form className="commentForm">
                    <h2 className="commentForm__title">Leave a Comment</h2>

                    <fieldset>
                        {/* COMMENT BODY */}
                        <div className="form-group">
                            <div>
                                <input type="text" name="comment" className="form-control"
                                    autoFocus
                                    value={newComment.body}
                                    onChange={handleCommentInput}
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </article>

        </body>
    )
}