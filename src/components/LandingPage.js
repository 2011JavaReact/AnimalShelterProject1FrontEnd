import '../fonts/NerkoOne-Regular.ttf'; 
import "../styling/LandingPage.css";

const LandingPage = () => {

    const getAnimals = () => {
        fetch("http://3.128.180.190:8080/animalshelter/animals/")
            .then(response => response.json())
            .then(data => console.log(data))
    }

    getAnimals()

    return (
        <div id="container-landing">
            <h1>Fur Haven Animal Shelter</h1>
            <h2>Meow!</h2>
            {/* <div>{getAnimals}</div> */}
        </div>
    )
}

export default LandingPage