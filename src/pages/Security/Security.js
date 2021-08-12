import React from 'react'
import Button from '../../components/Button/Button'
import './Security.css'

export default function Security() {
    return (
        <div className="main">
            <p className="head-text">Set Security Passcode</p>
            <form>
                <div>
                    <select className="security-select">
                        <option>Name of the city you grew up in?</option>
                    </select>
                    <input type="text" id="code" name="code"></input>
                </div>
            </form>
            <Button text="Confirm"/>
        </div>
    )
}
