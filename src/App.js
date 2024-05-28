import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Consultar_dni from './components/Consultar_dni';
import Schedule from './components/Schedule';
import Home from './components/Home';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Consultar_dni />} />
                    <Route path="/schedule/:dni" element={<Schedule />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
