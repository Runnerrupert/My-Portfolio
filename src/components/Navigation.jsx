import { NavLink } from "react-router-dom"

import "./Navigation.css";

// Navbar Links between pages
function Navigation() {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/AboutMe" className={({ isActive }) => (isActive ? "active-link" : "")}
        > About Me </NavLink>
      </li>
      <li>
        <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? "active-link" : "")}
        > Projects </NavLink>
      </li>
      <li>
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active-link" : "")}
        > Contact </NavLink>
      </li>
      <li>
        <NavLink to="/Resume" className={({ isActive }) => (isActive ? "active-link" : "")}
        > Resume </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;