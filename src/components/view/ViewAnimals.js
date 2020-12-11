import '../../fonts/NerkoOne-Regular.ttf'; 
import "../../styling/ViewAnimals.css";
import Animal from "./Animal"

const ViewAnimals = ({ animals }) => {
    return (
        <div id="container-view-animals">
            <h1>Welcome to the View Animals Screen!</h1>
            {
                animals.map(animal => {
                    return <Animal animal={animal} key={animal.animalId}/>
                })
            }
        </div>
    )
}

export default ViewAnimals