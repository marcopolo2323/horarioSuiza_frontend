import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Schedule.css';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const Schedule = () => {
    const { dni } = useParams();
    const navigate = useNavigate();
    const [estudiante, setEstudiante] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!dni) return; // Asegura que dni esté definido antes de hacer la solicitud
        axios.get(`http://localhost:5000/horario/${dni}`)
            .then(response => {
                setEstudiante(response.data);
                setLoading(false);
                setError('');
            })
            .catch(error => {
                setLoading(false);
                setError('No se pudo cargar el horario. Por favor, inténtelo de nuevo más tarde.');
                console.error('Error fetching schedule:', error);
            });
    }, [dni]);

    const handleClick = (curso, colIndex) => {
        // Ignorar el clic si es la columna de la hora (colIndex === 0) o si el curso es una letra especial
        if (colIndex === 0 || curso.trim() === '' || curso.match(/\b[R|E|C|R|E]\b/i)) {
            return;
        }
        navigate(`/course/${curso}`, { state: { dni } });
    };

    const handleBackClick = () => {
        navigate(`/consultar`);
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    return (
        <div className="schedule-container">
            <button className="back-button" onClick={handleBackClick}>Volver al Horario</button>
            {estudiante && (
                <div id="resultado">
                    <h3>Nombre: {estudiante.nombre}</h3>
                    <h4>Ciclo: {estudiante.ciclo}</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Hora</th>
                                {daysOfWeek.map((day, index) => (
                                    <th key={index}>{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {estudiante.horario.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, colIndex) => (
                                        <td key={colIndex} onClick={() => handleClick(cell, colIndex)}>
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Schedule;
