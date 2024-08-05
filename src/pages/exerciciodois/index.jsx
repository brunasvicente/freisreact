import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Exerciciodois() {
    const [valorGramas, setValorGramas] = useState(0)
    const [valorKilo, setValorKilo] = useState(0)

    function alterarValor(a) {
        let novoValor = a.target.value
        setValorGramas(novoValor)
    }

    function converterGramas(a) {
        let valorFinal = Number(valorGramas) / 1000
        setValorKilo(valorFinal)
    }

    return (
        <div className='pagina-exerciciodois'>
            <header className='navegacao'>
                <div className='um'>
                    <img src="/assets/images/frei.png" alt="Logo Frei" />
                    <h1>React FreiS</h1>
                </div>

                <div className='dois'>
                    <Link to='/'>
                        <a className='inicio'>Início</a>
                    </Link>

                    <Link to='/sobre'>
                        <a className='sobre'>Sobre</a>
                    </Link>
                </div>
            </header>


            <main>

                <div className='parte-titulo'>
                    <Link to='/'>
                        <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                    </Link>

                    <h1>Exercício 02 - Converter Kg/gramas</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Valor em gramas</p>
                    <input className='input-um' type="text" value={valorGramas} onChange={alterarValor}/>

                    <a className='botao' onClick={converterGramas}>Executar</a>
                </div>

                <p className='p-final'>Resultado: O total é R$ {valorKilo}</p>

            </main>
        </div>
    )
}