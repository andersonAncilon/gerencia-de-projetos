import React from 'react';
import './style.css';

const RegisterForm = ({ redirect }) => {
  var email = '';
  var password = '';
  var confirmPassword = '';

  function handleEmail(value) {
    email = value;
  }

  function handlePassword(value) {
    password = value;
  }

  function handleConfirmPassword(value) {
    confirmPassword = value;
  }

  function send(e) {
    e.preventDefault();

    if (email !== '' && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        window.sessionStorage.setItem('login', email);
        window.sessionStorage.setItem('password', password);

        alert('Cadastro realizado com sucesso, favor faça login!');
        redirect();
      } else alert('Senhas não conferem!');
    } else alert('Favor, preencha todos os campos');
  }

  return (
    <div className="register-form-container">
      <form className="col-md-8 mx-auto">
        <h2>Cadastro</h2>
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
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
          <label for="exampleInputPassword1">Senha</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Digite sua senha"
            onChange={e => handlePassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Repita a senha</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirme sua senha"
            onChange={e => handleConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={e => send(e)}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
