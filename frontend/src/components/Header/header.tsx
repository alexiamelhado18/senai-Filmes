import React from 'react';
import logo from '../../assests/imagem/logo.png';
import './header.css';
import '../../assests/style/global.css';
import { Link, useHistory } from 'react-router-dom';

interface HeaderProps { description: string; }

const Header: React.FC<HeaderProps> = (props) => {

  //variável que chama o componente History
  let history = useHistory();

  //criando a função logout, removendo o token do localStorage e chamando a página do usuário deslogado
  const logout = () => {
    localStorage.removeItem('token-filmes');
    history.push('/');
  }
  // criando a função menu() com a estrutura condicional que retornará o menu para usuários logados e deslogado
  const menu = () => {
    // a variável token recebe o conteúdo do local storage
    const token = localStorage.getItem('token-filmes');

    //se o valor de token estiver indefinido ou nulo, chama o menu deslogado, se não chama o menu para quando o usuário estiver logado
    if (token === undefined || token === null) {
      return (
        <ul>
          <li><Link className="options-menu" to="/">Home</Link></li>
          <li><Link className="options-menu" to="/Login">Login</Link></li>
          <li><Link className="options-menu" to="/Cadastro">Cadastro</Link></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li><Link to="/" className="options-menu">Home</Link></li>
          <li><Link to="/perfil" className="options-menu">Perfil</Link></li>
          <li><Link to="/genero" className="options-menu">Genero</Link></li>
          <li><Link to="/filme" className="options-menu">Filmes</Link></li>

          <li><Link to='' onClick={(event) => {
            event.preventDefault();
            logout();
          }}>Logout</Link></li>
        </ul>

      )
    }

  }

  return (
    <div className="Header">
      <header>
        <nav id="nav-container">
          <div>
            <Link to="/"> <img id="logo_nav" src={logo} alt="Logo Filmes Collection"/></Link>
            {menu()}
            </div>
            <h3>{props.description}</h3>
        </nav>
      </header>
    </div>
  );
}

export default Header;
