import React, { InputHTMLAttributes, ReactElement, CSSProperties } from 'react';

import styled from '@emotion/styled';
import useInputWithPlaceHolder from '@hooks/useInput';

export interface IInputProp {
  name?: string;
  style?: CSSProperties;
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

const Input = ({ name, style }: IInputProp): ReactElement => {
  const inputProps = useInputWithPlaceHolder(`${name}은 여기👇`);

  return <StyledInput type="text" name={name} style={{ ...style }} {...inputProps} />;
};

export default Input;
