import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Header/header.sass";
import Carrossel from "../Carrossel/Carrossel";

function Header() {
  return (
    <header className="allHeader">
      <div className="headerTop">
        <div className="h1DivHeader">
        <h1 className="h1Header">
          <Link
          className="fs-1 linkH1"
            to={'/'}>
            Rodrigo Cuervo
          </Link>
        </h1>
        </div>

        <div className="h3DivHeader">
        <h3 className="h3Header">
          <Link
            className="linkH3Header"
            to={'/'}
          >
            Home
          </Link>
        </h3>

        <h3 className="h3Header">
          <Link
          className="linkH3Header"
            to={'/projetos'}
          >
            Projetos
          </Link>
        </h3>

        <h3 className="h3Header"> <Link className="linkH3Header" to={'/contato'}> Contato </Link> </h3>

        </div>
      </div>

      <div className="carrosselHeader">
        <Carrossel />
      </div>

    </header>
  );
}

export default Header;
