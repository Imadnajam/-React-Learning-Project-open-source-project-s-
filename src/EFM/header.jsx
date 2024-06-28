import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Detail from './detail.jsx';

const Header = () => {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Bibliothèque</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/details" className="nav-link">Details</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <Routes>
                <Route path="/" />
                <Route path="/details" element={<Detail />} />
            </Routes>
        </>);
};

export default Header;
