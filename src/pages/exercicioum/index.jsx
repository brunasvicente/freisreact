import './index.scss';
import { Link } from 'react-router-dom';

export default function Exercicioum() {
    return (
        <div className='pagina-exercicioum'>

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
                    
                    <h1>Exercício 01 - Cupom de desconto</h1>
                </div>

                <div className='parte-javascript'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá <br/> de desconto.</p>
                </div>

                <div className='parte-usuario'>
                    <p className='p-um'>Informe o valor do pedido</p>
                    <input className='input-um' type="text"/>

                    <p className='p-dois'>Informe o valor do cupom</p>
                    <input className='input-dois' type="text" />

                    <a className='botao'>Executar</a>
                </div>

                <p className='p-final'>Resultado: O total é R$ 0,00</p>
            </main>

        </div>
    )
}