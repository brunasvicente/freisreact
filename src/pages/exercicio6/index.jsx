import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exercicioseis() {
    const [salarioBase, setSalarioBase] = useState(0)
    const [bonusMensal, setBonusMensal] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [total, setTotal] = useState(0)

    function calcular () {
        let porcentagem = Number(salarioBase) / Number(bonusMensal)
        let salario = Number(salarioBase) + Number(porcentagem) - Number(desconto)
        setTotal(salario)
    }

    return (
        <div className='pagina-exercicioseis'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 06 - Calcular o Salário Líquido'}
                instrucoes={'Implementar um programa em Javascript para calcular o salário líquido de um funcionário, a partir do seu salário base, do bônus mensal em porcentageme e do total de descontos em reais.'}/>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o valor do salário base</p>
                    <input className='input-um' type="text" value={salarioBase} onChange={a => setSalarioBase(a.target.value)}/>

                    <p className='p-dois'>Informe o valor do bônus mensal</p>
                    <input className='input-dois' type="text" value={bonusMensal} onChange={a => setBonusMensal(a.target.value)}/>

                    <p className='p-dois'>Informe o total de desconto</p>
                    <input className='input-dois' type="text" value={desconto} onChange={a => setDesconto(a.target.value)}/>

                    <a className='botao' onClick={calcular}>Executar</a>
                </div>

                <p className='p-final'>Seu salário líquido é de R$ {total.toFixed(2)}</p>
            </main>

        </div>
    )
}