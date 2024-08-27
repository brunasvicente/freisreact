import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exerciciodois() {
    const [valorGramas, setValorGramas] = useState(0)
    const [resultado, setResultado] = useState('')

    function converterGramas() {
        let valorFinal = Number(valorGramas) * 1000
        setResultado(`O total é ${valorFinal} gramas`)
    }

    return (
        <div className='pagina-exerciciodois'>
            <Cabecalho/>

            <main>

                <Infoexercicios titulo={'Exercício 02 - Converter Kg/gramas'}
                instrucoes={'Implementar um programa em Javascript para converter kilos em gramas.'}/>

                <div className='parte-usuario'>
                    <p className='p-um'>Valor em gramas</p>
                    <input className='input-um' type="text" value={valorGramas} onChange={a => setValorGramas(a.target.value)}/>

                    <a className='botao' onClick={converterGramas}>Executar</a>
                </div>

                <p className='p-final'>{resultado}</p>

            </main>
        </div>
    )
}