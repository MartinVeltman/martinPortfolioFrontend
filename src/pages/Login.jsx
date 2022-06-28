import {useState} from "react";
import '../App.css';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


const API_URL = 'http://localhost:8080/api/v1/user/signin';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    let timer = new Date();
    const millisecToSec = 1000;
    const cookieExpireTimeInMilliSec = 3600;
    let time = timer.getTime();
    time += cookieExpireTimeInMilliSec * millisecToSec;
    timer.setTime(time);


    const login = () => {
        axios.post(`${API_URL}`, {
            "username": username,
            "password": password
        }).then(function () {
            document.cookie =
                'loggedIn=true' +
                '; expires=' + timer.toUTCString() +
                '; path=/';

            toast.success("Login succesfull, redirecting...")

            setTimeout(() => {
                navigate("/admin");
            }, 6000);

        }).catch(function () {
            toast.error("Login failed")
        })
    };

    return (
        <div className="app">
            <h1>Login for admin</h1>
            <div className="formContainer">

                <div className="group">
                    <input type="username" placeholder="Fill in username"
                           onChange={(e) => setUsername(e.target.value)}/>
                    <span className="bar"/>
                    <label>Username</label>
                </div>

                <div className="group">
                    <input type="password" placeholder="Fill in password"
                           onChange={(e) => setPassword(e.target.value)}/>
                    <span className="bar"/>
                    <label>Password</label>
                </div>

                <button type="button" onClick={login}>Login</button>
            </div>
            <ToastContainer theme="dark"/>
        </div>
    );
}

export default Login;
