import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exerciciodoze() {
    const [nota, setNota] = useState(0)
    const [resultado, setResultado] = useState('')
    const [vetor, setVetor] = useState([])

    return (
        <div className='pagina-exerciciodoze'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 12 - Calculadora para Média de 3 Notas (Complexo)'}
                instrucoes={'Implementar um programa em Javascript que calcule a média de três notas informadas pelo usuário. O programa deve garantir que enquanto o usuário não informar uma nota válida, uma mensagem seja enviada informando o intervalo válido e solicitando a nota novamente.'}/>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe a nota:</p>
                    <input className='input-um' type="text" value={nota} onChange={a => setNota(a.target.value)}/>

                    <a className='botao'>Executar</a>
                </div>

                <p className='p-final'></p>
            </main>
        </div>
    )
}