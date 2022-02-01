import React from 'react';
import '../../App.css'
import './inst.css'
import Sidebar from '../../components/sidebar';

const PrincipiosValores = () => {
    return (
        
        <div >
            <br />
            <div className='contenido'>
            <Sidebar />
                <div className='title'>
                    <h1>Principios y Valores</h1>
                    <br />
                    <div className='text'>
                        <p className='texto-justificado'><h3>● Honestidad:</h3> Actuar con transparencia teniendo en cuenta que prevalecen los intereses de las comunidades desprotegidas con el propósito de alcanzar las metas de la recomposición del tejido social de los colombianos</p>
                        <p className='texto-justificado'><h3>● Lealtad:</h3> Trabajar con responsabilidad para cumplir con los compromisos adquiridos con las Entidades y comunidades, sin importar las circunstancias.</p>
                        <p className='texto-justificado'><h3>● Respeto:</h3> Comprender a cada ser humano como único, capaz de valorar a los demás, acatar su autoridad y considerar su dignidad. </p>
                        <p className='texto-justificado'><h3>● Solidaridad:</h3> Actuar siempre con la capacidad del ser humano para sentir empatía por otra persona y ayudarla en los momentos difíciles, es un sentimiento de unidad en el que se buscan metas e intereses comunes. </p>
                        <p className='texto-justificado'><h3>● Justicia:</h3> Brindar a cada una de las personas del bien común que hagan parte de la empresa, lo que les corresponde de acuerdo a sus méritos y a los derechos que le asisten.</p>
                        <p className='texto-justificado'><h3>● Pertenencia:</h3>  Se creó en base a las premisas y principios de servicio con entrega y compromiso, esto hace que los lugares y las herramientas que usamos estén en condiciones óptimas, así se nos facilita las tareas y nos hace más fácil cumplir con nuestras metas.</p>
                        <p className='texto-justificado'><h3>● Tolerancia:</h3> Aceptar a los demás con respeto sin discriminación de raza, religión, cultura, y estrato social, valorando a cada uno por lo que es.</p>

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

export default PrincipiosValores;
