import './index.scss';
import { Link } from 'react-router-dom';

export function Cartoes(props) {
    function cores() {
        if (props.exercicio == 'Exercício 1') return 'cubo-amarelo'
        if (props.exercicio == 'Exercício 2') return 'cubo-verde'
        if (props.exercicio == 'Exercício 3') return 'cubo-azul'
        if (props.exercicio == 'Exercício 4') return 'cubo-vermelho'
        if (props.exercicio == 'Exercício 5') return 'cubo-roxo'
        if (props.exercicio == 'Exercício 6') return 'cubo-cinza'
        if (props.exercicio == 'Exercício 7') return 'cubo-laranja'
        if (props.exercicio == 'Exercício 8') return 'cubo-rosa'
        if (props.exercicio == 'Exercício 9') return 'cubo-marrom'
        if (props.exercicio == 'Exercício 10') return 'cubo-ciano'
        if (props.exercicio == 'Exercício 11') return 'cubo-bege'
        if (props.exercicio == 'Exercício 12') return 'cubo-preto'
        if (props.exercicio == 'Exercício 13') return 'cubo-vinho'
        if (props.exercicio == 'Exercício 14') return 'cubo-azulescuro'
        if (props.exercicio == 'Exercício 15') return 'cubo-rosinha'
        if (props.exercicio == 'Exercício 16') return 'cubo-violeta'
        if (props.exercicio == 'Exercício 17') return 'cubo-rosachoque'
        if (props.exercicio == 'Exercício 18') return 'cubo-vermelhoclaro'
    }

    return (
        <div className='cartao'>
            <a className={'cubo ' + cores()}></a>

            <p>{props.titulo}</p>

            <Link to={props.destino}>
                <a className='exercicio'>{props.exercicio}</a>
            </Link>
        </div>
    )
}