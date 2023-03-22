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

export const getCritterProjects = () => {
    return fetch(`http://localhost:8000/projects?critter=yes`, {
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`
        }
    }).then(response => response.json())
}

//CREATE

export const createProject = (project) => {
    return fetch("http://localhost:8000/projects", {
        method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("cc_token")}`,
                "Content-Type": "application/json"
            },
        body: JSON.stringify(project)
    }).then(response => response.json())
}

//UPDATE

export const editProject = (project, id) => {
    return fetch(`http://localhost:8000/projects/${id}`, { 
        method: "PUT",
            headers: {
                "Authorization":`Token ${localStorage.getItem("cc_token")}`,
                "Content-Type": "application/json"
            },
        body: JSON.stringify(project)
    })
}

//DELETE

export const deleteProject = (projectId) => {
    return fetch(`http://localhost:8000/projects/${projectId}`,{ 
        method: "DELETE",
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`,
        },
    })
}