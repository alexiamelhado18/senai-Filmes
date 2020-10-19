import React from 'react';
import logo from '../../assests/imagem/logo.png';
import './header.css';
import '../../assests/style/global.css';
import { Link } from 'react-router-dom';

interface HeaderProps {
  description: string;
  text?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="Header">
      <header>
        <nav id="nav-container">
          <div>
            
            <img id="logo_nav" src={logo} alt="Logo Filmes Collection" />
            <ul>
              <li><Link className="options-menu" to="/">Home</Link></li>
              <li><Link className="options-menu" to="/Login">Login</Link></li>
              <li><Link className="options-menu" to="/Cadastro">Cadastro</Link></li>
            </ul>

          </div>
          <h3>{props.description}</h3>
          {props.children}{props.text && <p>{props.text}</p>}
        </nav>
      </header>
    </div>
  );
}

export default Header;
