import React from 'react'
import illustration from './../../assets/illustration.png'
import Button from './../../components/Button/Button'
import './Home.css'

export default function Home() {
    return (
        <div>
            <div className="content">
                <div className="display">
                    <p>Write a message to your future self. We would save it for you</p>
                    <div className="img">
                        <img alt="Illustration" src={illustration}/>
                    </div>
                </div>
                <div className="main">
                    <Button text="Login" />
                    <Button text="Signup" />
                </div>
            </div>
            <div className="footer">
                <p>Powered By ImagineBytes</p>
            </div>
        </div>
    )
}
