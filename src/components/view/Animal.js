import '../../fonts/NerkoOne-Regular.ttf'; 
import "../../styling/Animal.css";

const Animal = ({ animal }) => {
    return (
        <div id="container-animal">
            <h2>ID: {animal.animalId}</h2>
            <h2>Name: {animal.animalName}</h2>
            <h2>Age: {animal.animalAge}</h2>
            <h2>Sex: {animal.sex}</h2>
            <h2>Species: {animal.species}</h2>
            <h2>Breed: {animal.breed}</h2>
            <h2>Color: {animal.color}</h2>
            <h2>Weight: {animal.weight}</h2>
            <h2>Temperament:</h2>
            <h2>{animal.temperament}</h2>
        </div>
    )
}

export default Animal