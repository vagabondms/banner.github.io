import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SubWrapper from '@atoms/SubWrapper';
import { useData } from '@hooks/useData';
import LabeledBoxWrapper from '@molecules/LabeledBoxWrapper';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import LabeledInput from '@molecules/LabeledInput';
const FontBox = (): ReactElement => {
  const { height, width, onHeightChange, onWidthChange } = useData();
  return (
    <LabeledBoxWrapper name="Background">
      <SubWrapper>
        <LabeledColorPicker name="색상"></LabeledColorPicker>
      </SubWrapper>
      <Divider />

      <LabeledInput
        value={width}
        onChange={onWidthChange}
        type="number"
        name="넓이"
        style={{ borderBottom: '1px solid black' }}
        placeholder="넓이를 입력하세요"
      ></LabeledInput>
      <LabeledInput
        value={height}
        onChange={onHeightChange}
        type="number"
        name="높이"
        style={{ borderBottom: '1px solid black' }}
        placeholder="높이를 입력하세요"
      ></LabeledInput>

      <Divider />
      <SubWrapper>
        <LabeledColorPicker name="이미지"></LabeledColorPicker>
      </SubWrapper>
    </LabeledBoxWrapper>
  );
};

export default FontBox;
