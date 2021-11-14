import React, { InputHTMLAttributes, ReactElement, ReactEventHandler, HTMLAttributes } from 'react';

import styled from '@emotion/styled';

export interface IInputProp extends HTMLAttributes<HTMLInputElement> {
  onChange: ReactEventHandler;
}

type TStyledInputProp = InputHTMLAttributes<Element>;

const StyledInput = styled.input<TStyledInputProp>`
  border: none;
  text-align: center;
  background: transparent;
  color: #ff5959;

  border-bottom: 1px solid #facf5a;
  width: 200px;
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
