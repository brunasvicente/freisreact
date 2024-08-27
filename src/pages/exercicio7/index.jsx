import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exerciciosete() {
    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [primaria, setPrimaria] = useState('')

    function test() {
        setPrimaria('')

        if ((cor1 == 'azul' || cor1 == 'vermelho' || cor1 ==  'amarelo') && (cor2 == 'azul' || cor2 == 'vermelho' || cor2 == 'amarelo')) {
            setPrimaria(true)
        }
        
        else if ((cor1 !== 'azul' || cor1 !== 'vermelho' || cor1 !==  'amarelo') && (cor2 !== 'azul' || cor2 !== 'vermelho' || cor2 !== 'amarelo')) {
            setPrimaria(false)
        }
    }

    return (
        <div className='pagina-exerciciosete'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 07 - Cores Primárias'}
                instrucoes={'Implementar um programa em JavaScript para verificar se duas cores são primárias.'}/>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o nome da primeira cor</p>
                    <input className='input-um' type="text" value={cor1} onChange={a => setCor1(a.target.value)}/>

                    <p className='p-dois'>Informe o nome da segunda cor</p>
                    <input className='input-dois' type="text" value={cor2} onChange={a => setCor2(a.target.value)}/>

                    <a className='botao' onClick={test}>Executar</a>
                </div>

                <p className='p-final'>As duas cores são primárias? {primaria ? 'Sim' : 'Não'}</p>
            </main>

        </div>
    )
}