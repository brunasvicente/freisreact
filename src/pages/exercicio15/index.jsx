import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicioquinze() {

    return (
        <div className='pagina-exercicioquinze'>

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
                    
                    <h1>Exercício 15 - Informações de Usuários</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript que leia o <b>o nome, a idade e o sexo de várias pessoas</b>. O programa vai perguntar se o usuário quer ou não continuar. No final, mostre: <br /><br />a. O nome da pessoa mais velha <br />b. O nome da mulher mais jovem <br />c. A média de idade do grupo <br />d. Quantos homens tem mais de 30 anos <br />e. Quantas mulheres tem menos de 18 anos</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o nome da pessoa</p>
                    <input className='input-um' type="text"/>

                    <p className='p-dois'>Informe a idade da pessoa</p>
                    <input className='input-dois' type="text"/>

                    <p className='p-dois'>Tempo o sexo da pessoa</p>
                    <input className='input-dois' type="text"/>

                    <a className='botao'>Executar</a>
                </div>

                <p className='p-final'></p>

            </main>

        </div>
    )
}