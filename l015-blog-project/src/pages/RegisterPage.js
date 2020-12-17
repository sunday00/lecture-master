import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <div>
      <AuthTemplate>
        <AuthForm type="register"></AuthForm>
      </AuthTemplate>
    </div>
  );
};

export default RegisterPage;
