import React from "react";
import FetchData from './FetchData';
import FetchData1 from './FetchData1';
import FetchData2 from './FetchData2';
import { Routes, Route, Link } from 'react-router-dom';

function Nav(props){
    const AppNav = {
        backgroundColor:"#282c34",
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
        listStyle: 'none'
      }
    return(
        <>
            <nav style={AppNav} className="main-nav">
                <ul>
                    <li style={{color:props.color}}><Link to={'/movies'}>movies</Link></li>
                    <li><Link to={'/tv'}>tv</Link>   </li>

                    <li><Link to={'/persone'}>persone</Link>  </li>
                    
                </ul>
            </nav>

           <Routes>
            <Route path='/movies' element={<FetchData/>} />
            <Route path='/tv' element={<FetchData1/>} />
            <Route path='/persone' element={<FetchData2/>} />
           </Routes>
        </>
    )
}

export default Nav;