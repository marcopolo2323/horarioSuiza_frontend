import React, { useState } from 'react';
import axios from 'axios';

const Consult = () => {
    const [dni, setDni] = useState('');
    const [estudiante, setEstudiante] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setEstudiante(null);

        axios.get(`http://localhost:5000/horario/${dni}`)
            .then(response => {
                setEstudiante(response.data);
            })
            .catch(() => {
                setError('No se encontró el horario para el DNI proporcionado.');
            });
    };

    return (
        <div className="form-container">
            <h2>Consulta de Horario</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="DNI"
                    required
                />
                <button type="submit">Consultar</button>
            </form>
            {error && <p className="error">{error}</p>}
            {estudiante && (
                <div id="resultado">
                    <h3>Nombre: {estudiante.nombre}</h3>
                    <h4>Ciclo: {estudiante.ciclo}</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Curso</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiante.horario.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.fecha}</td>
                                    <td>{item.curso}</td>
                                    <td>{item.hora}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Consult;
