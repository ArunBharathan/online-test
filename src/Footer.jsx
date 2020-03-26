import React from 'react';
import './index.css';




const Footer = (props) => {
    
    return(
        <div className="Footer">
            <div className="elem1">
                <img src={require(`./assets/flogo.png`)} />
                <p>33/725 A,Rak Towers, Near Mother Opticals,NH 544 - Aluva Road, Edapally Kochi-682024</p>
                <p>info@thejobbank.in</p>
                <p>0484-4069222</p>
                <p>www.thejobbank.in</p>
            </div>
            <div className="elem1">
                <h5>Usefull Links</h5>
                <p >Services</p>
                <p >Job Rule</p>
                <p >About Us</p>
                <p >Contact Us</p>    
            </div>
            <div className="elem1">
                <img src={require(`./assets/fimg.png`)} alt="image"/>

            </div>
            
        </div>
    );
}
export default Footer;