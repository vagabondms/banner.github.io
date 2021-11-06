import { ChangeEvent, ChangeEventHandler, ReactEventHandler, FocusEventHandler, useState } from 'react';

const useInputWithPlaceHolder = (
  initialPlaceholder: string,
): {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler;
  onFocus: FocusEventHandler;
  onBlur: ReactEventHandler;
} => {
  const [inputValue, setInputValue] = useState<string>('');
  const [placeholder, setPlaceholder] = useState<string>(initialPlaceholder);

  const onChangeHandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onFocusHandler: FocusEventHandler = (): void => {
    setPlaceholder('');
  };

  const onBlurHandler: ReactEventHandler = (): void => {
    setPlaceholder(initialPlaceholder);
  };

  return { value: inputValue, placeholder, onChange: onChangeHandler, onFocus: onFocusHandler, onBlur: onBlurHandler };
};

export default useInputWithPlaceHolder;
