import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const LoginForm = ({ redirect }) => {
  var email = '';
  var password = '';

  function handleEmail(value) {
    email = value;
  }

  function handlePassword(value) {
    password = value;
  }

  function send(e) {
    e.preventDefault();

    let lg = window.sessionStorage.getItem('login');
    let pwd = window.sessionStorage.getItem('password');

    if (lg === email && pwd === password) {
      alert('Login efetuado com sucesso!');
      redirect();
    } else if (!lg || !pwd) {
      alert('Você não possui cadastro!');
    } else alert('Dados não conferem!');
  }

  return (
    <div className="login-form-container">
      <form className="col-md-8 mx-auto">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite seu e-mail"
            onChange={e => handleEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Digite sua senha"
            onChange={e => handlePassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={e => send(e)}>
            Entrar
          </button>
        </div>
        <Link to="/cadastro" className="text-danger btn btn-light">
          Não tenho cadastro
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
