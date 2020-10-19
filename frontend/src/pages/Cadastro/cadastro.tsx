import React from 'react';

//components
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

//estilização
import './cadastro.css';
import '../../assests/style/global.css';

function Cadastro() {
    return (
        <div className="Cadastro">
            <Header description="Edite seu perfil caso necessário" />

            <section className="sessao-cadastro-usuario">
                <h1>Cadastro</h1>
                <form>
                    <Input type="text" name="nome" label="Nome" />
                    <Input type="text" name="email"label="E-mail" />

                    <label> Permissão
                        <select>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>

                    </label>

                    <Input type="password" name="password" label="Senha" />

                    <div className="sessao-btn">
                        <Button value="Editar" />
                        <Button value="Salvar" />
                    </div>
                </form>

            </section>
            <Footer />

        </div>
    )
}

export default Cadastro;