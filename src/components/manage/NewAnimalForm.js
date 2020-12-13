import '../../fonts/NerkoOne-Regular.ttf';
import "../../styling/NewAnimalForm.css";
import { useState } from "react"

const NewAnimalForm = ({ setNewAnimal }) => {

    const [ name, setName ] = useState("")
    const [ age, setAge ] = useState("")
    const [ sex, setSex ] = useState("")
    const [ species, setSpecies ] = useState("")
    const [ breed, setBreed ] = useState("")
    const [ color, setColor ] = useState("")
    const [ weight, setWeight ] = useState("")
    const [ temperament, setTemperament ] = useState("")

    const prepareNewAnimal = () => {
        setNewAnimal(
            {
                "animalName": name,
                "species": species,
                "breed": breed,
                "sex": sex,
                "color": color,
                "animalAge": age,
                "weight": weight,
                "temperament": temperament
            }
        )
    }

    return (
        <div id="container-new-animal">
            <h2>Name: <input value={name} onChange={(event) => setName(event.target.value)}/></h2>
            <h2>Age: <input value={age} onChange={(event) => setAge(event.target.value)}/></h2>
            <h2>Sex: <input value={sex} onChange={(event) => setSex(event.target.value)}/></h2>
            <h2>Species: <input value={species} onChange={(event) => setSpecies(event.target.value)}/></h2>
            <h2>Breed: <input value={breed} onChange={(event) => setBreed(event.target.value)}/></h2>
            <h2>Color: <input value={color} onChange={(event) => setColor(event.target.value)}/></h2>
            <h2>Weight: <input value={weight} onChange={(event) => setWeight(event.target.value)}/></h2>
            <h2>Temperament: <textarea value={temperament} onChange={(event) => setTemperament(event.target.value)}/></h2>
            <button onClick={() => prepareNewAnimal()}>ADD</button>
        </div>
    )
}

export default NewAnimalForm