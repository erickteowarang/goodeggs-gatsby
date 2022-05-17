import React from 'react';
import styled from 'styled-components';

const StyledAlert = styled.div`
  position: relative;
  padding: 1rem 1rem;
  width: 100%;
  margin: ${({ theme }) => theme.space[3]} 0 ${({ theme }) => theme.space[4]};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
`

const ErrorMessage = ({ message }: { message: string}) => (
  <StyledAlert>{message}</StyledAlert>
)

export default ErrorMessage;