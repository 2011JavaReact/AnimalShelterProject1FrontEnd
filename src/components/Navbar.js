import '../fonts/NerkoOne-Regular.ttf'; 
import "../styling/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div id="navbar-container">
            <Link to="/" className="router-links">Home</Link>
            <Link to="/view-animals" className="router-links">View Animals</Link>
            <Link to="/manage-animals" className="router-links">Manage Animals</Link>
            <Link to="/login" className="router-links">User Accounts</Link>
        </div>
    )
}

export default Navbar