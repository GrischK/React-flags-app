import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <ul className="nav">
                <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Home</NavLink></li>
                <li><NavLink to="/about"  className={(nav) => (nav.isActive ? "nav-active" : "")}>About</NavLink></li>
            </ul>
        </div>
    )
}