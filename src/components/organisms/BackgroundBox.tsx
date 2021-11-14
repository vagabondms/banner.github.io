import React, { ReactElement } from 'react';

import BoxWrapper from '@atoms/BoxWrapper';
import { useData } from '@hooks/useData';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import LabeledSelector from '@molecules/LabeledSelector';
import { widthGenerator, heightGenerator } from '@utils/data';
const BackgroundBox = (): ReactElement => {
  const { height, width, onHeightChange, onWidthChange, backgroundColor, onBackgroundColorChange } = useData();
  return (
    <BoxWrapper name="Background">
      <LabeledColorPicker name="배경색" color={backgroundColor} onChange={onBackgroundColorChange}></LabeledColorPicker>
      <LabeledSelector options={widthGenerator()} value={width} onChange={onWidthChange} name="배경 넓이"></LabeledSelector>
      <LabeledSelector options={heightGenerator()} value={height} onChange={onHeightChange} name="배경 높이"></LabeledSelector>
    </BoxWrapper>
  );
};

export default BackgroundBox;
