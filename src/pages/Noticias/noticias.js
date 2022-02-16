import React from 'react';
import '../../App.css'
import Sidebar from './sidebar';

const Noticia = () => {
    return (
        <div >
            <Sidebar />
            <br />
            <div className='contenido'>
                <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 title-seccion'>
                    <a>Noticias</a>
                </div>
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className='row'>
                        <div className='slideNoticias alto_contraste slick-initialized slick-slider'>
                            <div className='slick-list draggable'>
                                <div className='slick-track' opacity="1" width="4560px" transform="translate3d(-2280px, 0px, 0px)" >
                                    <div className='back-noticias'>
                                        <div>url</div>
                                        <a>title
                                            <div className='titulo-noticiaa'>
                                                titulo
                                            </div>
                                        </a>
                                        <div>fecha</div>
                                        <div>descripcion</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Noticia;
