import React from "react";

import "../../styles/components/Body/body.sass";

import SobrePort from "../../Pages/Sobre/sobrePort";
import PrincipaisStacks from "../Utils/PrincipaisSatcks";
import Aside from "../ASide/Aside";
import AsideLeft from "../Aside-Left/Aside-Left";

const Body = () => {
  return (
    <section className="sectionBody">
      <div className="bodyDivAside">
        <AsideLeft />
      </div>
      <div className="bodyDiv">
        <SobrePort />

        <PrincipaisStacks />
      </div>
      <div className="bodyDivAside">
        <Aside />
      </div>
    </section>
  );
};

export default Body;
