import React from "react";


function Sidebar() {
    return (
            <div className="col-md-2">
                <div className="div_left">
                        <ul className="lista_Menu">
                            <li className="item0">
                                <a href="/institucion">Misión y Visión</a>
                            </li>
                            <li className="item1">
                                <a href="/objetosFunciones">Objeto y Funciones</a>
                            </li>
                            <li className="item2">
                                <a href="/principiosValores">Principios y Valores</a>
                            </li>
                            <li className="item3">
                                <a href="/simbolos">Simbolos Institucionales</a>
                            </li>
                            <li className="item4">
                                <a href="/organigrama">Organigrama</a>
                            </li>
                            <li className="item5">
                                <a href="/directorios">Directorios</a>
                            </li>
                            <li className="item6">
                                <a href="/seccionales">Seccionales</a>
                            </li>
                        </ul>
                    </div>
            </div>
    );
};
export default Sidebar;
