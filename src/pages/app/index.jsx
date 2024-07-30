import './index.scss';

export default function App() {
  return (
    <div className="pagina-app">
      <header className='navegacao'>
        <div className='um'>
          <img src="/assets/images/frei.png" alt="Logo Frei" />
          <h1>React FreiS</h1>
        </div>

        <div className='dois'>
          <a className='inicio' href="">Início</a>
          <a className='sobre' href="">Sobre</a>
        </div>
      </header>


      <main>
          <h1>Escolha um treino...</h1>

          <div className='cartoes'>
            <div className='cartao-um'>
              <a className='cubo-amarelo' href=""></a>

              <p>Cupom de desconto</p>
              <a className='' href="">Exercício 1</a>
            </div>

            <div className='cartao-dois'>
              <a className='cubo-verde' href=""></a>

              <p>Converter Kg/gramas</p>
              <a href="">Exercício 2</a>
            </div>

            <div className='cartao-tres'>
              <a className='cubo-azul' href=""></a>

              <p>Valor total por quantidade</p>
              <a href="">Exercício 3</a>
            </div>
          </div>
        </main>

    </div>
  );
}