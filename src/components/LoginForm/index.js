import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const LoginForm = () => (
	<div className='login-form-container'>
		<form className='col-md-8 mx-auto'>
			<h2>Login</h2>
			<div className='form-group'>
				<label>Email</label>
				<input
					type='email'
					className='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					placeholder='Digite seu e-mail'
				/>
			</div>
			<div className='form-group'>
				<label>Senha</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					placeholder='Digite sua senha'
				/>
			</div>
			<div className='form-group form-check'>
				<input type='checkbox' className='form-check-input' id='exampleCheck1' />
				<label className='form-check-label'>Lembrar senha</label>
			</div>
			<div className='form-group'>
				<button className='btn btn-primary'>Entrar</button>
			</div>
			<Link to='/cadastro' className='text-danger btn btn-light'>
				Não tenho cadastro
			</Link>
		</form>
	</div>
);

export default LoginForm;
