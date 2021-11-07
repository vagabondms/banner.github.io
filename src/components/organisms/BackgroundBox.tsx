import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SubWrapper from '@atoms/SubWrapper';
import LabeledBoxWrapper from '@molecules/LabeledBoxWrapper';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import LabeledInput from '@molecules/LabeledInput';

const FontBox = (): ReactElement => {
  return (
    <LabeledBoxWrapper name="Background">
      <SubWrapper>
        <LabeledColorPicker name="색상"></LabeledColorPicker>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledInput
          type="number"
          name="넓이"
          style={{ borderBottom: '1px solid black' }}
          placeHolder="넓이를 입력하세요"
        ></LabeledInput>
        <LabeledInput
          type="number"
          name="높이"
          style={{ borderBottom: '1px solid black' }}
          placeHolder="높이를 입력하세요"
        ></LabeledInput>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledColorPicker name="이미지"></LabeledColorPicker>
      </SubWrapper>
    </LabeledBoxWrapper>
  );
};

export default FontBox;
