import '../../fonts/NerkoOne-Regular.ttf';
import "../../styling/ViewAnimals.css";
import { useState, useEffect } from "react";
import axios from "axios"
import Animal from "./Animal"

const ViewAnimals = ({ animals }) => {

    const [ dogPics, setDogPics ] = useState([])

    const getDogPics = () => {
        axios.get(`https://dog.ceo/api/breeds/image/random/${animals.length}`)
            .then(response => {
                setDogPics(response.data.message)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getDogPics()
    }, [])

    return (
        <div id="container-view-animals">
            <h1>Here are our cuddly friends!</h1>
            <div id="container-animals">
                {
                    animals.map((animal, index) => {
                        return <Animal animal={animal} picture={dogPics[index]} key={animal.animalId} />
                    })
                }
            </div>
        </div>
    )
}

export default ViewAnimals