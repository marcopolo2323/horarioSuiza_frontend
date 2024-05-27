import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const Schedule = () => {
    const { dni } = useParams();
    const [estudiante, setEstudiante] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/horario/${dni}`)
            .then(response => {
                setEstudiante(response.data);
                setError('');
            })
            .catch(() => {
                setEstudiante(null);
                setError('No se encontró el horario para el DNI proporcionado.');
            });
    }, [dni]);

    return (
        <div className="form-container">
            {error && <p className="error">{error}</p>}
            {estudiante ? (
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
                                        <td key={colIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default Schedule;
