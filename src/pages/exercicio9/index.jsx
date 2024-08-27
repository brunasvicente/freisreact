import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exercicionove() {
    const [gramas, setGramas] = useState(0)
    const [total, setTotal] = useState(0)

    function calcular () {
        let q = gramas /100
        let resultado = 0

        if (gramas < 1000) {
            resultado = q *3.50
        } if (gramas >= 1000) {
            resultado = q *3.00
        }

        setTotal(resultado)
    }

    return (
        <div className='pagina-exercicionove'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 09 - Compra na Sorveteria'}
                instrucoes={'Implementar um programa em Javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de <b>100 g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos. Se o total de gramas for menor ou igual a zero, enviar mensagem "Peso Inválido.'}/>

                <div className='parte-titulo'>
                    <Link to='/'>
                        <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                    </Link>

                    <h1>Exercício 09 - Compra na sorveteria</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript que <b>calcule o total</b> a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de <b>100 g é R$ 3,50</b> mas se o total de gramas for a partir de 1kg, o preço das 100g <b>diminui</b> 50 centavos. Se o total de gramas for menor ou igual a zero, enviar mensagem <b>"Peso Inválido</b>.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Quantidade de gramas comprado</p>
                    <input className='input-um' type="text" value={gramas} onChange={a => setGramas(a.target.value)}/>

                    <a className='botao' onClick={calcular}>Executar</a>
                </div>

                <p className='p-final'>O total à pagar é R$ {total.toFixed(2)}</p>

            </main>
        </div>
    )
}