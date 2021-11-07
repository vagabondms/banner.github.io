import React, { InputHTMLAttributes, ReactElement, CSSProperties } from 'react';

import styled from '@emotion/styled';
import useInputWithPlaceHolder from '@hooks/useInput';

export interface IInputProp {
  name?: string;
  style?: CSSProperties;
  placeHolder: string;
  type: 'number' | 'text';
}

type TStyledInputProp = InputHTMLAttributes<Element>;

const StyledInput = styled.input<TStyledInputProp>`
  border: none;
  text-align: center;
  :focus {
    outline: none;
    caret-color: transparent;
  }
`;

const Input = ({ name, style, placeHolder, type }: IInputProp): ReactElement => {
  const inputProps = useInputWithPlaceHolder(placeHolder);

  return <StyledInput type={type} id={name} style={{ ...style }} {...inputProps} />;
};

export default Input;
