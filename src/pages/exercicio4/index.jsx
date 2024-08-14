import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicioquatro() {
    const [nomeLivro, setNomeLivro] = useState('')
    const [paginas, setPaginas] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [horas, setHoras] = useState(0)

    function calcular () {
        let qntS = paginas * segundos
        let qntH = qntS /3600
        setHoras(qntH) 
    }


    return (
        <div className='pagina-exercicioquatro'>

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
                    
                    <h1>Exercício 04 - Tempo de Leitura</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript que <b>calcule</b> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o nome do livro</p>
                    <input className='input-um' type="text" value={nomeLivro} onChange={a => setNomeLivro(a.target.value)}/>

                    <p className='p-dois'>Informe o total de páginas</p>
                    <input className='input-dois' type="text" value={paginas} onChange={a => setPaginas(a.target.value)}/>

                    <p className='p-dois'>Tempo em segundos de leitura por página</p>
                    <input className='input-dois' type="text" value={segundos} onChange={a => setSegundos(a.target.value)}/>

                    <a className='botao' onClick={calcular}>Executar</a>
                </div>

                <p className='p-final'>Você lerá {nomeLivro} em {horas.toFixed(2)} horas</p>

            </main>

        </div>
    )
}