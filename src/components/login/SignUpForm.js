import '../../fonts/NerkoOne-Regular.ttf';
import "../../styling/SignUpForm.css";
import axios from "axios"
import { useState } from "react"

const SignUpForm = () => {

    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ success, setSuccess ] = useState(false)

    const createNewUser = () => {
        const newUser = {
            firstName,
            lastName,
            username,
            password,
            "role": "user"
        }
        const URL = "http://3.128.180.190:8080/animalshelter/user"
        axios.post(URL, newUser)
            .then(response => {
                console.log(response.data)
                setSuccess(true)
            })
            .catch(error => console.log(error))
    }

    return (
        <div id="sign-up-form">
            <h2>First Name: <input value={firstName} onChange={(event) => setFirstName(event.target.value) }/></h2>
            <h2>Last Name: <input value={lastName} onChange={(event) => setLastName(event.target.value) }/></h2>
            <h2>Username: <input value={username} onChange={(event) => setUsername(event.target.value) }/></h2>
            <h2>Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value) }/></h2>
            <button onClick={() => createNewUser()}>SIGN UP</button>
            {success && <h2>User Created!</h2>}
        </div>
    )
}

export default SignUpForm