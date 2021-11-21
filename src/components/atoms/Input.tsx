import React, { InputHTMLAttributes, ReactElement, ReactEventHandler, HTMLAttributes } from 'react';

import styled from '@emotion/styled';
import { border, colors, fonts, sizing, spacing } from '@styles/css';

export interface IInputProp extends HTMLAttributes<HTMLInputElement> {
  onChange: ReactEventHandler;
}

type TStyledInputProp = InputHTMLAttributes<Element>;

const StyledInput = styled.input<TStyledInputProp>`
  text-align: center;
  background: transparent;
  color: ${colors.blue};
  ${fonts.mainSize}
  border: ${border.orangeLightBorder};
  ${border.defaultRadius}
  ${sizing.large}
  ${spacing.defaultSpacing}
  :focus {
    outline: none;
    caret-color: #5ec59a;
    ::placeholder {
      visibility: hidden;
    }
  }
`;

const Input = (props: IInputProp): ReactElement => {
  return <StyledInput {...props} />;
};

export default Input;
