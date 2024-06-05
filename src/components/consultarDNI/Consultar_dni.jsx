import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Consultar_dni.css'

const Consultar_dni = () => {
    const [dni, setDni] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/schedule/${dni}`);
    };

    return (
    <div className='contenedor'>
        <div className="form_container">
            <div className='titulo'>
                <h2>Consulta de Horario</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="DNI"
                    required
                    />
                <div className='buttones'>
                    <button type="submit">Consultar</button>
                    <Link to="/"><button>Volver</button></Link>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Consultar_dni;
