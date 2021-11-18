import React, { ReactElement } from 'react';

import Wrapper from '@atoms/Wrapper';
import { useData } from '@hooks/useData';
import LabeledColorPicker from '@molecules/LabeledColorPicker';

const BackgroundBox = (): ReactElement => {
  const { backgroundColor, onBackgroundColorChange, fontColor, onFontColorChange } = useData();
  return (
    <Wrapper wrapperType="box">
      <LabeledColorPicker pickerPosition="top" color={fontColor} onChange={onFontColorChange} name="폰트색"></LabeledColorPicker>
      <LabeledColorPicker
        name="배경색"
        pickerPosition="top"
        color={backgroundColor}
        onChange={onBackgroundColorChange}
      ></LabeledColorPicker>
    </Wrapper>
  );
};

export default BackgroundBox;
