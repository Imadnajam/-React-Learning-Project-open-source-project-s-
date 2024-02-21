import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Act from './actors'




export default function Header() {
    
    return (
        <>
        <nav>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/actors'>Actors</Link>
                </ul>
            </nav>
            
        
        <Routes>
                <Route path="/" />
                <Route path="/actors" element={<Act/>}/>
        </Routes>
        </>
    )

}