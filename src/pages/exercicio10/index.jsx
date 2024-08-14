import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exerciciodez() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)
    const [clas, setClas] = useState('')

    function calcularImc () {
        let i = peso / (altura * altura)
        let situacao = ''
        setImc(i)

        if (i < 18.5) {
            situacao = 'Sua classificação é: Abaixo do Peso'
        } if (i >= 18.5 && i < 25) {
            situacao = 'Sua classificação é: Peso Normal'
        } if (i >= 25 && i < 30) {
            situacao = 'Sua classificação é: Sobrepeso'
        } if (i >= 30 && i < 35) {
            situacao = 'Sua classificação é: Obesidade Grau I'
        } if (i >= 35 && i < 40) {
            situacao = 'Sua classificação é: Obedidade Grau II'
        } if (i >= 40) {
            situacao = 'Sua classificação é: Obesidade Grau III'
        }

        setClas(situacao)
    }


    return (
        <div className='pagina-exerciciodez'>

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
                    
                    <h1>Exercício 10 - Cálculo de IMC</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implemente um programa em JavaScript que a partir da altura e do pes de uma pessoa, <b>calcule o IMC</b> e avalie a faixa correspondente a tabela. Ao final, apresente o IMC e a situação.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe a altura</p>
                    <input className='input-um' type="text" value={altura} onChange={a => setAltura(a.target.value)}/>

                    <p className='p-dois'>Informe o peso</p>
                    <input className='input-dois' type="text" value={peso} onChange={a => setPeso(a.target.value)}/>

                    <a className='botao' onClick={calcularImc}>Executar</a>
                </div>

                <p className='p-final'>Seu IMC é {imc.toFixed(2)} <br /> {clas}</p>

            </main>

        </div>
    )
}