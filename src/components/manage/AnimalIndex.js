import '../../fonts/NerkoOne-Regular.ttf';
import "../../styling/AnimalIndex.css";
import axios from "axios";

const AnimalIndex = ({ animals, setAnimals }) => {
    return (
        <div id="container-animal-index">
            {animals.map(animal => {
                return <span id="animal-entry" key={animal.animalId}>
                    <h1>{animal.animalId}</h1>
                    <h1>{animal.animalName}</h1>
                    <div id="container-update-delete">
                        <button>UPDATE</button>
                        <button onClick={() => {
                            const filteredAnimals = animals.filter(deleting => deleting.animalId !== animal.animalId)
                            const URL = `http://3.128.180.190:8080/animalshelter/animal/${animal.animalId}`
                            // CORS!!
                            axios.delete(URL)
                                .then(() => {
                                    setAnimals(filteredAnimals)
                                })
                                .catch(error => {
                                    console.error('There was an error!', error);
                                });
                        }}>DELETE</button>
                    </div>
                </span>
            })}
        </div>
    )
}

export default AnimalIndex