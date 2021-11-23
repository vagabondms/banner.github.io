import { useState } from 'react';

const initialState = {
  title: '',
  subTitle: '',
  tag: '',
  font: 'Noto-sans',
  height: 350,
  width: 700,
  titleFontSize: 55,
  subTitleFontSize: 25,
  tagFontSize: 15,
  fontColor: '#533535',
  backgroundColor: '#E6CCA9',
};

export type TData = typeof initialState;

export const useBannerState = (): [TData, typeof setData, typeof onChangeHandler] => {
  const [data, setData] = useState(initialState);

  const onChangeHandler = (key: keyof typeof initialState) => (e: any) => {
    setData((prev) => {
      let value;
      if (e.hex) {
        value = e.hex;
      } else if (typeof prev[key] === 'number') {
        value = Number(e.target.value);
      } else {
        value = e.target.value;
      }

      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return [data, setData, onChangeHandler];
};
