import { NavLink } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {
    return (
        <nav>
            <hr />
            <ul className="navbar">
                <li>
                    <NavLink to="/" className="navlink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className="navlink">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/market" className="navlink">Market</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className="navlink">Profile</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
