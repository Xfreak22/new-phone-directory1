import React from "react";

const Header = function() {
    const HeaderStyle = {background:"black" , padding: 20, textTransform: "uppercase", color: "white" , textAlign: "center" };
    return(
        <div style={HeaderStyle}>
            Phone Directory
        </div>
    )
}

export default Header;