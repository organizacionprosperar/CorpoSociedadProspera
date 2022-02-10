import React from 'react';
import '../../App.css'
import Sidebar from './sidebar';

const Noticia = () => {
    return (
        <div >
            <Sidebar/>
            <br />
            <div className='contenido'>
            <div className='title'>
                <h1>Noticias</h1>
                <br />
                <br />
            </div>
            </div>
        </div>
    );
};

export default Noticia;
