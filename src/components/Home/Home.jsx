import React from 'react';
import './Home.css';
import logoSuiza from './../img/Logo-suiza.png';
import logoDesarrollo from "./../img/logo_desarrollo.png";
import estudiantes from './../img/estudiantes.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return ( 
    <div className='contenedor_home'>
        <div className="main-container">
          <header className="header">
            <img src={logoSuiza} alt="Instituto Logo" className="logo" />
            <h1>INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO "SUIZA"</h1>
            <div className="classroom">
              <img src={logoDesarrollo} alt="Classroom" />
            </div>
            <h2>DESARROLLO DE SISTEMAS DE INFORMACIÓN</h2>
          </header>
          <div className='estudiantes'>
            <img src={estudiantes} alt="Estudiantes" />
          </div>
          <main className="content">
            <div className="buttons">
                <div className='button-row'>
                    <Link to='/sobreLaCarrera'>
                        <button className="button">SOBRE LA CARRERA</button>
                    </Link>
                </div>
                <div className='button-row'>
                    <Link to='/consultar'>
                        <button className="button">VER TU HORARIO</button>
                    </Link>
                    <Link to='/preguntasFrecuentes'>
                        <button className="button">PREGUNTAS FRECUENTES</button>
                    </Link>
                </div>
            </div>
          </main>
        </div>
        <footer className="footer_home">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Sobre Nosotros</h3>
            <p>El Instituto de Educación Superior Tecnológico Público "Suiza" se dedica a proporcionar educación de alta calidad en el campo del desarrollo de sistemas de información.</p>
          </div>
          <div className="footer-section links">
            <h3>Enlaces Útiles</h3>
            <ul>
              <li><Link to='/sobreLaCarrera'><i className="fas fa-info-circle"></i> Sobre la Carrera</Link></li>
              <li><Link to='/consultar'><i className="fas fa-calendar-alt"></i> Ver tu Horario</Link></li>
              <li><Link to='/preguntasFrecuentes'><i className="fas fa-question-circle"></i> Resuelve tus Dudas</Link></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contacto</h3>
            <p><i className="fas fa-map-marker-alt"></i> Dirección: Calle Falsa 123, Ciudad, País</p>
            <p><i className="fas fa-phone"></i> Teléfono: +123 456 7890</p>
            <p><i className="fas fa-envelope"></i> Email: contacto@institutosuiza.edu</p>
          </div>
          <div className="footer-section social">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 Instituto de Educación Superior Tecnológico Público "Suiza". Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Home;
