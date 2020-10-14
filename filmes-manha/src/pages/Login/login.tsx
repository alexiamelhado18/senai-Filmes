import React, { useState } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Input from '../../components/Input/input';
import Button from '../../components/Botao/botao';

import './login.css'

function Login() {

  const [cont, setCont] = useState(0);


  return (
    <div className="Login">
      <Header description="Faça o login e acesse a coletânea" />

      <section className="central-login">
        <div className="sessao-div-login">

          <h1>Login</h1>

          <div className="divisao-login">
            <Input type="text" name="email" label="E-mail" />
            <Input type="password" name="senha" label="Senha" />
            <Button onClick={() => setCont(cont + 1)} value="Enviar" />
            <p>Você clicou {cont}</p>
          </div>

        </div>
      </section>



      <Footer />
    </div>
  );
}

export default Login;