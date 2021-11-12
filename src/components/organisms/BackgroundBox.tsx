import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SubWrapper from '@atoms/SubWrapper';
import { useData } from '@hooks/useData';
import LabeledBoxWrapper from '@molecules/LabeledBoxWrapper';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import LabeledSelector from '@molecules/LabeledSelector';
import { widthGenerator, heightGenerator } from '@utils/data';
const BackgroundBox = (): ReactElement => {
  const { height, width, onHeightChange, onWidthChange, backgroundColor, onBackgroundColorChange } = useData();
  return (
    <LabeledBoxWrapper name="Background">
      <SubWrapper>
        <LabeledColorPicker name="색상" color={backgroundColor} onChange={onBackgroundColorChange}></LabeledColorPicker>
      </SubWrapper>
      <Divider />
      <LabeledSelector options={widthGenerator()} value={width} onChange={onWidthChange} name="넓이"></LabeledSelector>
      <LabeledSelector options={heightGenerator()} value={height} onChange={onHeightChange} name="높이"></LabeledSelector>
      <Divider />
      <SubWrapper>
        <div>이미지</div>
      </SubWrapper>
    </LabeledBoxWrapper>
  );
};

export default BackgroundBox;
