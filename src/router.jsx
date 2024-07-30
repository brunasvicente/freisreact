import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Sobre from './pages/sobre';
import Exercicioum from './pages/exercicioum';
import Exerciciodois from './pages/exerciciodois';
import Exerciciotres from './pages/exerciciotres';

export default function Navegacao() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <App/> }/>
            <Route path='/sobre' element={ <Sobre/> }/>
            <Route path='/exercicioum' element={ <Exercicioum/> }/>
            <Route path='/exerciciodois' element={ <Exerciciodois/> }/>
            <Route path='/exerciciotres' element={ <Exerciciotres/> }/>
          </Routes>
        </BrowserRouter>
    )
}