import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactElement,
  useState,
  CSSProperties,
} from 'react';

import styled from '@emotion/styled';

export interface IInputProp {
  name: string;
  style: CSSProperties;
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
  const [inputValue, setInputValue] = useState<string>('');
  const [isPlaceHolder, setIsPlaceHolder] = useState<boolean>(true);

  const onChangeHandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onFocusHandler: FocusEventHandler = (): void => {
    setIsPlaceHolder(false);
  };

  const onBlurHandler: ReactEventHandler = (): void => {
    setIsPlaceHolder(true);
  };

  return (
    <StyledInput
      type="text"
      name={name}
      style={{ ...style }}
      placeholder={isPlaceHolder ? `${name}은 여기👇` : ''}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      value={inputValue}
    />
  );
};

export default Input;
