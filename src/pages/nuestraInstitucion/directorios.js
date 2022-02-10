import React from 'react';
import '../../App.css'

import Sidebar from './sidebar';

const Directorios = () => {
    return (
        <div className='ins'>
            <Sidebar />
            <div className='col-lg-9'>
                <div className='all'>

                    <div className="page-title">
                        <h1>DIRECTORIOS</h1>
                    </div>
                    <div className="page-content clearfix">
                        <div classname="col-md-12 div_descripcion_default alto_contraste" line-height="20px" >
                            <br/>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Cargo</th>
                                        <th>Telefono</th>
                                        <th>correo</th>

                                    </tr>
                                    <tr>
                                        <td>Pedro Rivero</td>
                                        <td>Coordinador de proyectos</td>
                                        <td>+57 310 000 0000</td>
                                        <td>pedro.rivero@corporacionsociedadprosperar.com</td>

                                    </tr>
                                    <tr>
                                        <td>Alba Benitez</td>
                                        <td>Representante legal</td>
                                        <td>+57 310 000 0000</td>
                                        <td>alba.benitez@corporacionsociedadprosperar.com</td>

                                    </tr>
                                    <tr>
                                        <td>Joryeth Rivero</td>
                                        <td>Asesora Juridica</td>
                                        <td>+57 310 000 0000</td>
                                        <td>joryeth.rivero@corporacionsociedadprosperar.com</td>

                                    </tr>
                                    <tr>
                                        <td>NN</td>
                                        <td>presidente</td>
                                        <td>+57 310 000 0000</td>
                                        <td>nn@correo.com</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Directorios;
