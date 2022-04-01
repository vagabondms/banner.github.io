import React, { ReactElement } from 'react';

import LabeledInput from '@components/LabeledInput';
import Wrapper from '@components/Wrapper';
import { useData } from '@hooks/useDataContext';

const InputBox = (): ReactElement => {
  const {
    data: { title, subTitle, tag },
    inputHandler,
  } = useData();
  return (
    <Wrapper wrapperType="box">
      <LabeledInput
        name="제목"
        type="text"
        value={title}
        onChange={inputHandler('title')}
        placeholder="제목을 입력하세요"
      ></LabeledInput>
      <LabeledInput
        value={subTitle}
        onChange={inputHandler('subtitle')}
        name="부제목"
        type="text"
        placeholder="부제목을 입력하세요"
      ></LabeledInput>
      <LabeledInput
        value={tag}
        onChange={inputHandler('tag')}
        name="태그"
        type="text"
        placeholder="태그를 입력하세요"
      ></LabeledInput>
    </Wrapper>
  );
};

export default InputBox;
