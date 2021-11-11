import React, { ReactElement } from 'react';

import { useData } from '@hooks/useData';

const Preview = (): ReactElement => {
  const { title, subTitle, tag, font, width, height } = useData();

  /*
  구현 조건
  1. 제목만 있을 때
  햣2. 제목과 부제목만 있을 때,
  3. 부제목과 태그만 있을 때.

  --> 이때 사용자들이 제목을 입력하지 않고 부제목이나 태그만 먼저 입력하는 경우에 대한 대응이 필요.



   */

  return (
    <div
      style={{
        width: Number(width),
        height: Number(height),
        font,
        border: '1px solid lightgrey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {/* 제목이 입력되지 않았을 때는 placeholder를 깔아주는 것도 한 방법으로 보인다. */}
      {/* 부제목이 입력되지 않았을 때는 placeHolder 제거}*/}
      <div style={{ display: 'inline-block', fontSize: 40, borderBottom: '1px solid black' }}>{title}</div>
      <div style={{ fontSize: 25 }}>{subTitle}</div>
      <div style={{ fontSize: 15 }}>{tag}</div>
    </div>
  );
};

export default Preview;
