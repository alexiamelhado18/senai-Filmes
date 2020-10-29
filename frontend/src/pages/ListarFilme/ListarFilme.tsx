import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

import cinema from '../../assests/imagem/cinema.png';
import refresh from '../../assests/imagem/refresh.png';
import trash from '../../assests/imagem/trash.png';

import '../../assests/style/global.css';
import './listarFilme.css';

function ListarFilme() {
    const [filmes, setFilmes] = useState('');
    const [generos, setGeneros] = useState([]);
  
    useEffect(() => {
      listar();
    }, [])
  
    const listar = () => {
      fetch('http://localhost:5000/api/filmes', {
        method: 'GET',
        headers: {
          authorization: 'Bearer' + localStorage.getItem('token-filmes')
        }
      })
        .then(response => response.json())
        .then(dados => {
          setFilmes(dados);
        })
        .catch(erro => console.error(erro))
    }
  
    return (
        <div className="Genero">
            <Header description="Cadastre os filmes de sua preferência" />
            <main className="mainList">
                <div className="divTitle">
                    <h2>Filmes</h2>
                    <img src={cinema} alt="ícone de cinema" />
                </div>

                <section className="sectionListFilm">

                    <h3>Lista de Filmes</h3>

                    <div className="dl-sb-film">
                        <p>Titulo</p>
                        <p>Genero</p>
                        <img src={refresh} alt="ícone de atualização" />
                        <img src={trash} alt="ícone de deletar" />
                    </div>

                    <div className="dl-sb-film">
                        <p>Titulo</p>
                        <p>Genero</p>
                        <img src={refresh} alt="ícone de atualização" />
                        <img src={trash} alt="ícone de deletar" />
                    </div>

                    <div className="dl-sb-film">
                        <p>Titulo</p>
                        <p>Genero</p>
                        <img src={refresh} alt="ícone de atualização" />
                        <img src={trash} alt="ícone de deletar" />
                    </div>

                </section>

                <section className="sectionCadastFilm">
                    <Input label="Cadastrar Filmes" type="text" name="filme" placeholder="Título do Filme" />


                    <select>
                        <option value="" disabled selected>Gênero</option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>

                    <Button value="Salvar" />

                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ListarFilme;