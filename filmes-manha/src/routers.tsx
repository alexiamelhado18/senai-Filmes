import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';

function Routers() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/Cadastro" component={Cadastro}/>
            <Route path="/Login" component={Login}/>
        </BrowserRouter>
    )
}

export default Routers;