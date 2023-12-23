import React, { useState } from 'react';
import './LoginModal.css'
import logoImg from '../assets/login.jpg'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault() // No refresh
        // TODO: add axios
        console.log('Logging in with', username, password)
    }

    const handleFBLogin = () => {
        //TODO add logic here
        console.log("Login with Facebook account")
    }

    const handleGGLogin = () => {
        //TODO add logic here
        console.log("Login with Google account")
    }

    return (
        <div className="login-modal">
            <div className="login-modal-left">
                <div className="login-modal-left-upper">
                    <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                type="text"
                                placeholder={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="remember-me">
                                <input type="checkbox" id="rememberMe" />
                                <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <button type="submit" className="login-button">LOGIN</button>
                        </form>
                </div>
                <div className="login-modal-left-bottom">
                    <div className="helper-links">
                        <a >Register now</a>
                    </div>
                    <div className="separator">or</div>
                    <div className="social-logins">
                        <button className="facebook-button" onClick={handleFBLogin}>LOGIN WITH FACEBOOK</button>
                        <button className="google-button" onClick={handleGGLogin}>LOGIN WITH GOOGLE</button>
                    </div>
                </div>
            </div>
            <div className="login-modal-right">
                <img className="login-logo"  src={logoImg} alt="Logo" />
            </div>
            </div>

    )
}

