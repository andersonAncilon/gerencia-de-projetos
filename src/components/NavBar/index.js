import React from 'react';

const NavBar = props => (
  <nav className="navbar navbar-light bg-info ">
    <a className="navbar-brand text-white" href="/">
      <img
        src="/docs/4.3/assets/brand/bootstrap-solid.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />
      Gestor de projetos
    </a>
  </nav>
);

export default NavBar;
