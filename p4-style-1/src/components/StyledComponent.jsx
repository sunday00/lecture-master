import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  background-color: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: 1rem;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background-color: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>Hello</Button>
      <Button inverted={true}>Border</Button>
    </Box>
  );
};

export default StyledComponent;
