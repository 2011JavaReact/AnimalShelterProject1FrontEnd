import '../../fonts/NerkoOne-Regular.ttf'; 
import "../../styling/Landing.css";

const Landing = () => {

    return (
        <div id="container-landing">
            <h1>Fur Haven Animal Shelter</h1>
            <h2>Welcome to Fur Haven, a no-kill animal shelter.</h2>
            <div id="user-prompts">
                <h2 className="prompt-text" >Use the navigation bar at the top of the screen to visit these pages:</h2>
                <p className="prompt-text">View Animals - See all the animals available for adoption</p>
                <p className="prompt-text">Manage Animals - Add, Update, and Adopt animals (login required)</p>
                <p className="prompt-text">User Accounts - Create a new user account and login</p>
            </div>
        </div>
    )
}

export default Landing