import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exerciciosete() {
    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [primaria, setPrimaria] = useState('')

    function test() {
        setPrimaria('')

        if ((cor1 == 'azul' || cor1 == 'vermelho' || cor1 ==  'amarelo') && (cor2 == 'azul' || cor2 == 'vermelho' || cor2 == 'amarelo')) {
            setPrimaria(true)
        }
        
        else if ((cor1 !== 'azul' || cor1 !== 'vermelho' || cor1 !==  'amarelo') && (cor2 !== 'azul' || cor2 !== 'vermelho' || cor2 !== 'amarelo')) {
            setPrimaria(false)
        }
    }


    return (
        <div className='pagina-exerciciosete'>

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
                    
                    <h1>Exercício 07 - Cores Primárias</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em JavaScript para <b>verificar</b> se duas cores são primárias.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o nome da primeira cor</p>
                    <input className='input-um' type="text" value={cor1} onChange={a => setCor1(a.target.value)}/>

                    <p className='p-dois'>Informe o nome da segunda cor</p>
                    <input className='input-dois' type="text" value={cor2} onChange={a => setCor2(a.target.value)}/>

                    <a className='botao' onClick={test}>Executar</a>
                </div>

                <p className='p-final'>As duas cores são primárias? {primaria ? 'Sim' : 'Não'}</p>

            </main>

        </div>
    )
}