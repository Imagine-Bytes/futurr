import React from 'react'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

export default function New() {
    return (
        <div>
            <div className="main">
                <p className="head-text">New Message</p>
                <form>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea>

                        </textarea>
                    </div>
                    <div>
                        <label htmlFor="duration">Duration</label>
                        <select>
                            <option>6 months</option>
                            <option>1 year</option>
                            <option>2 years</option>
                            <option>3 years</option>
                            <option>4 years</option>
                            <option>5 years</option>
                        </select>
                    </div>
                </form>
                <Button text="Send"/>
            </div>
            <Footer/>
        </div>
    )
}
