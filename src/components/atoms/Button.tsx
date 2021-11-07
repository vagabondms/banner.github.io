import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

export interface IButtonProps {
  text: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: #5ec59a;
  color: white;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;

  :hover {
    animation: shake 0.4s;
    animation-iteration-count: infinite;
    box-shadow: 2px 2px 2px lightgrey;
    background-color: #5ec59ad8;
  }
  :active {
    background-color: #5ec59a;
    box-shadow: none;
    animation: none;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(1deg);
    }
  }
`;

const Button = ({ text, onClick }: IButtonProps): ReactElement => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
