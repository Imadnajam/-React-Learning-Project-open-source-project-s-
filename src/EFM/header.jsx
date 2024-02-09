import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './detail.jsx';

const Header = () => {
    return (
        <div style={{backgroundColor:'teal'}}>
            <h2 style={{textAlign:'center'}}> Bibliothèque</h2>
            <div className='head'>


                <br />
                <Link to={'/'}>Home</Link>
                <Link to={'/details'}>Details</Link>
                <Routes>
                    <Route path='/' />
                    <Route path='/details' element={<Detail />} />
                </Routes>
            </div>
        </div>

    );
};

export default Header;
