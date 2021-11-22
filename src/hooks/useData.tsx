import React, { useContext, createContext, ReactElement, ReactEventHandler } from 'react';
import { ColorChangeHandler } from 'react-color';

import { useData2 } from './useData2';

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
  const [data, , onChangeHandler] = useData2();

  const value = {
    data,
    onChangeHandler,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useData = (): IContext => useContext(dataContext);
