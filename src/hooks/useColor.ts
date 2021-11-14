import { useState, useCallback } from 'react';
import { ColorChangeHandler } from 'react-color';
const useInput = (initialState: string): [string, ColorChangeHandler] => {
  const [value, setValue] = useState(initialState);

  const onColorChange = useCallback((color) => {
    setValue(color.hex);
  }, []);

  return [value, onColorChange];
};

export default useInput;
