import { ChangeEvent, ReactEventHandler, useState, useCallback } from 'react';

function useInput<Type = string | number>(initialValue: Type): [Type, ReactEventHandler] {
  const [value, setValue] = useState<any>(initialValue);

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      switch (typeof initialValue) {
        case 'number':
          setValue(Number(e.target.value));
          break;
        case 'string':
          setValue(e.target.value);
          break;
      }
    },
    [initialValue],
  );

  return [value, onInputChange];
}

export default useInput;
