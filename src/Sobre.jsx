import {
  SobreMain,
  SobreImage,
  SobreContato,
} from './Componentes/Sobre.module.css';
import React from 'react';
import Head from '../../001-router/src/Head';
import Contato from './img/contato.jpg';

const Sobre = () => {
  return (
    <div className={SobreMain}>
      <Head title="Sobre" description="Entre em contato com a gente" />{' '}
      <img className={SobreImage} src={Contato} alt="" />
      <div>
        <h2>Entre em contato.</h2>
        <ul className={SobreContato}>
          <li>(20) 9999-9999</li>
          <li>furquim@origamid.com</li>
          <li>Rua Ali perto, 29</li>
        </ul>
      </div>
    </div>
  );
};

export default Sobre;
