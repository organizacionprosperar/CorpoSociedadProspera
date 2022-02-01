import React from "react";


function Sidebar(){
    return (
        <>
            <div className="sidebar">
                <div>
                    <a href="/institucion">Misión y Visión</a>
                </div>
                <hr/>

                <div>
                    <a href="/objetosFunciones">Objeto y Funciones</a>
                </div>
                <hr/>
                <div>
                    <a href="/principiosValores">Principios y Valores</a>
                </div>
                <hr/>
                <div>
                    <a href="#">simbolos Institucionales</a>
                </div>
                <hr/>
                {/* <div>
                    <a herf="#">Historia de la Entidad</a>
                </div>
                <hr/> */}
                {/* <div>
                    <a herf="#">Sector Defensa</a>
                </div>
                <hr/> */}
                <div>
                    <a href="/organigrama">Organigrama</a>
                </div>
                <hr/>
                <div>
                    <a href="#">Directorios</a>
                </div>
                <hr/>
                <div>
                    <a href="#">Seccionales</a>
                </div>
                

            </div>
        </>
    );
};
export default Sidebar;
