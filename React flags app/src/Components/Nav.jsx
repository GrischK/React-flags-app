import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <ul className="nav">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Home</NavLink>
                <NavLink to="/about"  className={(nav) => (nav.isActive ? "nav-active" : "")}>About</NavLink>
            </ul>
        </div>
    )
}