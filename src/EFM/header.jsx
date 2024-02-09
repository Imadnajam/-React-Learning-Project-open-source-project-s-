import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './detail.jsx';

const Header = () => {
  return (
    <div className='head'>
      <Link to={'/'}>Home</Link>
      <Link to={'/details'}>Details</Link>
      <Routes>
        <Route path='/'  />
        <Route path='/details' element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Header;
