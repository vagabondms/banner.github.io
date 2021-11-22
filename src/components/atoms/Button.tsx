import React, { CSSProperties, ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { border, colors, fonts, spacing } from '@styles/css';

export interface IButtonProps {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
  buttonType?: 'point';
}

type TStyledButtonProps = Omit<IButtonProps, 'text'>;

const handleButtonType = ({ buttonType }: TStyledButtonProps) => {
  switch (buttonType) {
    case 'point':
      return css`
        background-color: ${colors.red};
        height: 50px;
        width: 200px;
        ${fonts.buttonSize}
      `;
    default:
      return css`
        background-color: ${colors.blue};
        font-size: 15px;
        width: 150px;
        height: 35px;
      `;
  }
};

const StyledButton = styled.button<TStyledButtonProps>`
  ${border.defaultRadius}
  ${spacing.defaultSpacing}
  
  border: none;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  opacity: 0.9;
  color: ${colors.black};

  ${handleButtonType}

  :hover {
    opacity: 1;
    border: 2px solid ${colors.black};
  }
  :active {
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
