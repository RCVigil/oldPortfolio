import React from "react";
import { Link } from "react-router-dom";

const BtnVoltar = () => {
  return (
    <div className="div_voltar">
      <Link className="btnVoltar" to="/">
        Voltar
      </Link>
    </div>
  );
};

export default BtnVoltar;
