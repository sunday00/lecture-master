import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const AuthForm = () => {
  return (
    <div>
      <AuthFormBlock>
        <h3>LOGIN</h3>
        <form action="">
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="ID"
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="password"
            type="password"
          />
          <Button fullWith cyan spacing="m-t-2">
            Sign In
          </Button>
        </form>
        <Footer>
          <Link to="/register">Register</Link>
        </Footer>
      </AuthFormBlock>
    </div>
  );
};

export default AuthForm;
