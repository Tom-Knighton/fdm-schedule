import React from 'react';
import {useState} from 'react';
import {FaRegUserCircle} from "react-icons/fa"

function LoginForm({Login, error}){
    const [details, setDetails] = useState({email: '', password: ''})

    const submitHandler = e =>{
        e.preventDefault();

        Login(details)
    }

    return(
        <form onSubmit={submitHandler} className="form-outer">
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
            </div>
        </form>
    )
}

export default LoginForm;