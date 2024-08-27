import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exercicioum() {
    const [valorPedido, setValorPedido] = useState(0)
    const [valorCupom, setValorCupom] = useState(0)
    const [resultado, setResultado] = useState('')

    function executar() {
        let resultado = Number(valorPedido) - Number(valorCupom)
        setResultado(`Resultado: O total é R$ ${resultado.toFixed(2)}`)
    }

    return (
        <div className='pagina-exercicioum'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 01 - Cupom de Desconto'}
                instrucoes={'Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto'}/>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o valor do pedido</p>
                    <input className='input-um' type="text" value={valorPedido} onChange={a => setValorPedido(a.target.value)}/>

                    <p className='p-dois'>Informe o valor do cupom</p>
                    <input className='input-dois' type="text" value={valorCupom} onChange={a => setValorCupom(a.target.value)}/>

                    <a className='botao' onClick={executar}>Executar</a>
                </div>

                <p className='p-final'>{resultado}</p>

            </main>

        </div>
    )
}