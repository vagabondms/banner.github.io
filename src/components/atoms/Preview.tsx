import React, { ReactElement } from 'react';

import { useData } from '@hooks/useData';

const Preview = (): ReactElement => {
  const { title, subTitle, tag, font, width, height } = useData();

  /*
  조건들이 필요
  1. 제목만 있을 때
  2. 제목과 부제목만 있을 때,
  3. 부제목과 태그만 있을 때.

  --> 이때 사용자들이 제목을 입력하지 않고 부제목이나 태그만 먼저 입력하는 경우에 대한 대응이 필요.
   */

  return (
    <div style={{ width: Number(width), height: Number(height), font, border: '1px solid lightgrey' }}>
      <div>{title}</div>
      <div>{subTitle}</div>
      <div>{tag}</div>
    </div>
  );
};

export default Preview;
