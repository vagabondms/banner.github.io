import React, { ReactElement } from 'react';

import Button from '@components/Button';
import LabeledColorPicker from '@components/LabeledColorPicker';
import Wrapper from '@components/Wrapper';
import { useData } from '@hooks/useDataContext';

type BackgroundBoxProps = {
  handleBanner: (isOpen: boolean) => void;
  isVisible: boolean;
};

const BackgroundBox = ({ handleBanner, isVisible }: BackgroundBoxProps): ReactElement => {
  const {
    data: { backgroundColor, fontColor },
    colorHandler,
  } = useData();

  const handleButtonClick = () => {
    handleBanner(!isVisible);
  };

  return (
    <Wrapper wrapperType="box">
      <Wrapper wrapperType="sub">
        <LabeledColorPicker
          pickerPosition="top"
          color={fontColor}
          onChange={colorHandler('fontColor')}
          name="폰트색"
        ></LabeledColorPicker>
        <LabeledColorPicker
          name="배경색"
          pickerPosition="top"
          color={backgroundColor}
          onChange={colorHandler('backgroundColor')}
        ></LabeledColorPicker>
      </Wrapper>
      <Button style={{ marginTop: 38 }} text={`추가 설정 ${isVisible ? '닫기' : '열기'}`} onClick={handleButtonClick}></Button>
    </Wrapper>
  );
};

export default BackgroundBox;
