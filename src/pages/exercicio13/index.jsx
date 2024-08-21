import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Exerciciotreze() {
    const [numero, setNumero] = useState(0)
    const [somaPositivos, setSomaPositivos] = useState(0)
    const [qntNegativos, setQntNegativos] = useState(0)
    const [resultado, setResultado] = useState('')

    function leitura () {
        if (numero > 0) {
            setSomaPositivos( Number(somaPositivos) + Number(numero) )
        } if (numero < 0) {
            setQntNegativos( Number(qntNegativos) +1 )
        } if (numero == 0) {
            setResultado(`A soma dos números positivos é ${somaPositivos}.
            A quantidade de números negativos é ${qntNegativos}.`)
        }
    }

    return (
        <div className='pagina-exerciciotreze'>
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

                    <h1>Exercício 13 - Leitor de Valores Inteiros do Usuário</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript que leia valores inteiros do usuário. Os valores devem ser pedidos ao usuário <b>até que o usuário digite o número 0</b>. Em seguida, o <b>programa deve</b> exibir a soma dos números positivos e a quantidade de números negativos.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o Valor</p>
                    <input className='input-um' type="text" value={numero} onChange={a => setNumero(a.target.value)}/>

                    <a className='botao' onClick={leitura}>Executar</a>
                </div>

                <p className='p-final'> {resultado} </p>

            </main>
        </div>
    )
}