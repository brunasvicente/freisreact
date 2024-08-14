import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Exerciciodois() {


    return (
        <div className='pagina-exercicioonze'>
            <header className='navegacao'>
                <div className='um'>
                    <img src="/assets/images/frei.png" alt="Logo Frei" />
                    <h1>React FreiS</h1>
                </div>

                <div className='dois'>
                    <Link to='/'>
                        <a className='inicio'>Início</a>
                    </Link>

                    <Link to='/sobre'>
                        <a className='sobre'>Sobre</a>
                    </Link>
                </div>
            </header>


            <main>

                <div className='parte-titulo'>
                    <Link to='/'>
                        <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                    </Link>

                    <h1>Exercício 11 - Tabuada</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implemente um programa em JavaScript que <b>escreva no terminal</b> a tabuada de um número informado pelo usuário. A mensagem deve estar no formato: "A x B = X".</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Número da tabuada</p>
                    <input className='input-um' type="text"/>

                    <a className='botao'>Executar</a>
                </div>

                <p className='p-final'></p>

            </main>
        </div>
    )
}