import { Link, useLocation } from "react-router-dom"

// This function is used to create the navigation bar and to set which one is currently active
function Navigation() {
    const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-pills">
      <li className="nav-item link-opacity-50-hover">
        <Link
          to="/AboutMe"
          className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link link-light'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item link-opacity-50-hover">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link link-light'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item link-opacity-50-hover">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link link-light'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item link-opacity-50-hover">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link link-light'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;