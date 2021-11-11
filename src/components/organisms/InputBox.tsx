import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import SubWrapper from '@atoms/SubWrapper';
import { useData } from '@hooks/useData';
import LabeledBoxWrapper from '@molecules/LabeledBoxWrapper';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import LabeledInput from '@molecules/LabeledInput';
import LabeledSelector from '@molecules/LabeledSelector';
import { fontGenerator } from '@utils/data';
const titleStyle = { fontSize: 15, borderBottom: '2px solid #5ec59a', width: 150 };
const subTitleStyle = { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 };
const tagStyle = { fontSize: 15, borderBottom: '1px solid #5ec59a', width: 150 };

const InputBox = (): ReactElement => {
  const { title, subTitle, tag, font, onFontChange, onTitleChange, onSubTitleChange, onTagChange } = useData();
  return (
    <LabeledBoxWrapper name="TEXT">
      <LabeledInput
        name="제목"
        type="text"
        value={title}
        onChange={onTitleChange}
        style={titleStyle}
        placeholder="제목을 입력하세요"
      ></LabeledInput>
      <Divider />
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
      <SubWrapper>
        <LabeledSelector name="폰트" value={font} onChange={onFontChange} options={fontGenerator()}></LabeledSelector>
        <LabeledColorPicker name="색상"></LabeledColorPicker>
      </SubWrapper>
    </LabeledBoxWrapper>
  );
};

export default InputBox;
