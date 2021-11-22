import React, { ReactElement } from 'react';

import Wrapper from '@atoms/Wrapper';
import { useData } from '@hooks/useDataContext';
import LabeledInput from '@molecules/LabeledInput';

const InputBox = (): ReactElement => {
  const {
    data: { title, subTitle, tag },
    onChangeHandler,
  } = useData();
  return (
    <Wrapper wrapperType="box">
      <LabeledInput
        name="제목"
        type="text"
        value={title}
        onChange={onChangeHandler('title')}
        placeholder="제목을 입력하세요"
      ></LabeledInput>
      <LabeledInput
        value={subTitle}
        onChange={onChangeHandler('subTitle')}
        name="부제목"
        type="text"
        placeholder="부제목을 입력하세요"
      ></LabeledInput>
      <LabeledInput
        value={tag}
        onChange={onChangeHandler('tag')}
        name="태그"
        type="text"
        placeholder="태그를 입력하세요"
      ></LabeledInput>
    </Wrapper>
  );
};

export default InputBox;
