import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho';

export default function Exerciciotres() {
    const [qntPequeno, setQntPequeno] = useState(0)
    const [qntMedio, setQntMedio] = useState(0)
    const [qntGrande, setQntGrande] = useState(0)
    const [valorFinal, setValorFinal] = useState(0)

    function alterarValorPequeno(a) {
        let novoValor = a.target.value
        setQntPequeno(novoValor)
    }

    function alterarValorMedio(a) {
        let novoValor = a.target.value
        setQntMedio(novoValor)
    }

    function alterarValorGrande(a) {
        let novoValor = a.target.value
        setQntGrande(novoValor)
    }

    function calcularValor() {
        let resultado = (qntPequeno * 13.50) + (qntMedio * 15.00) + (qntGrande * 17.50)
        setValorFinal(resultado)
    }

    return (
        <div className='pagina-exerciciotres'>
            <Cabecalho/>

            <main>

                <div className='parte-titulo'>
                    <Link to='/'>
                        <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                    </Link>

                    <h1>Exercício 03 - Valor total por quantidade</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
                </div>

                <div className='parte-usuario'>

                    <div className='card'>
                        <div className='sub-usuario1'>
                            <p className='p-um'>Quantidade pequeno</p>
                            <input className='input-um' type="text" value={qntPequeno} onChange={alterarValorPequeno}/>
                        </div>

                        <div className='sub-usuario2'>
                            <p className='p-dois'>Quantidade médio</p>
                            <input className='input-dois' type="text" value={qntMedio} onChange={alterarValorMedio}/>
                        </div>

                        <div className='sub-usuario3'>
                            <p className='p-tres'>Quantidade grande</p>
                            <input className='input-tres' type="text" value={qntGrande} onChange={alterarValorGrande}/>
                        </div>
                    </div>

                    <a className='botao' onClick={calcularValor}>Executar</a>

                </div>

                <p className='p-final'>Resultado: O total é R$ {valorFinal.toFixed(2)}</p>

            </main>
            
        </div>
    )
}