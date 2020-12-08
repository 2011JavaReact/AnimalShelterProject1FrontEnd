import './App.css'
import { useState } from "react"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import ViewAnimals from "./components/ViewAnimals"
import ManageAnimals from "./components/ManageAnimals"
import Login from "./components/Login"

function App() {

  const [ display, setDisplay ] = useState("home")

  return (
    <div className="App">
      <Navbar setDisplay={setDisplay}/>
      {{
        "home": <LandingPage />,
        "view": <ViewAnimals />,
        "manage": <ManageAnimals />,
        "login": <Login />
      }[display]}
    </div>
  );
}

export default App;
