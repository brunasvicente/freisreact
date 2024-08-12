import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exerciciocinco() {
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [media, setMedia] = useState(0)
    const [passou, setPassou] = useState(false)

    function med () {
        let m = (Number(nota1) + Number(nota2) + Number(nota3)) /3
        setMedia(m)

        if (m > 6) {
            setPassou(true)
        }
    }


    return (
        <div className='pagina-exerciciocinco'>

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
                    
                    <h1>Exercício 05 - Verificação Aluno</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript para <b>verificar</b> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
                </div>

                <div className='parte-usuario'>

                    <div className='card'>
                        <div className='sub-usuario1'>
                            <p className='p-um'>Primeira Nota</p>
                            <input className='input-um' type="text" value={nota1} onChange={a => setNota1(a.target.value)}/>
                        </div>

                        <div className='sub-usuario2'>
                            <p className='p-dois'>Segunda Nota</p>
                            <input className='input-dois' type="text" value={nota2} onChange={a => setNota2(a.target.value)}/>
                        </div>

                        <div className='sub-usuario3'>
                            <p className='p-tres'>Terceira Nota</p>
                            <input className='input-tres' type="text" value={nota3} onChange={a => setNota3(a.target.value)}/>
                        </div>
                    </div>

                    <a className='botao' onClick={med}>Executar</a>

                </div>

                <p className='p-final'>A média do aluno é {media.toFixed(2)} <br />
                O aluno passou? {passou ? 'Sim' : 'Não'}</p>

            </main>

        </div>
    )
}