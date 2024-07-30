import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app">
      
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
          <h1>Escolha um treino...</h1>

          <div className='cartoes'>
            <div className='cartao-um'>
              <a className='cubo-amarelo'></a>

              <p>Cupom de desconto</p>

              <Link to='/exercicioum'>
                <a className='exercicio-um'>Exercício 1</a>
              </Link>
            </div>

            <div className='cartao-dois'>
              <a className='cubo-verde'></a>

              <p>Converter Kg/gramas</p>

              <Link to='/exerciciodois'>
                <a className='exercicio-dois'>Exercício 2</a>
              </Link>
            </div>

            <div className='cartao-tres'>
              <a className='cubo-azul'></a>

              <p>Valor total por quantidade</p>

              <Link to='/exerciciotres'>
                <a className='exercicio-tres'>Exercício 3</a>
              </Link>
            </div>
          </div>
        </main>

    </div>
  );
}