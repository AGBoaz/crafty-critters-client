export const createComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("cc_token")}`
        },
        body: JSON.stringify(comment)
    })
}