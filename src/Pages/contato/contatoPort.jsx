import React from "react";

import "../../styles/components/Contato/contato.sass";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import RedesSociais from "../../Components/RedesSociais/RedesSociais";

import Avatar from "../../img/RodrigoFoto.jpeg";

import BtnVoltar from "../../Components/Utils/BtnVoltar";

const ContatoPort = () => {
  return (
    <div className="divContato">
      <Header />
      <div className="divContImg">
        <img
          className="imgAvatar"
          src={Avatar} alt="Foto de Rodrigo Cuervo" />
        <h1 className="title">Desenvolvedor Front-End</h1>
        <RedesSociais />
        <h3 className="redesSoc">Redes Sociais</h3>
        <div className="divBtn">
          <BtnVoltar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContatoPort;
