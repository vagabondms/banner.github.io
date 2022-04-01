import React, { ChangeEvent, createContext, ReactElement, useContext, useEffect, useState } from 'react';
import { ColorResult } from 'react-color';

import { ColorValues, Data, SelectValues, InputValues } from '@data/data';
import { getDataFromLocalStorage, setDataInLocalStorage } from '@utils/localStorage';

export interface IProviderProps {
  children: ReactElement;
}

const initialState = new Data();

type IContext = {
  data: Data;
  //! onChangeHandler를 분리해야함
  booleanHandler: (key: 'underline') => (e: boolean) => void;
  colorHandler: (key: ColorValues) => (e: ColorResult) => void;
  inputHandler: (key: InputValues) => (e: ChangeEvent<HTMLInputElement>) => void;
  selectHandler: (key: SelectValues) => (e: ChangeEvent<HTMLSelectElement>) => void;
};

const dataContext = createContext<IContext>({
  data: initialState,
  booleanHandler: () => () => {},
  colorHandler: () => () => {},
  inputHandler: () => () => {},
  selectHandler: () => () => {},
});

export const Provider = ({ children }: IProviderProps): ReactElement => {
  const [data, setData] = useState(initialState);

  //TODO: Refactoring 대상임

  const booleanHandler = (key: 'underline') => (e: boolean) => {
    setData((prev) => ({
      ...prev,
      [key]: e,
    }));
  };
  const colorHandler = (key: ColorValues) => (e: ColorResult) => {
    setData((prev) => ({
      ...prev,
      [key]: e.hex,
    }));
  };
  const inputHandler = (key: InputValues) => (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };
  const selectHandler = (key: SelectValues) => (e: ChangeEvent<HTMLSelectElement>) => {
    setData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  useEffect(() => {
    const localStorageData = getDataFromLocalStorage('data');
    if (localStorageData) {
      setData((prev) => ({
        ...prev,
        ...localStorageData,
      }));
    }
  }, [setData]);

  useEffect(() => {
    setDataInLocalStorage('data', data);
  }, [data]);

  const value = {
    data,
    booleanHandler,
    colorHandler: colorHandler,
    inputHandler,
    selectHandler,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useData = (): IContext => useContext(dataContext);
