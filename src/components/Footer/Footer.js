import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <React.Fragment>
            <footer className="footer-body">
                <div className="footer-panel">
                    <div className="logout-link">
                        <Link to="/">Log out</Link>
                    </div>
                    <p>Powered by Imagine Bytes</p>
                </div>
            </footer>
        </React.Fragment>
     );
}
 
export default Footer;