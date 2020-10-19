import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
// import Button from '../../components/Botao/botao';

import './login.css'

function Login() {

  let history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // const [cont, setCont] = useState(0);


  const login = () => {
    const login = {
      email: email,
      senha: senha
    }

    fetch('http://localhost:5000/api/conta/login', {

      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'content-type': 'application/json'
      }
    })

      .then(response => response.json())
      .then(dados => {
        localStorage.setItem("token-filmes", dados.token)
        history.push("/")
      })
      .catch(err => console.error(err))

  }
  return (
    <div className="Login">
      <Header description="Faça o login e acesse a coletânea" />

      <section className="central-login">
        <div className="sessao-div-login">

          <h1>Login</h1>

          <form className="divisao-login" onSubmit={event => {
            event.preventDefault();
            login();
          }}>
            <Input type="text" name="email" label="E-mail" onChange={e => setEmail(e.target.value)} />
            <Input type="password" name="senha" label="Senha" onChange={e => setSenha(e.target.value)} />

            <Button value="Enviar"/>
            {/* <Button onClick={() => setCont(cont + 1)} value="Enviar" />
            <p>Você clicou {cont}</p> */}
          </form>

        </div>
      </section>



      <Footer />
    </div>
  );
}

export default Login;