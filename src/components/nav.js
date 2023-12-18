import React from "react";

function Nav(props){
    const AppNav = {
        backgroundColor:" #420c34",
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
      }
    return(
        <>
            <nav style={AppNav} className="main-nav">
                <ul>
                    <li style={{color:props.color}}>Home</li>
                    <li>About  { 4< 5}</li>
                    <li>Shop . {4/2}</li>
                    <li>{7*2}</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;