import React from 'react';

import RegisterForm from '../../components/RegisterForm';

const Register = ({ history }) => (
  <div className="container">
    <div className="col-sm">
      <RegisterForm redirect={() => history.push('/')} />
    </div>
  </div>
);

export default Register;
