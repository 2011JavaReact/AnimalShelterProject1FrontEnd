import '../../fonts/NerkoOne-Regular.ttf'; 
import "../../styling/ManageAnimals.css";
import { useState, useEffect, useRef } from "react";
import NewAnimalForm from "./NewAnimalForm"
import AnimalIndex from "./AnimalIndex";
import axios from "axios"

const ManageAnimals = ({ animals, setAnimals }) => {

    const [ newAnimal, setNewAnimal ] = useState({})

    // Genius!
    // https://stackoverflow.com/questions/55075604/react-hooks-useeffect-only-on-update
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            axios.post("http://3.128.180.190:8080/animalshelter/animal", newAnimal)
            .then(response => {
                setAnimals([...animals, response.data])
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
         }
    }, [newAnimal])    

    return (
        <div id="container-manage-animals">
            <h1>Add an Animal</h1>
            <NewAnimalForm setNewAnimal={setNewAnimal}/>
            <h1>Update or Adopt an Animal</h1>
            <AnimalIndex animals={animals} setAnimals={setAnimals}/>
        </div>
    )
}

export default ManageAnimals