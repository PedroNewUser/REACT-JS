import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListarUsuario from './components/ListarUsuario';
import CadastroUser from './CadastroUser';
import Atualizar from './components/Atualizar'
import FormProduct from './components/CadastroProduct';
import ListarProduto from './components/LIstarProduto';
import AtualizarProduto from './components/AtualizarProduto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/save' element={<CadastroUser/>}></Route>
        <Route path='/listar-user' element={<ListarUsuario/>}></Route>
<<<<<<< HEAD
        <Route path='/atualizar' element={<Atualizar/>}></Route>
        <Route path='/cadastro-product' element={<FormProduct/>}></Route>
        <Route path='/listar-product' element={<ListarProduto/>}></Route>
        <Route path='/atualizar-product' element={<AtualizarProduto/>}></Route>
=======
        <Route path='/atualizar/:id' element={<Atualizar/>}></Route>
>>>>>>> 220aeed24dd6f81bbd59610bf791ec3f4914cc03

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();