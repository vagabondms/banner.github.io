import React, { CSSProperties, ReactElement } from 'react';

import styled from '@emotion/styled';

export interface IButtonProps {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
}

const StyledButton = styled.button`
  background-color: #4f9da6;
  color: #233142;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;

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

const Button = ({ text, onClick, ...rest }: IButtonProps): ReactElement => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {text}
    </StyledButton>
  );
};

export default Button;
