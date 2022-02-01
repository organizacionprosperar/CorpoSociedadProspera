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
                <h1>MISION Y VISION</h1>
                <br />
                <br />
            </div>
                <div className='mision'>
                    <h1> Misión</h1>
                    <div>
                        <p className="texto-justificado">La CORPORACIÓN SOCIEDAD PROSPERAR impulsa y apoya el desarrollo
                            programas de capacitación para todas las comunidades en alto riesgo, destacando el esfuerzo
                            del talento humano al momento  ayudar en el mejoramiento de la calidad de  vidas  del personal
                            que se encuentran en situación de riesgo a nivel departamental por medio de actividades
                            académicas y prácticas Ambiental, Acción Social y Gestión del Riesgo para su crecimiento
                            personal y  así mejorar la calidad de vida de las comunidades afectadas.</p>
                    </div>
                    <br />
                </div>
                <div className='vision'>
                    <h1> Visión</h1>
                    <div>
                        <p className="texto-justificado">La CORPORACIÓN SOCIEDAD PROSPERAR para el año 2030 será una empresa reconocida
                            y posicionada a nivel nacional, teniendo como base del éxito, liderazgo
                            e innovación en reforestación ambienta y educación, buscando siempre la
                            excelencia y la satisfacción de las comunidades y asegurando el desarrollo
                            humano y social de los colombianos.</p>
                    </div>
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
