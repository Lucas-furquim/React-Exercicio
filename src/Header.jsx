import { HeaderButtonNav, HeaderNav } from './Componentes/Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={HeaderNav}>
      <NavLink className={HeaderButtonNav} to="" end>
        Produtos
      </NavLink>
      <NavLink className={HeaderButtonNav} to="sobre">
        Sobre
      </NavLink>
    </nav>
  );
};

export default Header;
