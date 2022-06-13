import {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/user/signin';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        axios.post(`${API_URL}`, {
            "username": username,
            "password": password
        }).then(function (response) {
            localStorage.setItem('JWT', JSON.stringify(response));
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
        </div>


    );
}

export default Login;
