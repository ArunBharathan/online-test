import React from 'react';
import './index.css';






const Jobicon = (props) => {
    console.log(props.icon)
    return(
       
        <div className="iconcard">
            <img src={require( `./assets`+props.elem.icn)} alt="icon"/>
            <p>{props.elem.text}</p>
        </div>
           


    );
}
export default Jobicon;