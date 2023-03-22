//GET 
export const getSingleCritter = (critterId) => {
    return fetch(`http://localhost:8000/critters/${critterId}`, {
        headers: {
            "Authorization":`Token ${localStorage.getItem("cc_token")}`
        }
    }).then(response => response.json())
}

//UPDATE

export const editCritter = (critter, id) => {
    return fetch(`http://localhost:8000/critters/${id}`, { 
        method: "PUT",
            headers: {
                "Authorization":`Token ${localStorage.getItem("cc_token")}`,
                "Content-Type": "application/json"
            },
        body: JSON.stringify(critter)
    })
}