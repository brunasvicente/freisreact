import './index.scss';
import { Link } from 'react-router-dom';
import { Cabecalho } from '../../components/cabecalho';
import { useState } from 'react';

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

                <div className='parte-titulo'>
                    <Link to='/'>
                        <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                    </Link>
                    
                    <h1>Exercício 06 - Calcular o Salário Líquido</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript para <b>calcular o salário líquido</b> de um funcionário, a partir do seu salário base, do bônus mensal em porcentageme e do total de descontos em reais.</p>
                </div>

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