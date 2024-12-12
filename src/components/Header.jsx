import Navigation from "./Navigation"
import "./Header.css";

function Header() {
    return (
        <div className="header-container">
            <h1 className="header"> Cameron Barfuss | Aspiring Software Engineer </h1>
            <h1 className="header-mobile"> Cameron Barfuss </h1>
            <h1 className="header-mobile-2"> Aspiring Software Engineer </h1>
            <Navigation />
        </div>
    )
}

export default Header;