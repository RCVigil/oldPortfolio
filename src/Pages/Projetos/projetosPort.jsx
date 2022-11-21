import React from 'react';

import "../../styles/components/Projetos/projetos.sass";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import { Link } from "react-router-dom";

const ProjetosPort = () => {
  return (
    <div className="divPojetos">
      <Header />
      <div className="divContImg">
        <h1 className="title">Projetos</h1>
        <Link to={"/"}>
          Voltar
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ProjetosPort;
