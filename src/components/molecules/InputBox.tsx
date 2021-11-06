import React, { ReactElement } from 'react';

import BoxWrapper from '@atoms/BoxWrapper';
import Divider from '@atoms/Divider';
import Input from '@atoms/Input';
import SubWrapper from '@atoms/SubWrapper';

const titleStyle = { fontSize: 30, borderBottom: '2px solid #5ec59a', width: 280 };
const subTitleStyle = { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 };
const tagStyle = { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 };

const InputBox = (): ReactElement => {
  return (
    <BoxWrapper>
      <SubWrapper>
        <Input name="제목" style={titleStyle}></Input>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <Input name="부제목" style={subTitleStyle}></Input>
        <Input name="태그" style={tagStyle}></Input>
      </SubWrapper>
    </BoxWrapper>
  );
};

export default InputBox;
