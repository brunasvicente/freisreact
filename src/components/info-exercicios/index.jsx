import './index.scss';
import { Link } from 'react-router-dom';

export function Infoexercicios(props) {
    function cores() {
        if (props.exercicio == 'Exercício 1') return 'faixa-amarelo'
        if (props.exercicio == 'Exercício 2') return 'faixa-verde'
        if (props.exercicio == 'Exercício 3') return 'faixa-azul'
        if (props.exercicio == 'Exercício 4') return 'faixa-vermelho'
        if (props.exercicio == 'Exercício 5') return 'faixa-roxo'
        if (props.exercicio == 'Exercício 6') return 'faixa-cinza'
        if (props.exercicio == 'Exercício 7') return 'faixa-laranja'
        if (props.exercicio == 'Exercício 8') return 'faixa-rosa'
        if (props.exercicio == 'Exercício 9') return 'faixa-marrom'
        if (props.exercicio == 'Exercício 10') return 'faixa-ciano'
        if (props.exercicio == 'Exercício 11') return 'faixa-bege'
        if (props.exercicio == 'Exercício 12') return 'faixa-preto'
        if (props.exercicio == 'Exercício 13') return 'faixa-vinho'
    }

    return (
        <div className='informacoes'>

            <div className='parte-titulo'>
                <Link to='/'>
                    <img src="/assets/images/setinha.png" alt="Seta apontando para a esquerda" />
                </Link>

                <h1>{props.titulo}</h1>
            </div>

            <div className={'parte-faixa ' + cores()}></div>

            <div className='parte-javascript'>
                <p>{props.instrucoes}</p>
            </div>

        </div>
    )
}