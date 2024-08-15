import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Sobre from './pages/sobre';
import Exercicio1 from './pages/exercicio1';
import Exercicio2 from './pages/exercicio2';
import Exercicio3 from './pages/exercicio3';
import Exercicio4 from './pages/exercicio4';
import Exercicio5 from './pages/exercicio5';
import Exercicio6 from './pages/exercicio6';
import Exercicio7 from './pages/exercicio7';
import Exercicio8 from './pages/exercicio8';
import Exercicio9 from './pages/exercicio9';
import Exercicio10 from './pages/exercicio10';
import Exercicio11 from './pages/exercicio11';
import Exercicio12 from './pages/exercicio12';
import Exercicio13 from './pages/exercicio13';

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
            <Route path='/exercicio7' element={ <Exercicio7/> }/>
            <Route path='/exercicio8' element={ <Exercicio8/> }/>
            <Route path='/exercicio9' element={ <Exercicio9/> }/>
            <Route path='/exercicio10' element={ <Exercicio10/> }/>
            <Route path='/exercicio11' element={ <Exercicio11/> }/>
            <Route path='/exercicio12' element={ <Exercicio12/> }/>
            <Route path='/exercicio13' element={ <Exercicio13/> }/>
          </Routes>
        </BrowserRouter>     
    )
}