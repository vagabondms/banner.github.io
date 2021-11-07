import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SubWrapper from '@atoms/SubWrapper';
import LabeledBoxWrapper from '@molecules/LabeledBoxWrapper';
import LabeledInput from '@molecules/LabeledInput';

const titleStyle = { fontSize: 30, borderBottom: '2px solid #5ec59a', width: 280 };
const subTitleStyle = { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 };
const tagStyle = { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 };

const InputBox = (): ReactElement => {
  return (
    <LabeledBoxWrapper name="TEXT">
      <SubWrapper>
        <LabeledInput name="제목" style={titleStyle}></LabeledInput>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledInput name="부제목" style={subTitleStyle}></LabeledInput>
        <LabeledInput name="태그" style={tagStyle}></LabeledInput>
      </SubWrapper>
    </LabeledBoxWrapper>
  );
};

export default InputBox;
