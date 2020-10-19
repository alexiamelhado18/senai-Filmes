import React from 'react';
import './footer.css' ;
import '../../assests/style/global.css'
import logo from '../../assests/imagem/logonegativo.png';

function Footer() {
  return (
    <div className="Footer">
      <footer>

        <div className="div-image-films">
          <img src={logo} alt="Logo Filmes Collection Negativo" />
        </div>

        <hr />

        <div className="info-contact">
          <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
          <p>Call us now toll free: (800)2345-6789</p>
          <p>Customer support: support@demolink.org</p>
          <p>Skype: sample-username</p>
        </div>

      </footer>
    </div>
  );
}

export default Footer;