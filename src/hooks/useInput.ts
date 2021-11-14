import { ChangeEvent, ReactEventHandler, useState, useCallback } from 'react';

const useInput = (initialState: string): [string, ReactEventHandler] => {
  const [value, setValue] = useState(initialState);

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, onInputChange];
};

export default useInput;
