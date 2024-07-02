import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './CourseDetails.css';

const CourseDetails = () => {
    const { nombreCurso } = useParams();
    const [cursoDetails, setCursoDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const location = useLocation();
    const dni = location.state ? location.state.dni : null;

    useEffect(() => {
        axios.get(`http://localhost:5000/curso/${nombreCurso}`)
            .then(response => {
                setCursoDetails(response.data);
                setLoading(false);
                setError('');
            })
            .catch(error => {
                setLoading(false);
                setError('No se pudieron cargar los detalles del curso. Inténtelo de nuevo más tarde.');
                console.error('Error fetching course details:', error);
            });
    }, [nombreCurso]);

    if (loading) {
        return <p>Cargando detalles del curso...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    return (
        <div className="course-details">
            <h2>Detalles del Curso: {nombreCurso}</h2>
            {cursoDetails ? (
                <div>
                    <p>Profesor: {cursoDetails.nombreProfesor}</p>
                    <p>Email: {cursoDetails.correoElectronico}</p>
                    <p>
                        Syllabus: <a href={cursoDetails.syllabus} target="_blank" rel="noopener noreferrer">Ver/Descargar Syllabus</a>
                    </p>
                </div>
            ) : (
                <p>No se encontraron detalles para este curso.</p>
            )}
            {dni && <Link to={`/schedule/${dni}`}>Volver al Horario</Link>}
        </div>
    );
};

export default CourseDetails;
