import React from "react";
import './App.css';

const Button1 = function(props) {
    return(
    <div>
        <button className="button-style1">{props.heading}</button>
    </div>
    )
}



export default Button1;