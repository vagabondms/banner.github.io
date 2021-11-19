import React, { CSSProperties, ReactElement } from 'react';

import styled from '@emotion/styled';
import { border, colors, fonts, sizing, spacing } from '@styles/css';

export interface IButtonProps {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
}

const StyledButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.black};
  ${border.defaultRadius}
  ${sizing.large}
  ${spacing.defaultSpacing}
  ${fonts.buttonSize}
  border: none;
  cursor: pointer;
  margin-top: 10px;
  height: 50px;
  font-weight: bold;

  :hover {
    box-shadow: 2px 2px 2px lightgrey;
    background-color: #5ec59ad8;
  }
  :active {
    background-color: #5ec59a;
    box-shadow: none;
    animation: none;
  }

  /* @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(1deg);
    }
  } */
`;

const Button = ({ text, onClick, ...rest }: IButtonProps): ReactElement => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {text}
    </StyledButton>
  );
};

export default Button;
