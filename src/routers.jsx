import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPort from "./Pages/PortFolio/indexPort";
import ContatoPort from "./Pages/contato/contatoPort";
import ProjetosPort from "./Pages/Projetos/projetosPort";
import SobrePort from "./Pages/Sobre/sobrePort";

const RoutersApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<IndexPort />} />
      <Route exact path="/sobre" element={<SobrePort />}/>
      <Route exact path="/projetos" element={<ProjetosPort />}/>
      <Route exact path="/contato" element={<ContatoPort />}/>
    </Routes>
  );
};

export default RoutersApp;
