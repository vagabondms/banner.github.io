import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SubWrapper from '@atoms/SubWrapper';
import { useData } from '@hooks/useContext';
import LabeledBoxWrapper from '@molecules/LabeledBoxWrapper';
import LabeledInput from '@molecules/LabeledInput';
const titleStyle = { fontSize: 30, borderBottom: '2px solid #5ec59a', width: 280 };
const subTitleStyle = { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 };
const tagStyle = { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 };

const InputBox = (): ReactElement => {
  const { title, subTitle, tag, onTitleChange, onSubTitleChange, onTagChange } = useData();
  return (
    <LabeledBoxWrapper name="TEXT">
      <SubWrapper>
        <LabeledInput
          name="제목"
          type="text"
          value={title}
          onChange={onTitleChange}
          style={titleStyle}
          placeholder="제목을 입력하세요"
        ></LabeledInput>
      </SubWrapper>
      <Divider />
      <SubWrapper>
        <LabeledInput
          value={subTitle}
          onChange={onSubTitleChange}
          name="부제목"
          type="text"
          style={subTitleStyle}
          placeholder="부제목을 입력하세요"
        ></LabeledInput>
        <LabeledInput
          value={tag}
          onChange={onTagChange}
          name="태그"
          type="text"
          style={tagStyle}
          placeholder="태그를 입력하세요"
        ></LabeledInput>
      </SubWrapper>
    </LabeledBoxWrapper>
  );
};

export default InputBox;
