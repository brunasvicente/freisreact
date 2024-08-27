import './index.scss';
import { Link } from 'react-router-dom';


export function Cabecalho () {
    return (
        <header>
        <div className='um'>
          <img src="/assets/images/frei.png" alt="Logo Frei" />
          <h1>React FreiS</h1>
        </div>

        <div className='dois'>
          <Link to='/'>
            <a className='inicio'>Início</a>
          </Link>

          <Link to='/sobre'>
            <a className='/pages/sobre'>Sobre</a>
          </Link>
        </div>
      </header>
    )
}