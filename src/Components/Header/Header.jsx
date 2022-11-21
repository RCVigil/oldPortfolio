import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Header/header.sass";

function Header() {
  return (
    <header className="allHeader">
      <div className="h1DivHeader">
        <h1 className="h1Header"> <Link to={'/'}> Rodrigo Cuervo </Link> </h1>
      </div>
      <div className="h3DivHeader">
      <h3 className="h3Header"> <Link to={'/'}> Home </Link> </h3>
      <h3 className="h3Header"> <Link to={'/sobre'}> Sobre </Link> </h3>
      <h3 className="h3Header"> <Link to={'/projetos'}> Projetos </Link> </h3>
      <h3 className="h3Header"> <Link to={'/contato'}> Contato </Link> </h3>
      </div>
    </header>
  );
}

export default Header;
