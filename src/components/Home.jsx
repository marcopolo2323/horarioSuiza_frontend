import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [dni, setDni] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/schedule/${dni}`);
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
        </div>
    );
};

export default Home;
