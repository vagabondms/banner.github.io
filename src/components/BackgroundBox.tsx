import React, { ReactElement, useState } from 'react';

import Button from '@components/Button';
import LabeledColorPicker from '@components/LabeledColorPicker';
import SlidingMenu from '@components/SlidingMenu';
import Wrapper from '@components/Wrapper';
import { useData } from '@hooks/useDataContext';

const BackgroundBox = (): ReactElement => {
  const [visible, setVisible] = useState(false);
  const {
    data: { backgroundColor, fontColor },
    onChangeHandler,
  } = useData();
  return (
    <Wrapper wrapperType="box">
      <Wrapper wrapperType="sub">
        <LabeledColorPicker
          pickerPosition="top"
          color={fontColor}
          onChange={onChangeHandler('fontColor')}
          name="폰트색"
        ></LabeledColorPicker>
        <LabeledColorPicker
          name="배경색"
          pickerPosition="top"
          color={backgroundColor}
          onChange={onChangeHandler('backgroundColor')}
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
