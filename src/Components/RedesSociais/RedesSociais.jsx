import React from 'react'; 

import '../../styles/components/RedesSociais/redesSociais.sass'
import Linkedin from '../../img/linkedin-83.svg'
import GitHub from '../../img/GitHub-Icon-White-Logo.wine.svg'
import WhattsApp from '../../img/whatsapp-33.svg'

const RedesSociais = () => {
  return (
    <div className='divSociais'>
      <table className="tableSociais">
        <thead className="theadSociais">
          <tr className="trSociais">
            <td className="tdSociais">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.linkedin.com/in/rodrigocvigil/"
                className="a_tdSociais"
              >
                <img
                  alt="imagem do Linkedin"
                  src={Linkedin}
                  className="img_tdSociais"
                />
                  Linkedin
              </a>
            </td>
            <td className="tdSociais">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://github.com/RCVigil"
                className="a_tdSociais atdGitHub"
              >
                <img
                  alt="imagem do GitHub"
                  src={GitHub}
                  className="img_tdSociais imgGitHub"
                />
                GitHub
              </a>
            </td>
            <td className="tdSociais">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://api.whatsapp.com/send?phone=5512981177499&text=Seja%20bem%20vindo!%20ao%20meu%20Portf%C3%B3lio%2C%20em%20breve%20te%20responderei%2C%20Obrigado%20pelo%20contato"
                className="a_tdSociais"
              >
                <img
                  alt="imagem do WhattsApp"
                  src={WhattsApp}
                  className="img_tdSociais"
                />
                WhattsApp
              </a>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default RedesSociais;
