import '../../fonts/NerkoOne-Regular.ttf';
import "../../styling/UpdateAnimalForm.css";
import axios from "axios";
import { useState } from "react"

const UpdateAnimalForm = ({ animal, animals, setAnimals }) => {

    const [ name, setName ] = useState(animal.animalName)
    const [ age, setAge ] = useState(animal.animalAge)
    const [ sex, setSex ] = useState(animal.sex)
    const [ species, setSpecies ] = useState(animal.species)
    const [ breed, setBreed ] = useState(animal.breed)
    const [ color, setColor ] = useState(animal.color)
    const [ weight, setWeight ] = useState(animal.weight)
    const [ temperament, setTemperament ] = useState(animal.temperament)

    const updateAnimal = () => {
        const filteredAnimals = animals.filter(deleting => deleting.animalId !== animal.animalId)
        const updatedAnimals = [
            ...filteredAnimals,
            {
                "animalId": animal.animalId,
                "animalName": name,
                "species": species,
                "breed": breed,
                "sex": sex,
                "color": color,
                "animalAge": age,
                "weight": weight,
                "temperament": temperament
            }
        ].sort((a, b) => a.animalId > b.animalId ? 1 : -1) //keeps list in order of ID

        const URL = `http://3.128.180.190:8080/animalshelter/animal/${animal.animalId}`
        // CORS!!
        axios.put(URL, {
            "animalName": name,
            "species": species,
            "breed": breed,
            "sex": sex,
            "color": color,
            "animalAge": age,
            "weight": weight,
            "temperament": temperament
        })
            .then(() => {
                setAnimals(updatedAnimals)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <div id="update-form">
            <h2>Name: <input value={name} onChange={(event) => setName(event.target.value)}/></h2>
            <h2>Age: <input value={age} onChange={(event) => setAge(event.target.value)}/></h2>
            <h2>Sex: <input value={sex} onChange={(event) => setSex(event.target.value)}/></h2>
            <h2>Species: <input value={species} onChange={(event) => setSpecies(event.target.value)}/></h2>
            <h2>Breed: <input value={breed} onChange={(event) => setBreed(event.target.value)}/></h2>
            <h2>Color: <input value={color} onChange={(event) => setColor(event.target.value)}/></h2>
            <h2>Weight: <input value={weight} onChange={(event) => setWeight(event.target.value)}/></h2>
            <h2>Temperament: <textarea value={temperament} onChange={(event) => setTemperament(event.target.value)}/></h2>
            <button onClick={() => updateAnimal()}>SEND UPDATE</button>
        </div>
    )
}

export default UpdateAnimalForm