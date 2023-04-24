import './Login.css'
import logo from './image/logo_ku_en.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/home');
    };

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text">Username</p>
        <input type="text" id="username" name="Username" placeholder="Your b631XXXXXXX" required></input>
        <p className="text">Password</p>
        <input type="text" id="password" name="Password" required></input>
        <button class="btn" onClick={navigateHome}>Login</button>
      </header>
    </div>
    );
}

export default Login;