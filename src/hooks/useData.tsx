import React, { useContext, createContext, ReactElement, ReactEventHandler, ChangeEvent } from 'react';
import { ColorChangeHandler } from 'react-color';

import useColor from './useColor';
import useInput from './useInput';
export interface IProviderProps {
  children: ReactElement;
}

interface IContext {
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
  onTitleChange: ReactEventHandler;
  onSubTitleChange: ReactEventHandler;
  onTagChange: ReactEventHandler;
  onWidthChange: ReactEventHandler;
  onHeightChange: ReactEventHandler;
  onFontChange: ReactEventHandler;
  onFontColorChange: ColorChangeHandler;
  onBackgroundColorChange: ColorChangeHandler;
  onTitleFontSizeChange: ReactEventHandler;
  onSubTitleFontSizeChange: ReactEventHandler;
  onTagFontSizeChange: ReactEventHandler;
}

const dataContext = createContext<IContext>({
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
  onFontChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onFontColorChange: (color) => {
    console.log(color);
  },
  onBackgroundColorChange: (color) => {
    console.log(color);
  },
  onTitleFontSizeChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onSubTitleFontSizeChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onTagFontSizeChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
});

export const Provider = ({ children }: IProviderProps): ReactElement => {
  const [title, onTitleChange] = useInput('');
  const [subTitle, onSubTitleChange] = useInput('');
  const [tag, onTagChange] = useInput('');
  const [height, onHeightChange] = useInput(350);
  const [width, onWidthChange] = useInput(700);
  const [font, onFontChange] = useInput('Noto-sans');
  const [backgroundColor, onBackgroundColorChange] = useColor('#E6CCA9');
  const [fontColor, onFontColorChange] = useColor('#533535');
  const [titleFontSize, onTitleFontSizeChange] = useInput(55);
  const [subTitleFontSize, onSubTitleFontSizeChange] = useInput(25);
  const [tagFontSize, onTagFontSizeChange] = useInput(15);

  const value = {
    title,
    subTitle,
    tag,
    width,
    height,
    font,
    fontColor,
    backgroundColor,
    titleFontSize,
    subTitleFontSize,
    tagFontSize,
    onTitleChange,
    onSubTitleChange,
    onTagChange,
    onHeightChange,
    onWidthChange,
    onFontChange,
    onBackgroundColorChange,
    onFontColorChange,
    onTitleFontSizeChange,
    onSubTitleFontSizeChange,
    onTagFontSizeChange,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useData = (): IContext => useContext(dataContext);
