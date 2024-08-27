import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exerciciotres() {
    const [qntPequeno, setQntPequeno] = useState(0)
    const [qntMedio, setQntMedio] = useState(0)
    const [qntGrande, setQntGrande] = useState(0)
    const [valorFinal, setValorFinal] = useState('')

    function calcularValor() {
        let resultado = (qntPequeno * 13.50) + (qntMedio * 15.00) + (qntGrande * 17.50)
        setValorFinal(`Resultado: O total é R$ ${resultado.toFixed(2)}`)
    }

    return (
        <div className='pagina-exerciciotres'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 03 - Valor total por quantidade'}
                instrucoes={'Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente'}/>

                <div className='parte-usuario'>

                    <div className='card'>
                        <div className='sub-usuario1'>
                            <p className='p-um'>Quantidade pequeno</p>
                            <input className='input-um' type="text" value={qntPequeno} onChange={a => setQntPequeno(a.target.value)}/>
                        </div>

                        <div className='sub-usuario2'>
                            <p className='p-dois'>Quantidade médio</p>
                            <input className='input-dois' type="text" value={qntMedio} onChange={a => setQntMedio(a.target.value)}/>
                        </div>

                        <div className='sub-usuario3'>
                            <p className='p-tres'>Quantidade grande</p>
                            <input className='input-tres' type="text" value={qntGrande} onChange={a => setQntGrande(a.target.value)}/>
                        </div>
                    </div>

                    <a className='botao' onClick={calcularValor}>Executar</a>

                </div>

                <p className='p-final'>{valorFinal}</p>
            </main>
            
        </div>
    )
}