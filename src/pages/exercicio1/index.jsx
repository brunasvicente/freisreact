import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho';

export default function Exercicioum() {
    const [valorPedido, setValorPedido] = useState(0)
    const [valorCupom, setValorCupom] = useState(0)
    const [valorFinal, setValorFinal] = useState(0)

    function alterarValorPedido(a) {
        let novoValor = a.target.value
        setValorPedido(novoValor)
    }

    function alterarValorCupom(a) {
        let novoValor = a.target.value
        setValorCupom(novoValor)
    }

    function executar() {
        let resultado = Number(valorPedido) - Number(valorCupom)
        setValorFinal(resultado)
    }

    return (
        <div className='pagina-exercicioum'>
            <Cabecalho/>

            <main>

                <div className='parte-titulo'>
                    <Link to='/'>
                        <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                    </Link>
                    
                    <h1>Exercício 01 - Cupom de desconto</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá <br/> de desconto.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o valor do pedido</p>
                    <input className='input-um' type="text" value={valorPedido} onChange={alterarValorPedido}/>

                    <p className='p-dois'>Informe o valor do cupom</p>
                    <input className='input-dois' type="text" value={valorCupom} onChange={alterarValorCupom}/>

                    <a className='botao' onClick={executar}>Executar</a>
                </div>

                <p className='p-final'>Resultado: O total é R$ {valorFinal.toFixed(2)}</p>

            </main>

        </div>
    )
}