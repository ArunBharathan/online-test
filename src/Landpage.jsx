import React from 'react';
import './index.css';
import limg from './assets/himg.png';
// import {a} from 'react-router-dom';





const Landpage = () => {
    
    return(
       <div className="landpage">
           <div className="intro">
               <h4>Welcome On Board</h4>
               <h1>Let's Drive To The Desired Destination!!</h1>
               <p>Do you feel your education qualification is not quite enough for the job you desire?
                  Do you feel that you lack the skills necessary for a career change? Register with job bank and take the big leap to land your dream job.</p>
           </div>
           <img src={limg} className="lanimg" alt="image" />

       </div>
    );
}
export default Landpage;