import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Sobre from './pages/sobre';
import Exercicio1 from './pages/exercicio1';
import Exercicio2 from './pages/exercicio2';
import Exercicio3 from './pages/exercicio3';
import Exercicio4 from './pages/exercicio4';
import Exercicio5 from './pages/exercicio5';
import Exercicio6 from './pages/exercicio6';

export default function Navegacao() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <App/> }/>
            <Route path='/sobre' element={ <Sobre/> }/>
            <Route path='/exercicio1' element={ <Exercicio1/> }/>
            <Route path='/exercicio2' element={ <Exercicio2/> }/>
            <Route path='/exercicio3' element={ <Exercicio3/> }/>
            <Route path='/exercicio4' element={ <Exercicio4/> }/>
            <Route path='/exercicio5' element={ <Exercicio5/> }/>
            <Route path='/exercicio6' element={ <Exercicio6/> }/>
          </Routes>
        </BrowserRouter>     
    )
}