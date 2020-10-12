import React from 'react';
import ReactDOM from 'react-dom';

import Box from './Box';
import Button from './Button';

import styled from 'styled-components';

const StyledP = styled.p`
  background-color: #aabbcc;
`;

const StyledP2 = styled('p')`
  font-size: 3rem;
`;

ReactDOM.render(
  <div>
    <Button size="small" />
    <Button size="big" />

    <Box size="small" />
    <Box size="big" />

    <StyledP> this is what I want. </StyledP>
    <StyledP2> this is what I want. </StyledP2>

  </div>,
  document.getElementById('root')

);
