import React from "react";

const Header = function(props) {
    const HeaderStyle = {background:"black" , padding: 20, textTransform: "uppercase", color: "white" , textAlign: "center" };
    return(
        <div style={HeaderStyle}>
            {props.headingname}
        </div>
    )
}

export default Header;