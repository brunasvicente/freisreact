import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Sobre from './pages/sobre';

export default function Navegacao() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <App/> }/>
            <Route path='/sobre' element={ <Sobre/> }/>
          </Routes>
        </BrowserRouter>
    )
}