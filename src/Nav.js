import React from 'react';
import './index.css';
import logo from './assets/logo.png';
// import {a} from 'react-router-dom';


const linkstyle ={
    color:'white',
    textDecoration:'none'

};


const Nav = () => {
    
    return(
        <nav>
            <div ><img src={logo} alt="logo" /></div>
            <ul className='nav-link'>
                <a style={linkstyle} href="#"><li><span className="icofont-home"></span>Services</li></a>
                <a style={linkstyle} href="#"><li><span className="icofont-server"></span>Job Rule</li></a>
                <a style={linkstyle} href="#"><li><span className="icofont-price"></span>About Us</li></a>
                <a style={linkstyle} href="#"><li><span className="icofont-login"></span>Contact Us</li></a>

            </ul>
           
            
        </nav>
    );
}
export default Nav;