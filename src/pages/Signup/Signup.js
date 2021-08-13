import React from 'react'
import Button from '../../components/Button/Button'
import './Signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className="main signup-page">
            <p className="head-text">Sign up</p>

            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                </div>
                <div>
                    <label htmlFor="repeat">Repeat Password</label>
                    <input type="password" id="repeat"></input>
                </div>
            </form>
            
            <Link to="/login">
                <Button text="Signup"/>
            </Link>
        </div>
    )
}
