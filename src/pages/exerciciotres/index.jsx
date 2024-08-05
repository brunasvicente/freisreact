import './index.scss';
import { Link } from 'react-router-dom';

export default function Exerciciotres() {
    return (
        <div className='pagina-exerciciotres'>
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

                    <h1>Exercício 03 - Valor total por quantidade</h1>
                </div>

                <div className='parte-faixa'></div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
                </div>

                <div className='parte-usuario'>
                    <div className='card'>
                    <div className='sub-usuario1'>
                        <p className='p-um'>Quantidade pequeno</p>
                        <input className='input-um' type="text"/>
                    </div>

                    <div className='sub-usuario2'>
                        <p className='p-dois'>Quantidade médio</p>
                        <input className='input-dois' type="text"/>
                    </div>

                    <div className='sub-usuario3'>
                        <p className='p-tres'>Quantidade grande</p>
                        <input className='input-tres' type="text"/>
                    </div>
                    </div>

                    <a className='botao'>Executar</a>

                </div>

                <p className='p-final'>Resultado: O total é R$ </p>

            </main>
        </div>
    )
}