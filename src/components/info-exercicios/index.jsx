import './index.scss';
import { Link } from 'react-router-dom';

export function Infoexercicios(props) {
    return (
        <div className='informacoes'>

            <div className='parte-titulo'>
                <Link to='/'>
                    <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                </Link>

                <h1>{props.titulo}</h1>
            </div>

            <div className='parte-faixa'></div>

            <div className='parte-javascript'>
                <p>{props.instrucoes}</p>
            </div>

        </div>
    )
}