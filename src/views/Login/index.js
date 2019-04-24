import React from 'react';

import LoginForm from '../../components/LoginForm';

const Login = ({ history }) => (
  <div className="container">
    <div className="col-sm">
      <LoginForm redirect={() => history.push('/home')} />
    </div>
  </div>
);

export default Login;
