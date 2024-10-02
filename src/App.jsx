// Utilize a API abaixo para puxar a lista de produto
//
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico

// css importado
import { AppContainer } from './Componentes/App.module.css';

// importações de elementos
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';
import Produto from './Produto';
import NaoAchou from './NaoAchou';
const App = () => {
  return (
    <div className={AppContainer}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="*" element={<NaoAchou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
