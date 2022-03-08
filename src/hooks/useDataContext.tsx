import React, { useContext, createContext, ReactElement, useEffect, useState, ChangeEvent } from 'react';
import { ColorResult } from 'react-color';

import { getDataFromLocalStorage, setDataInLocalStorage } from '@utils/localStorage';
export interface IProviderProps {
  children: ReactElement;
}

const initialState = {
  title: '',
  subTitle: '',
  tag: '',
  font: 'RIDIBatang',
  height: 350,
  width: 700,
  titleFontSize: 55,
  subTitleFontSize: 25,
  tagFontSize: 15,
  fontColor: '#533535',
  backgroundColor: '#E6CCA9',
  underline: true,
};

export type TData = typeof initialState;
export type Key = keyof TData;

interface IContext {
  data: TData;
  onChangeHandler: (key: keyof TData) => (e: boolean | ColorResult | ChangeEvent<HTMLInputElement>) => void;
}

const dataContext = createContext<IContext>({
  data: {
    title: '',
    subTitle: '',
    tag: '',
    height: 0,
    width: 0,
    font: '',
    fontColor: '',
    backgroundColor: '',
    titleFontSize: 0,
    subTitleFontSize: 0,
    tagFontSize: 0,
    underline: true,
  },
  onChangeHandler: () => () => {},
});

export const Provider = ({ children }: IProviderProps): ReactElement => {
  const [data, setData] = useState(initialState);

  const onChangeHandler = (key: Key) => (e: boolean | ColorResult | ChangeEvent<HTMLInputElement>) => {
    if (typeof e === 'boolean') {
      setData((prev) => ({
        ...prev,
        [key]: e,
      }));
    } else if ('hex' in e) {
      setData((prev) => ({
        ...prev,
        [key]: e.hex,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    }
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
    onChangeHandler,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useData = (): IContext => useContext(dataContext);
