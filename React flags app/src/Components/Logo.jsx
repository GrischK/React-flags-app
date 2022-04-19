import Home from "../Pages/Home"
import { NavLink } from "react-router-dom"

export default function Logo () {
    return (
        <div className="logoDiv">
            <NavLink to="/"><img src="./src/Assets/logo.png" alt="logo" className="logo"/></NavLink>
        </div>
    )
}