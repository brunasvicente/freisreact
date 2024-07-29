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
            </div>

            <div className='cartao-dois'>
            </div>

            <div className='cartao-tres'>
            </div>
          </div>
        </main>

    </div>
  );
}