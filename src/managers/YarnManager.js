//GET

export const getYarns = () => {
    return fetch("http://localhost:8000/yarns", {
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`
        }
    }).then(response => response.json())
}

export const getSingleYarn = (yarnId) => {
    return fetch(`http://localhost:8000/yarns/${yarnId}`, {
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`
        }
    }).then(response => response.json())
}

//POST

export const createYarn = (yarn) => {
    return fetch("http://localhost8000/yarns", {
        method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("cc_token")}`,
                "Content-Type": "application/json"
            },
        body: JSON.stringify(yarn)
    }).then(response => response.json())
}