import React, { ReactElement } from 'react';

import Wrapper from '@atoms/Wrapper';
import { useData } from '@hooks/useData';
import LabeledInput from '@molecules/LabeledInput';

const InputBox = (): ReactElement => {
  const { title, subTitle, tag, onTitleChange, onSubTitleChange, onTagChange } = useData();
  return (
    <Wrapper wrapperType="box">
      <LabeledInput name="제목" type="text" value={title} onChange={onTitleChange} placeholder="제목을 입력하세요"></LabeledInput>
      <LabeledInput
        value={subTitle}
        onChange={onSubTitleChange}
        name="부제목"
        type="text"
        placeholder="부제목을 입력하세요"
      ></LabeledInput>
      <LabeledInput value={tag} onChange={onTagChange} name="태그" type="text" placeholder="태그를 입력하세요"></LabeledInput>
    </Wrapper>
  );
};

export default InputBox;
