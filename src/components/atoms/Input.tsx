import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactElement,
  useState,
} from 'react';

import styled from '@emotion/styled';

interface IInputProp {
  label?: string;
}

type TStyledInputProp = InputHTMLAttributes<Element>;

const StyledInput = styled.input<TStyledInputProp>`
  border: none;
  border-bottom: 1px solid brown;
  text-align: center;
  font-size: 30px;

  :focus {
    outline: none;
    caret-color: transparent;
  }
`;

const Input = (props: IInputProp): ReactElement => {
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
      placeholder={isPlaceHolder ? '제목을 입력하세요' : ''}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      value={inputValue}
    />
  );
};

export default Input;
