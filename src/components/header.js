import React from 'react';
import Logo from '../assets/logo.png'


const Header = ({ button }) => {
    return ( 
        <React.Fragment>
            <header> <div className="brand"> <img src={Logo} /> </div>
                {button && <div className="add"> <button> Add </button> </div>}
            </header>
        </React.Fragment>
     );
}
 
export default Header;