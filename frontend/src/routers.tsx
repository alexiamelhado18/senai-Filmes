import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';
import Filmes from './pages/Filmes/filmes';
import Genero from  './pages/Genero/genero';



function Routers() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/Cadastro" component={Cadastro}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Filmes" component={Filmes}/>
            <Route path="/Genero" component={Genero}/>
        </BrowserRouter>
    )
}

export default Routers;