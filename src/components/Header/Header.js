import React from 'react';
import './Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return ( 
        <React.Fragment>
            <header>
                <div className="brand">
                    <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
                </div>
            </header>
        </React.Fragment>
     );
}
 
export default Header;