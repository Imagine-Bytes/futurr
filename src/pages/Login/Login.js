import React from 'react'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import './Login.css'


export default function Login() {
    return (
        <div className="main">
            <p className="head-text">Login</p>

            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                </div>
                <div className="forgot-link">
                    <Link to="/404">Forgot Password</Link>
                </div>
            </form>
            <Link to="dashboard"><Button text="Login"></Button></Link>
        </div>
                
    )
}
