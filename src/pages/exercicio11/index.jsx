import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exerciciodois() {
    const [tabuada, setTabuada] = useState([])
    const [numero, setNumero] = useState(0)

    function t () {
        let novaTabuada = []

        for (let i = 0; i <= 10; i++){
            let resultado = numero * i 
            novaTabuada.push(`${numero} X ${i} = ${resultado}`)
        }

        setTabuada(novaTabuada)
    }

    return (
        <div className='pagina-exercicioonze'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 11 - Tabuada'}
                instrucoes={'Implemente um programa em JavaScript que escreva no terminal a tabuada de um número informado pelo usuário. A mensagem deve estar no formato: "A x B = X".'}/>

                <div className='parte-usuario'>
                    <p className='p-um'>Número da tabuada</p>
                    <input className='input-um' type="text" value={numero} onChange={a => setNumero(a.target.value)}/>

                    <a className='botao' onClick={t}>Executar</a>
                </div>

                <ul className='p-final'>
                    {tabuada.map ((item, pos) =>
                    <li key={pos}>{item}</li>)}
                </ul>
            </main>
        </div>
    )
}