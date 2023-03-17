import { Navigate, Outlet } from "react-router-dom"

export const Authorized = () => {
    if (localStorage.getItem("cc_token")) {
        return <Outlet />
    }
    return <Navigate to='/login' replace />
}


// import { Navigate, Outlet } from "react-router-dom"

// // receive prop from ApplicationViews
// export const Authorized = ({ token }) => {
//   // verifying login information exists in local storage
//   // if the key exists, return Outlet which will render child route elements
//     if (token) {
//         return <Outlet token = {token} />
//     }
//   // if key does not exist in local storage, user will be navigated to login
//   // replace action replaces current route with a new one
//     return <Navigate to='/login' replace />
// }