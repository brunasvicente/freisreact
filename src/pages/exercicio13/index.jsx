import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Exerciciotreze() {

    return (
        <div className='pagina-exerciciotreze'>
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

                    <h1>Exercício 13 - Leitor de Valores Inteiros do Usuário</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript que leia valores inteiros do usuário. Os valores devem ser pedidos ao usuário <b>até que o usuário digite o número 0</b>. Em seguida, o <b>programa deve</b> exibir a soma dos números positivos e a quantidade de números negativos.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Valor em gramas</p>
                    <input className='input-um' type="text"/>

                    <a className='botao'>Executar</a>
                </div>

                <p className='p-final'></p>

            </main>
        </div>
    )
}