import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactEventHandler,
  FocusEventHandler,
  useState,
  useContext,
  createContext,
  ReactElement,
} from 'react';

// const InputContext = createContext('');

// export const InputProvider = ({ children }: { children: ReactElement }) => {
//   return <InputContext.Provider>{children}</InputContext.Provider>;
// };

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
