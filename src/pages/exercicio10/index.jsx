import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


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
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 10 - Cálculo de IMC'}
                instrucoes={'Implemente um programa em JavaScript que a partir da altura e do pes de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela. Ao final, apresente o IMC e a situação.'}/>

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