import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PF.css'; // Importar estilos CSS

const PreguntasFrecuentes = () => {
    const preguntasIniciales = [
        {
            id: 1,
            pregunta: '¿Sabes que significa HTML?',
            respuesta: 'HTML significa "HyperText Markup Language" (Lenguaje de Marcado de Hipertexto). Es el lenguaje estándar utilizado para crear y diseñar páginas web. HTML proporciona la estructura básica de los sitios web mediante el uso de etiquetas y atributos que definen el contenido y su formato, como textos, imágenes, enlaces, formularios, entre otros elementos.'
        },
        {
            id: 2,
            pregunta: '¿Cúal es el lenguaje de programacion mas utilizado?',
            respuesta: 'El lenguaje de programación más utilizado puede variar según el contexto y el propósito específico, pero algunos de los más populares y ampliamente utilizados en la actualidad son: javaScript,python,java,c++,c#'
        },
        {
            id: 3,
            pregunta: '¿Qué es un servidor?',
            respuesta: 'Un servidor es una computadora o un sistema informático que proporciona recursos, datos, servicios o funcionalidades a otros dispositivos llamados clientes, a través de una red. En el contexto de Internet, un servidor es típicamente una máquina dedicada que aloja y distribuye contenido web, aplicaciones, archivos, correos electrónicos, entre otros servicios, a usuarios o clientes que acceden a ellos a través de la red.'
            
        }
    ];

    const [preguntas] = useState(preguntasIniciales);
    const [busqueda, setBusqueda] = useState('');

    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
    };

    const preguntasFiltradas = preguntas.filter(pregunta =>
        pregunta.pregunta.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className='pf-container'>
            <h1>Preguntas Frecuentes</h1>
            <Link to="/" className='volver-link'>
                <button className='volver-button'>Volver</button>
            </Link>
            <div className='pf-content'>
                <div className='indice-preguntas'>
                    <h3>Índice de Preguntas</h3>
                    <input
                        type='text'
                        placeholder='Buscar...'
                        value={busqueda}
                        onChange={handleBusqueda}
                        className='input-busqueda'
                    />
                    <ul>
                        {preguntasFiltradas.map(pregunta => (
                            <li key={pregunta.id}>
                                <a href={`#pregunta-${pregunta.id}`} onClick={() => setBusqueda('')}>
                                    {pregunta.pregunta}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='lista-preguntas'>
                    {preguntasFiltradas.map(pregunta => (
                        <div className='pregunta' key={pregunta.id} id={`pregunta-${pregunta.id}`}>
                            <h3 onClick={() => setBusqueda('')}>
                                {pregunta.pregunta}
                            </h3>
                            <p>{pregunta.respuesta}</p>
                            <div className='preguntas-relacionadas'>
                                <p>Preguntas relacionadas:</p>
                                <ul>
                                    <li><button className='link-button'>¿Sabes que significa HTML?</button></li>
                                    <li><button className='link-button'>¿Qué es un servidor?</button></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PreguntasFrecuentes;
