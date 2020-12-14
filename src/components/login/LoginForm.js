import '../../fonts/NerkoOne-Regular.ttf';
import "../../styling/LoginForm.css";
import axios from "axios"
import { useState } from "react"

const LoginForm = ({ user, setUser }) => {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const loginUser = () => {
        const URL = `http://3.128.180.190:8080/animalshelter/users?username=${username}`
        axios.get(URL)
            .then(response => {
                console.log(response.data)
                axios.put(`http://3.128.180.190:8080/animalshelter/user/${response.data.userId}`, {
                    "firstName": response.data.firstName,
                    "lastName": response.data.lastName,
                    "username": username,
                    "password": password,
                    "role": "user"
                })
                    .then(response2 => {
                        localStorage.setItem("user", response2.data.username)
                        setUser(response2.data.username)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
        
    }

    return (
        <div id="login-form">
            {console.log(user)}
            <h2>Username: <input value={username} onChange={(event) => setUsername(event.target.value)}/></h2>
            <h2>Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></h2>
            <button onClick={() => loginUser()}>LOGIN</button>
            {user && <h2>Logged in as {user}</h2>}
            {user && <button onClick={() => {
                localStorage.removeItem("user")
                setUser("")
            }}>LOGOUT</button>}
        </div>
    )
}

export default LoginForm