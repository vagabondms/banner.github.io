import React, { ReactElement } from 'react';

import BoxWrapper from '@atoms/BoxWrapper';
import Divider from '@atoms/Divider';
import SubWrapper from '@atoms/SubWrapper';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import LabeledSelector from '@molecules/LabeledSelector';
import { fontSizeGenerator, fontGenerator } from '@utils/data';

const FontBox = (): ReactElement => {
  return (
    <BoxWrapper>
      <SubWrapper>
        <LabeledSelector name="폰트" options={fontGenerator()}></LabeledSelector>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledSelector name="크기" options={fontSizeGenerator()}></LabeledSelector>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledColorPicker name="색상"></LabeledColorPicker>
      </SubWrapper>
    </BoxWrapper>
  );
};

export default FontBox;
