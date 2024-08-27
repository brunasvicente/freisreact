import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exerciciooito() {
    const [temperatura, setTemperatura] = useState(0)
    const [resultado, setResultado] = useState('')

    function sitTemperatura () {
        let situacao = ''

        if (temperatura < 36) {
            situacao = 'Hipotermia'
        } else if (temperatura >= 36 && temperatura < 36.9) {
            situacao = 'Normal'
        } else if (temperatura >= 37.6 && temperatura < 39.6) {
            situacao = 'Febre'
        } else if (temperatura >= 39.6 && temperatura < 41){
            situacao = 'Febre Alta'
        } else {
            situacao = 'Hipertermia'
        }

        if (temperatura == 0) {
            setResultado('Informe a temperatura')
        } else {
            setResultado(`A situação da temperatura é ${situacao}`)
        }
    }

    return (
        <div className='pagina-exerciciooito'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 08 - Situação a partir da temperatura'}
                instrucoes={'Implementar um programa em Javascript que, a partir da temperatura, avalie a situação da pessoa conforme a tabela ao lado. Ao final, apresente a classificação.'}/>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe a temperatura</p>
                    <input className='input-um' type="text" value={temperatura} onChange={a => setTemperatura(a.target.value)}/>

                    <a className='botao' onClick={sitTemperatura}>Executar</a>
                </div>

                <p className='p-final'>{resultado}</p>
            </main>
        </div>
    )
}