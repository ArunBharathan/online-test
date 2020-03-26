import React from 'react';
import './index.css';






const Usertype = (props) => {
    
    return(
       
        <div className="usercard">
            <h5>{props.head1}</h5>
            <h2>{props.head2}</h2>
            <p>Lorem Ipsum is simply dummy text of the 
printing and  typesetting industry.</p>
            <button className="rbtn">Register</button>
        </div>
           


    );
}
export default Usertype;