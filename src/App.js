import './App.css'
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import ViewAnimals from "./components/ViewAnimals"
import ManageAnimals from "./components/ManageAnimals"
import Login from "./components/Login"

function App() {

  const [ animals, setAnimals ] = useState([])

  const getURL = "http://3.128.180.190:8080/animalshelter/animals/"

  useEffect(() => {
    console.log(animals.name)
    axios.get(getURL)
      .then(response => {
        setAnimals([...animals, response.data])
      })
  },[])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><LandingPage /></Route>
          <Route path="/view-animals"><ViewAnimals animals={animals} /></Route>
          <Route path="/manage-animals"><ManageAnimals /></Route>
          <Route path="/log"><Login /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
