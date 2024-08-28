import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


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
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 13 - Leitor de Valores Inteiros do Usuário'}
                instrucoes={'Implementar um programa em Javascript que leia valores inteiros do usuário. Os valores devem ser pedidos ao usuário até que o usuário digite o número 0. Em seguida, o programa deve exibir a soma dos números positivos e a quantidade de números negativos.'}/>

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