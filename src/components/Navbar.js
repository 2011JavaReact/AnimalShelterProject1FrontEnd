import '../fonts/NerkoOne-Regular.ttf'; 
import "../styling/Navbar.css";

const Navbar = ({ setDisplay }) => {
    return (
        <div id="navbar-container">
            <p onClick={() => setDisplay("home")}>Home</p>
            <p onClick={() => setDisplay("view")}>View Animals</p>
            <p onClick={() => setDisplay("manage")}>Manage Animals</p>
            <p onClick={() => setDisplay("login")}>Log In</p>
        </div>
    )
}

export default Navbar