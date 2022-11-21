import React from "react";

import "../../styles/components/Body/body.sass";
import PrincipaisSatcks from "../Utils/PrincipaisSatcks";

const Body = () => {
  return (
    <div className="bodyDiv">
      <h1>Principais Stacks aprendidas em minha carreira!</h1>

      <PrincipaisSatcks />

      <h3 className="divH3">
        Qualquer dúvida, em relação à tecnologia é só clicar no nome, que você
        será redirecionado ao site Oficial
      </h3>
    </div>
  );
};

export default Body;
