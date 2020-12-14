import './App.css'
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar"
import Landing from "./components/landing/Landing"
import ViewAnimals from "./components/view/ViewAnimals"
import ManageAnimals from "./components/manage/ManageAnimals"
import Login from "./components/login/Login"

function App() {

  const [ animals, setAnimals ] = useState([])
  const [ user, setUser ] = useState(localStorage.getItem("user") || "")

  const getURL = "http://3.128.180.190:8080/animalshelter/animals"

  useEffect(() => {
    axios.get(getURL)
      .then((response) => {
        setAnimals(response.data)
      })
  },[])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Landing /></Route>
          <Route path="/view-animals"><ViewAnimals animals={animals} /></Route>
          <Route path="/manage-animals"><ManageAnimals animals={animals} setAnimals={setAnimals} /></Route>
          <Route path="/login"><Login user={user} setUser={setUser} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
