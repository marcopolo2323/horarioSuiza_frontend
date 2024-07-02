import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardActions, Typography, Container, Grid } from '@mui/material';
import './SC.css';

const SobreCarrera = () => {
  const [seccionActiva, setSeccionActiva] = useState('acerca-de');
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    // Simula la carga de datos de anuncios y avisos
    const datosAnuncios = [
      { id: 1, titulo: 'Aviso Importante', descripcion: 'Reunión de profesores el lunes a las 10 AM.' },
      { id: 2, titulo: 'Anuncio de Evento', descripcion: 'Conferencia sobre tecnología el viernes a las 3 PM.' },
      { id: 3, titulo: 'Fecha Límite', descripcion: 'Entrega de proyectos finales el 30 de junio.' },
    ];
    setAnuncios(datosAnuncios);
  }, []);

  const cambiarSeccion = (seccion) => {
    setSeccionActiva(seccion);
  };

  return (
    <div className="sobre-carrera-container">
      <Container className='sobre-carrera'>
        <Typography variant="h3" component="h1" gutterBottom>Sobre la Carrera</Typography>
        <div className='top-right-button'>
          <Link to="/" className='back-link'>Volver</Link>
        </div>
        <div className="botones-seccion">
          <Button variant={seccionActiva === 'acerca-de' ? 'contained' : 'outlined'} onClick={() => cambiarSeccion('acerca-de')}>Acerca de</Button>
          <Button variant={seccionActiva === 'plan-de-estudios' ? 'contained' : 'outlined'} onClick={() => cambiarSeccion('plan-de-estudios')}>Plan de Estudios</Button>
          <Button variant={seccionActiva === 'anuncios-y-avisos' ? 'contained' : 'outlined'} onClick={() => cambiarSeccion('anuncios-y-avisos')}>Anuncios y Avisos</Button>
        </div>
        <section className={`contenedor-acercade ${['acerca-de', 'plan-de-estudios', 'proyectos', 'anuncios-y-avisos'].includes(seccionActiva) ? 'active-section' : ''}`}>
          {seccionActiva === 'acerca-de' && (
            <>
              <Typography variant="h4" component="h2">Desarrollo de Sistemas de Información</Typography>
              <Typography variant="body1">
                <h3>competencias especificas</h3>
                <ol>
                  <li>Desarrollar la construcción de programas de los sistemas de información, de acuerdo con el diseño funcional, estándares internacionales de TI, buenas prácticas de programación y políticas de seguridad de la organización.</li>
                  <li>Desarrollar las pruebas integrales de los sistemas de información y servicios de TI en la fase de implantación, de acuerdo con el diseño funcional, buenas prácticas de TI y políticas de seguridad de la organización.</li>
                  <li>Realizar la puesta en producción de los sistemas de información o servicios de TI, de acuerdo con la planificación efectuada.</li>
                  <li>Administrar el diseño funcional de los sistemas de información, de acuerdo con las demandas del negocio que son parte del alcance de la arquitectura de sistemas vigente.</li>
                </ol>
                <h3>competencias de empleabilidad</h3>
              </Typography>
            </>
          )}
          {seccionActiva === 'plan-de-estudios' && (
            <>
              <Typography variant="h4" component="h2">Plan de Estudios</Typography>
              <Typography variant="body1">Contenido de la sección Plan de Estudios...
                <img src="https://institutosuiza.edu.pe/wp-content/uploads/2023/08/DSI-Mod1-768x442.png" alt="malla curricular" />
              </Typography>
            </>
          )}
          {seccionActiva === 'anuncios-y-avisos' && (
            <>
              <Typography variant="h4" component="h2">Anuncios y Avisos</Typography>
              <Grid container spacing={3} className="grid-container">
                {anuncios.length > 0 ? (
                  anuncios.map((anuncio) => (
                    <Grid item xs={12} sm={6} md={4} key={anuncio.id}>
                      <Card className="card">
                        <CardContent className="card-content">
                          <Typography variant="h5" component="div" className="card-title">{anuncio.titulo}</Typography>
                          <Typography variant="body2" color="text.secondary" className="card-description">{anuncio.descripcion}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Más información</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <Typography variant="body1">No hay anuncios disponibles en este momento.</Typography>
                )}
              </Grid>
            </>
          )}
        </section>
      </Container>
    </div>
  );
};

export default SobreCarrera;
