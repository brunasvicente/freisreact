import './index.scss';
import { useState } from 'react';

//Componentes
import { Cabecalho } from '../../components/cabecalho';
import { Infoexercicios } from '../../components/info-exercicios';


export default function Exercicioquatro() {
    const [nomeLivro, setNomeLivro] = useState('')
    const [paginas, setPaginas] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [resultado, setResultado] = useState('')

    function calcular () {
        let qntS = paginas * segundos
        let qntH = qntS /3600
        setResultado(`Você lerá ${nomeLivro} em ${qntH.toFixed(2)} horas`)
    }

    return (
        <div className='pagina-exercicioquatro'>
            <Cabecalho/>

            <main>
                <Infoexercicios titulo={'Exercício 04 - Tempo de Leitura'}
                instrucoes={'Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.'}/>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o nome do livro</p>
                    <input className='input-um' type="text" value={nomeLivro} onChange={a => setNomeLivro(a.target.value)}/>

                    <p className='p-dois'>Informe o total de páginas</p>
                    <input className='input-dois' type="text" value={paginas} onChange={a => setPaginas(a.target.value)}/>

                    <p className='p-dois'>Tempo em segundos de leitura por página</p>
                    <input className='input-dois' type="text" value={segundos} onChange={a => setSegundos(a.target.value)}/>

                    <a className='botao' onClick={calcular}>Executar</a>
                </div>

                <p className='p-final'>{resultado}</p>
            </main>

        </div>
    )
}