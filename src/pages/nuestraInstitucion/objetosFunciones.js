import React from 'react';
import '../../App.css'
import './inst.css'
import Sidebar from '../../components/sidebar';

const Institucion = () => {
    return (
        <div >
            <Sidebar />

            <br />
            <div className='contenido'>
                <div className='title'>
                    <h1>OBJETIVOS</h1>
                    <br />
                    <br />
                </div>
                <div className='text'>
                    <h1> Objetico General</h1>
                    <div>
                        <p className="texto-justificado">Mejorar la calidad de vida de las Comunidades desarrollando programas del
                            Medio ambiente, organizando y orientando los procesos de capacitación en los planes Municipales,
                            Departamentales, y distritales en gestión de riesgo con sus estrategias de respuestas, la gestión
                            ambiental y social, en el país.</p>
                    </div>
                    <br />
                </div>
                <div className='text'>
                    <h1>Objetivos Estratégicos</h1>


                    <ul>
                        <li className="texto-justificado">●	Ejecutar acciones necesarias que conduzcan a disminuir la vulnerabilidad y el riesgo en las comunidades.</li><br/>
                        <li className="texto-justificado">●	Capacitar a los líderes comunitarios y a todos sus actores, en nuestros campos de acción.</li><br/>
                        <li className="texto-justificado">●	Realizar capacitaciones y socializaciones a toda la comunidad, incluyendo personas de empresas públicas, privadas, instituciones educativas y universitarias.</li> <br/>
                        <li className='texto-justificado'>●	Fortalecer la cultura de la prevención en la comunidad, como garantía de convivencia en un ambiente saludable.</li> <br/>
                        <li className='texto-justificado'>●	Ayudar a vencer el dolor y la tristeza donde se hacen presente.</li> <br/>

                    </ul>

                

                </div>
                <div className='text'>
                    <h1>Objetivos Corporativos</h1>


                    <ul>
                        <li className="texto-justificado">●	Apoyar a las comunidades y entidades con los procesos de desarrollo implementados para el mejoramiento y formación en actividades sociales y ambientales.</li><br/>
                        <li className="texto-justificado">●	Ejecutar acciones necesarias que conduzcan a disminuir la vulnerabilidad y el riesgo en las comunidades.</li><br/>
                        <li className="texto-justificado">●	Capacitar a los líderes comunitarios y a todos sus actores, en nuestros campos de acción.</li> <br/>
                        <li className='texto-justificado'>●	Cumplir con los compromisos adquiridos durante la ejecución de actividades.</li> <br/>
                        <li className='texto-justificado'>●	Demostrar responsabilidad social participando activamente en la mejora del bienestar de la comunidad.</li> <br/>
                        <li className='texto-justificado'>●	Fortalecer la cultura de la prevención, como garantía de convivencia en un ambiente saludable.</li> <br/>


                    </ul>

                

                </div>
            </div>
            <br />
            <br />
            <button>imprimir</button>
            <br />
        </div>
    );
};

export default Institucion;
