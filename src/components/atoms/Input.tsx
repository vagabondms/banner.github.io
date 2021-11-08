import React, { InputHTMLAttributes, ReactElement, CSSProperties, ReactEventHandler } from 'react';

import styled from '@emotion/styled';

export interface IInputProp {
  name?: string;
  style?: CSSProperties;
  placeholder: string;
  type: 'number' | 'text';
  value: string;
  onChange: ReactEventHandler;
}

type TStyledInputProp = InputHTMLAttributes<Element>;

const StyledInput = styled.input<TStyledInputProp>`
  border: none;
  text-align: center;
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
