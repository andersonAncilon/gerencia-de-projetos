import React from 'react';
import './style.css';

const RegisterForm = () => (
	<div className='register-form-container'>
		<form className='col-md-8 mx-auto'>
			<h2>Cadastro</h2>
			<div className='form-group'>
				<label for='exampleInputEmail1'>Email</label>
				<input
					type='email'
					className='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					placeholder='Digite seu e-mail'
				/>
			</div>
			<div className='form-group'>
				<label for='exampleInputPassword1'>Senha</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					placeholder='Digite sua senha'
				/>
			</div>
			<div className='form-group'>
				<label for='exampleInputPassword1'>Repita a senha</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					placeholder='Confirme sua senha'
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Cadastrar
			</button>
		</form>
	</div>
);

export default RegisterForm;
