import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Consultar_dni.css';

const ConsultarDni = () => {
    const [dni, setDni] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dni.length === 8) {
            navigate(`/schedule/${dni}`);
        } else {
            setError('Por favor, ingrese exactamente 8 números.');
        }
    };

    const handleChange = (e) => {
        setDni(e.target.value);
        if (error) {
            setError('');
        }
    };

    return (
        <div className='consultar-dni-container'>
            <div className="form-container">
                <div className='titulo'>
                    <h2>Consulta de Horario</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={dni}
                        onChange={handleChange}
                        placeholder="Ingrese su DNI"
                        required
                        className={`input-dni ${error && 'input-error'}`}
                    />
                    {error && <p className="error-message">{error}</p>}
                    <div className='botones'>
                        <button type="submit" className="consultar-button">Consultar</button>
                        <Link to="/" className="volver-button">Volver</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConsultarDni;
