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
        <LabeledInput name="제목" type="text" style={titleStyle} placeHolder="제목을 입력하세요"></LabeledInput>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledInput name="부제목" type="text" style={subTitleStyle} placeHolder="부제목을 입력하세요"></LabeledInput>
        <LabeledInput name="태그" type="text" style={tagStyle} placeHolder="태그를 입력하세요"></LabeledInput>
      </SubWrapper>
    </LabeledBoxWrapper>
  );
};

export default InputBox;
