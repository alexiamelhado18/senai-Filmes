import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import imgcinema from '../../assests/imagem/cinema.png';
import imgmascara from '../../assests/imagem/theater.png';

import './style.css';
function Home() {
    return (
        <div className="Home">
            <Header description="Conheça nossa Coletânea" />
            <main>

                <h1>Monte sua Coletânea de filmes...</h1>
                <section className="sessao-home-s">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est odio quas dolore, dicta quae aperiam perferendis eaque debitis esse.
                    Odit ab ullam fugiat at aspernatur dolor vero perspiciatis possimus doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Harum, ipsam ducimus. Eaque, dolor, praesentium vero accusantium incidunt at quia illum provident ullam error quis deserunt facere cum facilis cupiditate illo?</p>
                </section>
                <section className="sessao-sub-cx">
                    <div className="caixa-text">
                        <img src={imgcinema} alt="ícone de cinema" />
                        <h3>Filmes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Autem maiores ullam itaque laborum vel expedita voluptatem iusto cumque nihil.
                           Iste, earum nihil alias possimus quam ducimus non impedit eligendi sapiente.</p>
                    </div>
                    <div className="caixa-text">
                        <img src={imgmascara} alt="ícone de mascara" />
                        <h3>Categoria</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Autem maiores ullam itaque laborum vel expedita voluptatem iusto cumque nihil.
                           Iste, earum nihil alias possimus quam ducimus non impedit eligendi sapiente.</p>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
export default Home;