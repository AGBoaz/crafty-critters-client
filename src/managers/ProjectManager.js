//GET

export const getProjects = () => {
    return fetch("http://localhost:8000/projects", {
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`
        }
    }).then(response => response.json())
}

export const getSingleProject = (projectId) => {
    return fetch(`http://localhost:8000/projects/${projectId}`, {
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`
        }
    }).then(response => response.json())
}

export const getKnitProjects = () => {
    return fetch("http://localhost:8000/projects?project_type=knit", {
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`
        }
    }).then(response => response.json())
}

export const getCrochetProjects = () => {
    return fetch("http://localhost:8000/projects?project_type=crochet", {
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`
        }
    }).then(response => response.json())
}

//CREATE
//UPDATE
//DELETE