import {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'http://localhost:8080/api/v1/user/signin';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let now = new Date();
    const millisecToSec = 1000;
    const cookieExpireTimeInMilliSec = 3600;
    let time = now.getTime();
    time += cookieExpireTimeInMilliSec * millisecToSec;
    now.setTime(time);

    const login = () => {
        axios.post(`${API_URL}`, {
            "username": username,
            "password": password
        }).then(function () {
            document.cookie =
                'loggedIn=true' +
                '; expires=' + now.toUTCString() +
                '; path=/';
            toast.success("Login succesfull")
        }).catch(function () {
            toast.error("Login failed")
        })
    };

    useEffect(() => {


    }, []);


    return (
        <div className="app">
            <h1>Login for admin</h1>
            <div>
                <input type="username" placeholder="Fill in username"
                       onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Fill in password"
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" onClick={login}>Login</button>
            </div>
            <ToastContainer theme="dark"/>
        </div>


    );
}

export default Login;
