import '../../fonts/NerkoOne-Regular.ttf';
import "../../styling/ViewAnimals.css";
import Animal from "./Animal"

const ViewAnimals = ({ animals }) => {
    console.log(animals)
    return (
        <div id="container-view-animals">
            <h1>Here are our cuddly friends!</h1>
            <div id="container-animals">
                {
                    animals.map(animal => {
                        return <Animal animal={animal} key={animal.animalId} />
                    })
                }
            </div>
        </div>
    )
}

export default ViewAnimals