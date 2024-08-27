import './index.scss';

export function Cartoes(props) {
    return (
        <div className='cartoes'>
            <div className='cartao'>
                <a className='cubo'></a>

                <p>{props.titulo}</p>

                <Link to='/exercicio1'>
                    <a className='exercicio'>{props.exercicio}</a>
                </Link>
            </div>
        </div>
    )
}