import React from 'react';
import { useState, useEffect } from 'react';


import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

import theater from '../../assests/imagem/theater.png';
import refresh from '../../assests/imagem/refresh.png';
import trash from '../../assests/imagem/trash.png';

import '../../assests/style/global.css';
import './genero.css';

function Genero() {

  const [idGenero, setIdGenero] = useState(0);
  const [genero, setGenero] = useState('');
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    listar();
  }, [])

  const listar = () => {
    fetch('http://localhost:5000/api/generos', {
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setGeneros(dados);
      })
      .catch(erro => console.error(erro))
  }

  const deletar = (id: number) => {
    if (window.confirm('Deseja excluir o Genero?')) {
      fetch('http://localhost:5000/api/generos/' + id, {
        method: 'DELETE',
        headers: {
          authorization: 'Bearer' + localStorage.getItem('token-filmes')
        }
      })
        .then(response => response.json())
        .then(dados => {
          listar()
        })
        .catch(erro => console.error(erro))
    }
  }

  const update = (id: number) => {
    fetch('http://localhost:5000/api/generos/' + id, {
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setIdGenero(dados.idGenero);
        setIdGenero(dados.nome);
      })
      .catch(erro => console.error(erro))
  }

  const salvar = () => {
    const form = {
      nome: genero
    };

    const method = (idGenero === 0 ? 'POST' : 'PUT');
    const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/generos' : 'http://localhost:5000/api/generos/' + idGenero);

    fetch(urlRequest, {
      method: method,
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
      .then(() => {
        alert('Gênero cadastrado com sucesso')
        setIdGenero(0);
        setGenero('');
        listar()
      })
      .catch(erro => console.error(erro))
  }

  return (
    <div className="Genero">
      <Header description="Cadastre os gêneros dos filmes" />

      <main className="main-genero">
        <div className="title-genero">
          <h1>Gêneros</h1>
          <img src={theater} alt="generos" />
        </div>

        <section className="section-genero">

          <h3>Lista de Gêneros</h3>


          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Gêneros</td>
                <td>Ações</td>
              </tr>
            </thead>
            <tbody>
              {
                generos.map((item: any) => {
                  return (
                    <tr key={item.idGenero}>
                      <td>{item.idGenero}</td>
                      <td>{item.nome}</td>
                      <td>
                        <img className="icon" src={refresh} onClick={() => update(item.idGenero)} alt="" />
                        <img className="icon" src={trash} onClick={() => deletar(item.idGenero)} alt="" />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </section>
        <form className="form-cadastro" onSubmit={event => {
          event.preventDefault();
          salvar();
        }}>
          <Input type="text" label="Cadastrar Gênero" name="genero" placeholder="Gênero" value={genero} onChange={e => setGenero(e.target.value)} />
          <div className="save-genero">
            <Button value="Salvar" />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Genero;