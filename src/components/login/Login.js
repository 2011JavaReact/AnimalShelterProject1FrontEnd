import '../../fonts/NerkoOne-Regular.ttf'; 
import "../../styling/Login.css";
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"

const Login = ({ user, setUser }) => {
    return (
        <div id="container-login">
            <h1>Create a New Account...</h1>
            <SignUpForm />
            <h1>...or Login!</h1>
            <LoginForm user={user} setUser={setUser}/>
        </div>
    )
}

export default Login