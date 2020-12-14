import '../../fonts/NerkoOne-Regular.ttf';
import "../../styling/AnimalIndex.css";
import { useState } from "react";
import axios from "axios";
import UpdateAnimalForm from './UpdateAnimalForm';

const AnimalIndex = ({ animals, setAnimals }) => {

    const [displayUpdateForm, setDisplayUpdateForm] = useState(animals.map(animal => false))

    return (
        <div id="container-animal-index">
            {animals.map((animal, index) => {
                return (
                    <div id="container-entry-and-form" key={animal.animalId}>
                        <span id="animal-entry">
                            <h1>{animal.animalId}</h1>
                            <h1>{animal.animalName}</h1>
                            <div id="container-update-delete">
                                <button onClick={() => {
                                    const copyDisplay = [...displayUpdateForm]
                                    copyDisplay[index] = !copyDisplay[index]
                                    setDisplayUpdateForm(copyDisplay)
                                }}>UPDATE</button>
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
                        {displayUpdateForm[index] && <UpdateAnimalForm animal={animal} animals={animals} setAnimals={setAnimals} />}
                    </div>
                )
            })}
        </div>
    )
}

export default AnimalIndex