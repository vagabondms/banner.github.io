import React, { ReactElement } from 'react';

import BoxWrapper from '@atoms/BoxWrapper';
import SubWrapper from '@atoms/SubWrapper';
import { useData } from '@hooks/useData';
import LabeledColorPicker from '@molecules/LabeledColorPicker';
import LabeledInput from '@molecules/LabeledInput';
import LabeledSelector from '@molecules/LabeledSelector';
import { fontGenerator } from '@utils/data';

const InputBox = (): ReactElement => {
  const { title, subTitle, tag, font, onFontChange, onTitleChange, onSubTitleChange, onTagChange, fontColor, onFontColorChange } =
    useData();
  return (
    <BoxWrapper>
      <SubWrapper>
        <LabeledInput
          name="제목"
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="제목을 입력하세요"
        ></LabeledInput>
        <LabeledInput
          value={subTitle}
          onChange={onSubTitleChange}
          name="부제목"
          type="text"
          placeholder="부제목을 입력하세요"
        ></LabeledInput>
        <LabeledInput value={tag} onChange={onTagChange} name="태그" type="text" placeholder="태그를 입력하세요"></LabeledInput>
      </SubWrapper>
      <SubWrapper>
        <LabeledSelector name="폰트" value={font} onChange={onFontChange} options={fontGenerator()}></LabeledSelector>
        <LabeledColorPicker color={fontColor} onChange={onFontColorChange} name="폰트색"></LabeledColorPicker>
      </SubWrapper>
    </BoxWrapper>
  );
};

export default InputBox;
