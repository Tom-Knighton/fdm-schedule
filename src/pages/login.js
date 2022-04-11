import React from 'react';
import {useState} from 'react'
import LoginForm from "../components/LoginForm";
import {UserService, users} from '../lib/UserService'
import {useNavigate} from "react-router-dom"

const Login = () =>{

    const userList = users

    let navigate = useNavigate();

    const [user, setUser] = useState({email: "", password: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        let user = UserService.Login(details.email, details.password)
        if(!user){
            return(
                setError("Details not found")
            )
        }
        else{
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/', {replace:true})
        }
    }


    const Logout = () => {
        setUser({email: "", password: ""})
    }


    return(
        <div className={'login-screen'}>
            {(user.email !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.email}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    )
}

export default Login