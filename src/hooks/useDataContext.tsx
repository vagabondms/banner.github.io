import React, { useContext, createContext, ReactElement, ReactEventHandler, useEffect } from 'react';

import { getDataFromLocalStorage, setDataInLocalStorage } from '@utils/localStorage';

import { TData, useBannerState } from './useBannerState';
export interface IProviderProps {
  children: ReactElement;
}

interface IContext {
  data: TData;
  onChangeHandler: (key: keyof TData) => ReactEventHandler;
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
  },
  onChangeHandler: () => () => {},
});

export const Provider = ({ children }: IProviderProps): ReactElement => {
  const [data, setData, onChangeHandler] = useBannerState();

  useEffect(() => {
    const localStorageData = getDataFromLocalStorage('data');
    if (localStorageData) {
      setData(localStorageData);
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
