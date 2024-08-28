import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exercicioquinze() {

    return (
        <div className='pagina-exercicioquinze'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 15 - Informações do duelo'}
                instrucoes={'Implementar um programa em Javascript que leia o nome, a idade e o sexo de várias pessoas. O programa vai perguntar se o usuário quer ou não continuar. No final, mostre: a. O nome da pessoa mais velha b. O nome da mulher mais jovem c. A média de idade do grupo d. Quantos homens tem mais de 30 anos e Quantas mulheres tem menos de 18 anos'}/>

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