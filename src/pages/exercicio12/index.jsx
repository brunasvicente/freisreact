import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Cabecalho } from '../../components/cabecalho';

export default function Exerciciodoze() {


    return (
        <div className='pagina-exerciciodoze'>
            <Cabecalho/>

            <main>

                <div className='parte-titulo'>
                    <Link to='/'>
                        <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                    </Link>

                    <h1>Exercício 12 - Calculadora de Média de 3 Notas (Complexo)</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript que <b>calcule a média de três notas</b> informadas pelo usuário. O programa deve garantir que enquanto o usuário não informar uma nota válida, uma mensagem seja enviada informando o intervalo válido e solicitando a nota novamente.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe a nota</p>
                    <input className='input-um' type="text"/>

                    <a className='botao'>Executar</a>
                </div>

                <p className='p-final'></p>

            </main>
        </div>
    )
}