import React from "react";
import './App.css';

const Header = function(props) {
    return(
        <div> 
            {props.heading}
        </div>
    )
}

export default Header;