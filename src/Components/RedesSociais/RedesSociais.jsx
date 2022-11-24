import React from 'react'; 

import '../../styles/components/RedesSociais/redesSociais.sass'

import Linkedin from '../../img/linkedin-83.svg'
import GitHub from '../../img/GitHub-Icon-White-Logo.wine.svg'

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
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default RedesSociais;
