import React, { ReactElement, useState } from 'react';

import Button from '@atoms/Button';
import Wrapper from '@atoms/Wrapper';
import { useData } from '@hooks/useData';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import SlidingMenu from '@organisms/SlidingMenu';

const BackgroundBox = (): ReactElement => {
  const [visible, setVisible] = useState(false);
  const { backgroundColor, onBackgroundColorChange, fontColor, onFontColorChange } = useData();
  return (
    <Wrapper wrapperType="box">
      <Wrapper wrapperType="sub">
        <LabeledColorPicker
          pickerPosition="top"
          color={fontColor}
          onChange={onFontColorChange}
          name="폰트색"
        ></LabeledColorPicker>
        <LabeledColorPicker
          name="배경색"
          pickerPosition="top"
          color={backgroundColor}
          onChange={onBackgroundColorChange}
        ></LabeledColorPicker>
      </Wrapper>

      <Button
        style={{ marginTop: 38 }}
        text={`추가 설정 ${visible ? '닫기' : '열기'}`}
        onClick={() => {
          setVisible(!visible);
        }}
      ></Button>
      <SlidingMenu visible={visible}></SlidingMenu>
    </Wrapper>
  );
};

export default BackgroundBox;
