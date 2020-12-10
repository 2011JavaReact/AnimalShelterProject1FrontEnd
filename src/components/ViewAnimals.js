const ViewAnimals = ({ animals }) => {

    console.log(animals[0].name)

    return (
        <div>
            <h1>Welcome to the View Animals Screen!</h1>
            <h2>{animals[0].name}</h2>
        </div>
    )
}

export default ViewAnimals