import React, { useContext, createContext, ReactElement, ReactEventHandler, useEffect } from 'react';

import { getDataFromLocalStorage, setDataInLocalStorage } from '@utils/localStorage';

import { useBannerState } from './useBannerState';
export interface IProviderProps {
  children: ReactElement;
}

interface IContext {
  data: {
    title: string;
    subTitle: string;
    tag: string;
    height: number;
    width: number;
    font: string;
    backgroundColor: string;
    fontColor: string;
    titleFontSize: number;
    subTitleFontSize: number;
    tagFontSize: number;
  };
  onChangeHandler: (key: string) => ReactEventHandler;
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
