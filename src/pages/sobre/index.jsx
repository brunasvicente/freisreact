import './index.scss'
import { Link } from 'react-router-dom'

export default function Sobre() {
    return(
        <div className='pagina-sobre'>

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
                <h1 className='titulo'>Sobre</h1>

                <h1 className='texto'>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a <br/> aprimorar suas habilidades em Node.js e lógica de programação de forma prática e <br/> envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o <br/> aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa <br/> praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo <br/> que você avance no seu próprio ritmo e de acordo com suas necessidades.</h1>

                <h1 className='texto' id='texto'>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.</h1>

                <h1 className='texto'>Estamos ansiosos para ver seu progresso e sucesso!</h1>

                <img src="/assets/images/frei.png" alt="Logo Frei" />
            </main>

        </div>
    )
}