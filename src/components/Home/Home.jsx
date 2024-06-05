import React from 'react';
import './Home.css';
import logo_suiza from './../img/Logo-suiza.png';
import logo_desarrollo from "./../img/logo_desarrollo.png";
import estudiantes from './../img/estudiantes.jpg'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="main-container">
      <div className="header">
        <img src={logo_suiza} alt="Instituto Logo" className="logo" />
        <h1>INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICO PUBLICO "SUIZA"</h1>
        <div className="classroom">
          <img src={logo_desarrollo} alt="Classroom" />
        </div>
      </div>
      <h2>DESARROLLO DE SISTEMAS DE INFORMACIÓN</h2>
      <div className='estudiantes'>
        <img src={estudiantes} alt="" />
      </div>
      <div className="content">
        <div className="buttons">
            <div className='button-row'>
                <Link to={'/sobreLaCarrera'}>
                    <button className="button">SOBRE LA CARRERA</button>
                </Link>
            </div>
            <div className='button-row'>
                <Link to={'/consultar'}>
                    <button className="button">VER TU HORARIO</button>
                </Link>
                <Link to={'preguntasFrecuentes'}>
                    <button className="button">RESUELVE TUS DUDAS</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
