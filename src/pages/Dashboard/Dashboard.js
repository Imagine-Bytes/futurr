import React from 'react'
import './Dashboard.css'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <div className="main">
                <div className="text-btn">
                    <p className="head-text">Messages</p>
                    <div className="new-btn">
                        <Link to="/new">
                            <button>+ New Message</button>
                        </Link>
                    </div>
                </div>
                <div className="message-list">
                    <div className="credential">
                        <p className="credential-head">22nd July, 2019 - 04:00 pm</p>
                        <p className="sub-text">Duration: 2 Years</p>
                    </div>
                    <div className="credential">
                        <p className="credential-head">22nd July, 2019 - 04:00 pm</p>
                        <p className="sub-text">Duration: 2 Years</p>
                    </div>
                    <div className="credential">
                        <p className="credential-head">22nd July, 2019 - 04:00 pm</p>
                        <p className="sub-text">Duration: 2 Years</p>
                    </div>
                    <div className="credential">
                        <p className="credential-head">22nd July, 2019 - 04:00 pm</p>
                        <p className="sub-text">Duration: 2 Years</p>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}
