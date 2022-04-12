import React from 'react';
import {useState} from 'react';
import {FaRegUserCircle} from "react-icons/fa"
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Login from "../pages/login";
import Apply from "../pages/apply";

function LoginForm({Login, error}){
    const [details, setDetails] = useState({email: '', password: ''})

    const submitHandler = e =>{
        e.preventDefault();

        Login(details)
    }

    return(
        <form onSubmit={submitHandler} className="animate__animated animate__fadeInUp form-outer">
            <div className="form-inner">
                <div className="icon-wrapper">
                    <FaRegUserCircle className={"user-icon"} size={80}/>
                </div>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input type="email" className="email" id="email"  placeholder="Email@fdmgroup.com" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input type="password" className="password" id="password" placeholder="********" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="login-button" onClick="window.location.reload();" value = "Login"/>
                </div>
                <p className="new-to-fdm">New to FDM?</p>
                <Link className='apply-button' to={"/apply"}>Apply for an Account</Link>
            </div>

        </form>
    )
}

export default LoginForm;