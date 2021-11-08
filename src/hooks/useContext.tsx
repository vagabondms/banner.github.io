import React, { useContext, createContext, ReactElement, useState, ReactEventHandler, ChangeEvent } from 'react';

export interface IProviderProps {
  children: ReactElement[];
}

interface IContext {
  title: string;
  subTitle: string;
  tag: string;
  height: string;
  width: string;
  onTitleChange: ReactEventHandler;
  onSubTitleChange: ReactEventHandler;
  onTagChange: ReactEventHandler;
  onWidthChange: ReactEventHandler;
  onHeightChange: ReactEventHandler;
}

const dataContext = createContext<IContext>({
  title: '',
  subTitle: '',
  tag: '',
  height: '',
  width: '',
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onSubTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onTagChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onWidthChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onHeightChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
});

export const Provider = ({ children }: IProviderProps): ReactElement => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [tag, setTag] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onSubTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubTitle(e.target.value);
  };
  const onTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const onHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };
  const onWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWidth(e.target.value);
  };

  const value = {
    title,
    subTitle,
    tag,
    width,
    height,
    onTitleChange,
    onSubTitleChange,
    onTagChange,
    onHeightChange,
    onWidthChange,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useData = (): IContext => useContext(dataContext);
