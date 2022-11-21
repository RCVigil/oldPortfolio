import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import Avatar from "../../img/RodrigoFoto.jpeg";
import Curriculum from "../../img/curriculum-Front-End_PDF-IMPRESSAO.pdf";

import "../../styles/components/Contato/contato.sass";
import { Link } from "react-router-dom";

const ContatoPort = () => {
  return (
    <div className="divContato">
      <Header />
      <div className="divContImg">
        <Link to={"/"}>
          <img src={Avatar} alt="Foto de Rodrigo Cuervo" />
        </Link>
        <h1 className="title">Desenvolvedor Front-End</h1>
        <h3 className="redesSoc">Redes Sociais</h3>
        <a href={Curriculum} target="_blanc" className="btn">
          Download Curriculum
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default ContatoPort;
