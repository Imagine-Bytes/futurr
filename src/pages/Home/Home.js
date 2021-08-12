import React from 'react'
import illustration from './../../assets/illustration.png'
import Button from './../../components/Button/Button'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="content">
                <div className="display">
                    <p className="headline">Write a message to your future self. We would save it for you</p>
                    <div className="img">
                        <img alt="Illustration" src={illustration}/>
                    </div>
                </div>
                <div className="main buttons">
                    <Link to="/login">
                        <Button text="Login" />
                    </Link>
                    <Link to="/signup">
                        <Button text="Signup" />
                    </Link>
                </div>
           </div>
            <div className="footer">
                <p>Powered By ImagineBytes</p>
            </div>
        </div>
    )
}
