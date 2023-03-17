import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { FullList } from "../components/knitCrochet/FullList"
import { KnitList } from "../components/knitCrochet/KnitList"
import { CrochetList } from "../components/knitCrochet/CrochetList"
import { Authorized } from "./Authorized"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>

                <Route path="/home" element={<FullList />} />
                <Route path="/knit" element={<KnitList />} />
                <Route path="/crochet" element={<CrochetList />} />

            </Route>
        </Routes>
    </>
}