import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule/:dni" element={<Schedule />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
