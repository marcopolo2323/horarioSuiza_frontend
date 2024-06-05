import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PreguntasFrecuentes from './components/PreguntasFrecuentes/Preguntas_Frecuentes';
import SobreCarrera from './components/SobreLaCarrera/Sobre_la_carrera';
import Consultar_dni from './components/consultarDNI/Consultar_dni';
import Schedule from './components/Schedule';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobreLaCarrera" element={<SobreCarrera />} />
                    <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />} />
                    <Route path="/consultar" element={<Consultar_dni />} />
                    <Route path="/schedule/:dni" element={<Schedule />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
