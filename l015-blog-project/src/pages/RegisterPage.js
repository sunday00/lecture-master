import React from 'react';
import RegisterForm from '../containers/auth/RegisterForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <div>
      <AuthTemplate>
        <RegisterForm type="register"></RegisterForm>
      </AuthTemplate>
    </div>
  );
};

export default RegisterPage;
