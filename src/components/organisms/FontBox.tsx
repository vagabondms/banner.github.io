import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SubWrapper from '@atoms/SubWrapper';
import { useData } from '@hooks/useContext';
import LabeledBoxWrapper from '@molecules/LabeledBoxWrapper';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import LabeledSelector from '@molecules/LabeledSelector';
import { fontSizeGenerator, fontGenerator } from '@utils/data';
const FontBox = (): ReactElement => {
  const { font, onFontChange, fontSize, onFontSizeChange } = useData();
  return (
    <LabeledBoxWrapper name="FONT">
      <SubWrapper>
        <LabeledSelector name="폰트" value={font} onChange={onFontChange} options={fontGenerator()}></LabeledSelector>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledSelector name="크기" value={fontSize} onChange={onFontSizeChange} options={fontSizeGenerator()}></LabeledSelector>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledColorPicker name="색상"></LabeledColorPicker>
      </SubWrapper>
    </LabeledBoxWrapper>
  );
};

export default FontBox;
