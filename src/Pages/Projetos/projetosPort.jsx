import React from "react";

import "../../styles/components/Projetos/projetos.sass";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import AsideLeft from "../../Components/Aside-Left/Aside-Left";
import BtnVoltar from "../../Components/Utils/BtnVoltar";
import Aside from "../../Components/ASide/Aside";

const ProjetosPort = () => {
  return (
    <div className="divPojetos">
      <Header />
      <div className="divContImg">
        <div className="bodyDivAside">
          <AsideLeft />
        </div>

        <div className="bodyProject">
          <h1 className="title">Projetos</h1>
          <h3>Página em construção
          <a
            target="_blank"
            href="https://github.com/RCVigil?tab=repositories"
            rel="noreferrer"
          >
            <h4>Clique aqui para meu Repositório no GitHub</h4>
          </a>
          </h3>
          <BtnVoltar />
        </div>

        <div className="bodyDivAside">
          <Aside />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjetosPort;
