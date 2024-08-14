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

              <Link to='/exercicio1'>
                <a className='exercicio-um'>Exercício 1</a>
              </Link>
            </div>

            <div className='cartao-dois'>
              <a className='cubo-verde'></a>

              <p>Converter Kg/gramas</p>

              <Link to='/exercicio2'>
                <a className='exercicio-dois'>Exercício 2</a>
              </Link>
            </div>

            <div className='cartao-tres'>
              <a className='cubo-azul'></a>

              <p>Valor total por quantidade</p>

              <Link to='/exercicio3'>
                <a className='exercicio-tres'>Exercício 3</a>
              </Link>
            </div>

            <div className='cartao-quatro'>
              <a className='cubo-vermelho'></a>

              <p>Tempo de Leitura Livro</p>

              <Link to='/exercicio4'>
                <a className='exercicio-quatro'>Exercício 4</a>
              </Link>
            </div>

            <div className='cartao-cinco'>
              <a className='cubo-roxo'></a>

              <p>Verificação de Aluno</p>

              <Link to='/exercicio5'>
                <a className='exercicio-cinco'>Exercício 5</a>
              </Link>
            </div>

            <div className='cartao-seis'>
              <a className='cubo-cinza'></a>

              <p>Calcular Salário Líquido</p>

              <Link to='/exercicio6'>
                <a className='exercicio-seis'>Exercício 6</a>
              </Link>
            </div>

            <div className='cartao-sete'>
              <a className='cubo-laranja'></a>

              <p>Verificar Cores Primárias</p>

              <Link to='/exercicio7'>
                <a className='exercicio-sete'>Exercício 7</a>
              </Link>
            </div>

            <div className='cartao-oito'>
              <a className='cubo-rosa'></a>

              <p>Situação da Temperatura</p>

              <Link to='/exercicio8'>
                <a className='exercicio-oito'>Exercício 8</a>
              </Link>
            </div>

            <div className='cartao-nove'>
              <a className='cubo-marrom'></a>

              <p>Compra na sorveteria</p>

              <Link to='/exercicio9'>
                <a className='exercicio-nove'>Exercício 9</a>
              </Link>
            </div>

            <div className='cartao-dez'>
              <a className='cubo-ciano'></a>

              <p>Índice de Massa Corporal</p>

              <Link to='/exercicio10'>
                <a className='exercicio-dez'>Exercício 10</a>
              </Link>
            </div>

            <div className='cartao-onze'>
              <a className='cubo-bege'></a>

              <p>Um número, uma Tabuada</p>

              <Link to='/exercicio11'>
                <a className='exercicio-onze'>Exercício 11</a>
              </Link>
            </div>

            
          </div>
        </main>

    </div>
  );
}