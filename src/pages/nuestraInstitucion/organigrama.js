import React from 'react';
import '../../App.css'
import imgOrganigrama from '../../assets/organigrama.png';
import Sidebar from '../../components/sidebar';

const Organigrama = () => {
  return (
    <div className= "container">
       <Sidebar />
      <h1>Organigrama</h1>
      <div>
        <img src={imgOrganigrama} alt='...'></img>
      </div>

    </div>
  );
};

export default Organigrama;
