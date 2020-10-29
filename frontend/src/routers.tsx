import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';
import Filmes from './pages/Filmes/filmes';
import Genero from  './pages/Genero/genero';
import ListarFilme from './pages/ListarFilme/ListarFilme';

function Routers() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/Cadastro" component={Cadastro}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Filmes" component={Filmes}/>
            <Route path="/Genero" component={Genero}/>
            <Route path="/ListaFilmes" component={ListarFilme}/>
        </BrowserRouter>
    )
}

export default Routers;