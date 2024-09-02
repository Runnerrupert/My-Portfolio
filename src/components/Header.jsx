import Navigation from "./Navigation"
import "../App.css";

function Header() {
    return (
        <div className="navbar justify-content-evenly main-background">
            <h1 className="navbar-text-color">Cameron Barfuss</h1>
            <Navigation />
        </div>
    )
}

export default Header;