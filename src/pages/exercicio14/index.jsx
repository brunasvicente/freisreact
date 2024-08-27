import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Exercicioquatorze() {

    return (
        <div className='pagina-exercicioquatorze'>
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

                    <h1>Exercício 14 - Verificação de um Número Primo</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript que <b>verifique</b> se um número é primo. <br /> O início da sequência dos números primos são: <b>P = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ...</b> <br /><br /> * Um número primo é aquele que só é divisível por 1 e por ele mesmo. <br /> * Um número A é divisível por outro B, quando o resto de A/B é igual a zero. <br /> * Os números 0 e 1 não são primos.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o número</p>
                    <input className='input-um' type="text"/>

                    <a className='botao'>Executar</a>
                </div>

                <p className='p-final'></p>

            </main>
        </div>
    )
}