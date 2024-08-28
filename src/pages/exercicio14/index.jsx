import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exercicioquatorze() {

    return (
        <div className='pagina-exercicioquatorze'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 14 - Verificação de um Número Primo'}
                instrucoes={'Implementar um programa em Javascript que verifique se um número é primo. O início da sequência dos números primos são: P = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ... * Um número primo é aquele que só é divisível por 1 e por ele mesmo. * Um número A é divisível por outro B, quando o resto de A/B é igual a zero. * Os números 0 e 1 não são primos.'}/>

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